const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject.js");
const isLoggedin = require("../middlewares/isLoggedinMiddleware.js");

router.get("/subjectcode", async (req, res) => {
  try {
    const subjects = await Subject.find({}).select("subjectCode mainTitle");
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching subjects." });
  }
});

router.get("/:code", isLoggedin, async (req, res) => {
  try {
    const subject = await Subject.findOne({ subjectCode: req.params.code });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json({
      message: "Subject found",
      subject: subject,
    });
  } catch (error) {
    console.error("Error fetching subject:", error);
    res.status(500).json({ message: "Error fetching subject." });
  }
});

module.exports = router;
