const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true, 
  },
  content: {
    type: String,
    required: false, 
  },
  listItems: {
    type: [String], 
    default: [],
  },
});

const subjectSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true, 
  },
  sections: {
    type: [sectionSchema], 
    default: [],
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;


