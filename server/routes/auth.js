const express = require("express")
const router = express.Router()
const User = require("../models/Users.js")
const jwt = require("jsonwebtoken")

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body

    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email or username already taken. Please use different email or username",
      })
    }

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    })
    await newUser.save()

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error registering user.",
    })
  }
})

// Login Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      console.log("User not found: ", email)
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials.",
      })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      console.log("Password mismatch")
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
      })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    })

    console.log("Token generated successfully")
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
    console.error("Error during login:", error)
    res.status(500).json({
      success: false,
      message: "Unable to login.",
    })
  }
})

// Validate Token Route
router.get("/validate-token", async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(200).json({
        success: false,
        valid: false,
        message: "No token provided"
      })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.userId })

    if (!user) {
      return res.status(200).json({
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
    return res.status(200).json({
      success: false,
      valid: false,
      message: "Invalid or expired token"
    })
  }
})

// Logout Route
router.post("/logout", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully."
  })
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
