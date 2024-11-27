const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://innovit:FinDeExg8PuUk1LH@innovit.h7aje.mongodb.net/innovit?retryWrites=true&w=majority&appName=innovit");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error('Error during DB operation:', error);
  } 
};

module.exports = connectDB;
