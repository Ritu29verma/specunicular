// services/emailService.js
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your SMTP host
  port: 587, // or 465 for secure connections
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'uv84690@gmail.com', // Your email
    pass: 'lvwpefogwgqfxiox', // Your email password
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
