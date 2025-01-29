const express = require("express");
const { sendContactForm } = require("../Controllers/contactControler");
const router = express.Router();

// Define the route for sending contact form
router.post("/sendContactForm", sendContactForm);

module.exports = router;
