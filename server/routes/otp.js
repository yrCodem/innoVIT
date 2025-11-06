// <---------- Using Brevo ------------>
const express = require("express");
const router = express.Router();
const Otp = require("../models/Otp");
const axios = require("axios");

// Send OTP
router.post("/send-otp", async (req, res) => {
  console.log("Send OTP request received:", req.body);

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP for", email, ":", otp);

    // Delete existing OTP for this email
    await Otp.deleteMany({ email });

    // Create new OTP
    await Otp.create({ email, otp });

    // Send email using Brevo API with axios
    const brevoResponse = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: "innoVIT",
          email: process.env.FROM_EMAIL || "innovit.edu@gmail.com"
        },
        to: [
          {
            email: email,
            name: email.split('@')[0]
          }
        ],
        subject: `${otp} is your innoVIT OTP`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
              <style>
                  body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
                  .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                  .header { text-align: center; margin-bottom: 30px; }
                  .logo { color: #4A90E2; font-size: 24px; font-weight: bold; }
                  .otp-container { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
                  .otp-code { font-size: 32px; font-weight: bold; color: #2ecc71; letter-spacing: 5px; }
                  .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <div class="logo">innoVIT</div>
                      <h2>Your Verification Code</h2>
                  </div>
                  <p>Hello,</p>
                  <p>Use the OTP below to complete your sign-up process:</p>
                  <div class="otp-container">
                      <div class="otp-code">${otp}</div>
                  </div>
                  <p>This OTP is valid for 5 minutes. If you didn't request this, please ignore this email.</p>
                  <div class="footer">
                      <p>Sent with ❤️ by innoVIT • VIT University</p>
                  </div>
              </div>
          </body>
          </html>
        `
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    console.log("✅ OTP email sent successfully via Brevo. Message ID:", brevoResponse.data.messageId);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email successfully",
    });

  } catch (err) {
    console.error("❌ Error in send-otp:", err);

    // More specific error handling
    if (err.response && err.response.data) {
      console.error("Brevo API error details:", err.response.data);
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again.",
    });
  }
});

// Verify OTP (keep this the same)
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

    await Otp.deleteOne({ email: email.trim() });
    console.log("✅ OTP verified successfully for:", email);

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("❌ OTP verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;

// <-------- Using Nodemailer -------->
// const express = require("express");
// const router = express.Router();
// const Otp = require("../models/Otp.js");
// const nodemailer = require("nodemailer");

// // Send OTP
// router.post("/send-otp", async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({
//       success: false,
//       message: "Email is required",
//     });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   try {
//     // Delete existing OTP for this email
//     await Otp.deleteMany({ email });

//     // Create new OTP
//     await Otp.create({ email, otp });

//     // Configure nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: `${otp} is your innoVIT OTP`,
//       text: `Your OTP is: ${otp}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px; background: #f9f9f9;">
//           <h2 style="color: #4A90E2;">Welcome to <span style="color: #000;">innoVIT</span> 👋</h2>
//           <p style="font-size: 16px; color: #333;">Use the OTP below to complete your sign-up:</p>
//           <div style="font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #2ecc71; background: #ecf0f1; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
//             ${otp}
//           </div>
//           <p style="font-size: 14px; color: #999;">This OTP is valid for 5 minutes. If you didn't request this, just ignore this email.</p>
//           <hr style="border: none; border-top: 1px solid #ddd;" />
//           <p style="font-size: 12px; color: #bbb;">Sent with ❤️ by innoVIT • VIT University</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({
//       success: true,
//       message: "OTP sent successfully",
//     });
//   } catch (err) {
//     console.error("Error sending OTP:", err);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to send OTP",
//     });
//   }
// });

// // Verify OTP
// router.post("/verify-otp", async (req, res) => {
//   try {
//     const { email, otp } = req.body;

//     if (!email?.trim() || !otp?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and OTP are required",
//       });
//     }

//     const record = await Otp.findOne({ email: email.trim() });

//     if (!record) {
//       return res.status(404).json({
//         success: false,
//         message: "OTP expired or not found",
//       });
//     }

//     if (record.otp !== otp.trim()) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid OTP",
//       });
//     }

//     // Delete the OTP after successful verification
//     await Otp.deleteOne({ email: email.trim() });

//     return res.status(200).json({
//       success: true,
//       message: "OTP verified successfully",
//     });
//   } catch (error) {
//     console.error("OTP verification error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
