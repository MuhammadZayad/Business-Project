const nodemailer = require("nodemailer");
const multer = require("multer");
const Contact = require("../Models/Contact");
const path = require("path");

// Set up Multer Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Add timestamp to avoid overwriting
  },
});

const upload = multer({ storage: storage });

// Email sending function using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your Gmail
    pass: process.env.PASSWORD, // Gmail App Password
  },
});

const sendEmailWithAttachment = async (email, subject, message, filePath) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECEIVER_EMAIL, // Receiver's email
      subject: subject,
      text: `Email: ${email}\nMessage: ${message}`,
      attachments: [
        {
          path: filePath, // Path to the uploaded file
        },
      ],
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

// Controller for handling the contact form
exports.sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save contact details in DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Handle file upload
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Error uploading file" });
      }

      // File uploaded successfully, now send email with the uploaded file
      await sendEmailWithAttachment(email, "New Contact Form Submission", message, req.file.path);

      res.status(200).json({ success: true, message: "Message sent successfully!" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending message" });
  }
};
