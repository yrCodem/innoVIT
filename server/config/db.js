const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error('Error during DB operation:', error);
  } 
};

module.exports = connectDB;
