const express = require("express");
const router = express.Router();
const Otp = require("../models/Otp.js");
const nodemailer = require("nodemailer");

// Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Delete existing OTP for this email
    await Otp.deleteMany({ email });

    // Create new OTP
    await Otp.create({ email, otp });

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `${otp} is your innoVIT OTP`,
      text: `Your OTP is: ${otp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px; background: #f9f9f9;">
          <h2 style="color: #4A90E2;">Welcome to <span style="color: #000;">innoVIT</span> 👋</h2>
          <p style="font-size: 16px; color: #333;">Use the OTP below to complete your sign-up:</p>
          <div style="font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #2ecc71; background: #ecf0f1; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
            ${otp}
          </div>
          <p style="font-size: 14px; color: #999;">This OTP is valid for 5 minutes. If you didn't request this, just ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #bbb;">Sent with ❤️ by innoVIT • VIT University</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.error("Error sending OTP:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
});

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email?.trim() || !otp?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const record = await Otp.findOne({ email: email.trim() });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "OTP expired or not found",
      });
    }

    if (record.otp !== otp.trim()) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Delete the OTP after successful verification
    await Otp.deleteOne({ email: email.trim() });

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
