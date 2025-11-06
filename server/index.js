const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db.js')
const otpRoutes = require('./routes/otp.js')
const authRoutes = require('./routes/auth.js')
const subjectRoute = require('./routes/subjects.js')
const uniCollabRoute = require('./routes/uniCollab.js')

require('dotenv').config()

const app = express()

app.use(cookieParser())

// Enhanced CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)

    const allowedOrigins = [
      'https://innovit-0qxd.onrender.com',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:5000'
    ]

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log('Blocked by CORS:', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
  origin: true,
//   origin: 'https://innovit-4naq.onrender.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
}

app.use(cors(corsOptions))

// Handle preflight requests
app.options('*', cors(corsOptions))

app.use(express.json())

// Add request logging middleware
app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${
      req.headers.origin
    }`,
  )
  next()
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  })
})
// OTP
app.use("/api/otp", otpRoutes);
const main = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await connectDB()
    console.log('Starting server...')

    // API Routes
    app.use('/api/subjects', subjectRoute)
    app.use('/api/auth', authRoutes)
    app.use('/api/uniCollab', uniCollabRoute)

    // Root endpoint
    app.get('/', (req, res) => {
      res.json({
        message: 'Hello from innoVIT Server!',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
      })
    })

    // Handle 404
    app.use('*', (req, res) => {
      res.status(404).json({
        error: 'Route not found',
        path: req.originalUrl,
      })
    })

    // Error handling middleware
    app.use((error, req, res, next) => {
      console.error('Error:', error)
      res.status(500).json({
        error: 'Internal server error',
        message: error.message,
      })
    })

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`)
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
      console.log(
        `CORS allowed origins: https://innovit-4naq.onrender.com, http://localhost:5173, http://localhost:3000`,
      )
    })
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

main()

// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const connectDB = require("./config/db.js");
// const authRoutes = require("./routes/auth.js");
// const subjectRoute = require("./routes/subjects.js")
// const uniCollabRoute = require("./routes/uniCollab.js")

// require("dotenv").config();

// const app = express();

// app.use(cookieParser());

// const corsOptions = {
//   origin: process.env.NODE_ENV === 'production'
//     ? 'https://innovit.onrender.com'
//     : 'http://localhost:3000',
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// const main = async () => {
//   try {
//     console.log("connecting to MongoDB...");
//     await connectDB();
//     console.log("Starting server...");

//     app.use("/api/subjects", subjectRoute);
//     app.use("/api/subjects/:title", subjectRoute );
//     app.use("/api/auth", authRoutes);
//     app.use("/api/uniCollab" , uniCollabRoute)

//     app.get ("/" , (req, res) => {
//       res.send("hello abu bakr")
//     })

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server started...!`);
//     });
//   } catch (error) {
//     console.error("Error starting server:", error);
//   }
// };

// main()
