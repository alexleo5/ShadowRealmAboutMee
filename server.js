const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the contact page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Handle form submission
app.post('/submit_contact', (req, res) => {
    const { user_name, user_email, user_message } = req.body;

    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com', // Replace with your Gmail email
            pass: 'your_password' // Replace with your Gmail password
        }
    });

    // Email options
    const mailOptions = {
        from: user_email,
        to: 'your_email@gmail.com', // Replace with your Gmail email
        subject: 'New Contact Form