require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Adjust if frontend is hosted elsewhere
app.use(bodyParser.json());

// Ensure environment variables are loaded
if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("Missing EMAIL or PASSWORD in .env file");
    process.exit(1); // Stop server if credentials are missing
}

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, // Corrected environment variable
    },
});

// Email validation function
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Subscription endpoint
app.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email address" });
    }

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Subscription Confirmation",
        text: "Thank you for subscribing!",
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Subscription successful! Check your inbox." });
    } catch (error) {
        console.error("Email sending failed:", error);
        res.status(500).json({ message: "Error sending email. Please try again later." });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
