import Doctor from "../models/doctorModel.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import sendApprovalEmail from "../services/emailService.js";
import Hospital from "../models/hospitalModel.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to handle file uploads
const uploadFile = (file, folder) => {
  const uploadPath = path.join(__dirname, "../uploads", folder, file.name);
  file.mv(uploadPath, (err) => {
    if (err) {
      throw err;
    }
  });
  return file.name;
};

// Register doctor
export const registerDoctor = async (req, res) => {
  try {
    const { hospitalId, registrationNo, registrationCouncil, registrationYear, degree, college, completionYear, experience, establishmentName, city, locality, email, timingSlots, consultancyFees } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    if (!hospitalId || !mongoose.Types.ObjectId.isValid(hospitalId)) {
      return res.status(400).json({ message: 'Invalid Hospital ID' });
    }

    // Handle file uploads
    const identityProof = req.files.identityProof ? uploadFile(req.files.identityProof, 'identityProof') : '';
    const medicalRegistrationProof = req.files.medicalRegistrationProof ? uploadFile(req.files.medicalRegistrationProof, 'medicalRegistrationProof') : '';
    const establishmentProof = req.files.establishmentProof ? uploadFile(req.files.establishmentProof, 'establishmentProof') : '';

    // Create new doctor record
    const doctor = new Doctor({
      hospitalId: mongoose.Types.ObjectId(hospitalId),
      registrationNo,
      registrationCouncil,
      registrationYear,
      degree,
      college,
      completionYear,
      experience,
      establishmentName,
      city,
      locality,
      email,
      identityProof,
      medicalRegistrationProof,
      establishmentProof,
      timingSlots: JSON.parse(timingSlots),
      consultancyFees
    });

    // Save doctor to database
    await doctor.save();

    await Hospital.findByIdAndUpdate(
      mongoose.Types.ObjectId(hospitalId), // Ensure hospitalId is a valid ObjectId
      { $push: { doctors: doctor._id } }
    );

    res.status(201).json({ message: 'Doctor registered successfully!' });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Duplicate key error', details: error.keyValue });
    }
    res.status(500).json({ message: error.message });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    // Fetch all doctor records from the database
    const doctors = await Doctor.find({});
    
    // Base URL for file serving
    const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;

    // Map the doctor records to include full URLs for file proofs
    res.json(doctors.map(doctor => ({
      ...doctor._doc,
      identityProof: `${baseUrl}identityProof/${doctor.identityProof}`,
      medicalRegistrationProof: `${baseUrl}medicalRegistrationProof/${doctor.medicalRegistrationProof}`,
      establishmentProof: `${baseUrl}establishmentProof/${doctor.establishmentProof}`,
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error });
  }
};

// Approve a doctor
export const approveDoctor = async (req, res) => {
  try {
    // Get the doctor ID from request params
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);

    // Check if doctor exists
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Check if doctor is already approved
    if (doctor.isApproved) {
      return res.status(400).json({ message: 'Doctor is already approved' });
    }

    // Approve the doctor
    doctor.isApproved = true;
    await doctor.save();

    await sendApprovalEmail(doctor);

    res.status(200).json({ message: 'Doctor approved successfully' });
  } catch (error) {
    console.error('Error approving doctor:', error);
    res.status(500).json({ message: 'Error approving doctor', error: error.message });
  }
};
