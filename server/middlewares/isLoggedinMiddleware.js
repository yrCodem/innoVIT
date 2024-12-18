const isLoggedIn = (req, res, next) => {
    if (!req.cookies.token) {
        console.log("no token..?")
      return res.status(500).json({ message: "Please log in first..." });
    } else {
      console.log("Token is present, user verified");
      next();
    }
  };
  
  module.exports = isLoggedIn;
  