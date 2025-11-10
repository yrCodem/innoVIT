const express = require("express")
const router = express.Router()
const User = require("../models/Users")
const jwt = require("jsonwebtoken")

// Input validation middleware
const validateSignup = (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body

  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    })
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long."
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    })
  }

  next()
}

const validateSignin = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required."
    })
  }

  next()
}

// Signup Route
router.post("/signup", validateSignup, async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body

    // Check for existing user
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
    })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email or username already taken. Please use different credentials.",
      })
    }

    // Create new user
    const newUser = new User({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password,
    })

    await newUser.save()

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
    })
  } catch (error) {
    console.error("Signup error:", error)
    res.status(500).json({
      success: false,
      message: "Error registering user. Please try again.",
    })
  }
})

// Login Route
router.post("/signin", validateSignin, async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    })

    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      token: token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({
      success: false,
      message: "Unable to login. Please try again.",
    })
  }
})

// Validate Token Route
router.get("/validate-token", async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        valid: false,
        message: "Access token required"
      })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      return res.status(401).json({
        success: false,
        valid: false,
        message: "Access token required"
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.userId }).select('-password')

    if (!user) {
      return res.status(401).json({
        success: false,
        valid: false,
        message: "User not found"
      })
    }

    return res.status(200).json({
      success: true,
      valid: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      },
      message: "Token verified successfully"
    })
  } catch (error) {
    console.error("Token validation error:", error)

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        valid: false,
        message: "Invalid token"
      })
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        valid: false,
        message: "Token expired"
      })
    }

    return res.status(500).json({
      success: false,
      valid: false,
      message: "Token validation failed"
    })
  }
})

// Logout Route
router.post("/logout", (req, res) => {
  // Note: For true logout functionality, you might want to implement a token blacklist
  // For now, we'll just return success as the token should be removed from client-side
  res.status(200).json({
    success: true,
    message: "Logged out successfully."
  })
})

// Get current user profile
router.get("/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: "Access token required"
      })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.userId }).select('-password')

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    res.status(500).json({
      success: false,
      message: "Unable to fetch user profile"
    })
  }
})

module.exports = router

// const express = require("express");
// const router = express.Router();
// const User = require("../models/Users");
// const jwt = require("jsonwebtoken");

// // Make sure JWT_SECRET is available
// if (!process.env.JWT_SECRET) {
//   console.error("❌ JWT_SECRET is not set in environment variables");
// }

// router.post("/signup", async (req, res) => {
//   const { firstName, lastName, username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({
//         message: "Email or username already taken. Please use different email or username",
//       });
//     }

//     const newUser = new User({
//       firstName,
//       lastName,
//       username,
//       email,
//       password,
//     });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error registering user." });
//   }
// });

// router.get("/validate-token", async (req, res) => {
//   const token = req.cookies.token;
//   console.log("Validating token...");

//   if (!token) {
//     return res.status(200).json({ valid: false, message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const userId = decoded.userId;
//     const user = await User.findOne({ _id: userId });

//     if (!user) {
//       return res.status(200).json({ valid: false, message: "User not found" });
//     }

//     const username = user.username;
//     return res.status(200).json({ valid: true, username, message: "Verified..." });
//   } catch (error) {
//     console.error("Token validation error:", error);
//     return res.status(200).json({ valid: false, message: "Invalid or expired token" });
//   }
// });

// router.post("/signin", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found: ", email);
//       return res.status(400).json({ message: "Invalid Credentials." });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       console.log("Password mismatch");
//       return res.status(400).json({ message: "Invalid credentials." });
//     }

//     // Create token with JWT_SECRET
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("Token generated successfully");
//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         path: "/",
//         sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
//         maxAge: 3600000, // 1 hour
//       })
//       .status(200)
//       .json({
//         message: "User logged in successfully.",
//         username: user.username,
//       });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Unable to Login." });
//   }
// });

// router.post("/logout", (req, res) => {
//   res
//     .cookie("token", "", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       path: "/",
//       sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
//       expires: new Date(0),
//     })
//     .status(200)
//     .json({ message: "Logged out successfully." });
// });

// module.exports = router;
