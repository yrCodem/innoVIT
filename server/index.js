const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
// const User = require("./models/Users.js");
const Subject = require("./models/Subject.js");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Hello, from backend / route",
  });
});

app.get("/api/subjects", async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching subjects." });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
