const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  // Get token from header
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log('no token..?')
    return res.status(401).json({ message: 'Please log in first...' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    console.log('Token is present, user verified')
    next()
  } catch (error) {
    console.log('Invalid token')
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = isLoggedIn



// const isLoggedIn = (req, res, next) => {
//   if (!req.cookies.token) {
//     console.log('no token..?')
//     return res.status(500).json({ message: 'Please log in first...' })
//   } else {
//     console.log('Token is present, user verified')
//     next()
//   }
// }

// module.exports = isLoggedIn
