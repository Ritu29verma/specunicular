// services/emailService.js
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

// Function to send approval email
const sendApprovalEmail = async (doctor) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: doctor.email, // Recipient's email
    subject: 'Doctor Registration Approved',
    text: `Dear Dr. ${doctor.name},

Your registration has been approved successfully.

Thank you,
Admin Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Approval email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendApprovalEmail;
