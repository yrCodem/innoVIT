const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db.js')
const authRoutes = require('./routes/auth.js')
const subjectRoute = require('./routes/subjects.js')
const uniCollabRoute = require('./routes/uniCollab.js')

require('dotenv').config()

const app = express()

app.use(cookieParser())

const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production'
      ? [
          //   'https://your-vercel-app.vercel.app',
          'https://innovit-4naq.onrender.com',
        ]
      : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())

const main = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await connectDB()
    console.log('Starting server...')

    app.use('/api/subjects', subjectRoute)
    app.use('/api/auth', authRoutes)
    app.use('/api/uniCollab', uniCollabRoute)

    app.get('/', (req, res) => {
      res.send('Hello from innoVIT Server!')
    })

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
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
