const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const User = require("./models/Users.js");

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
