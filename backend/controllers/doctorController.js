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

// const validateTimingSlots = (timingSlots) => {
//   return timingSlots.every(slot => 
//     slot.day && slot.startTime && slot.endTime
//   );
// }

// Register doctor
export const registerDoctor = async (req, res) => {
  try {
    const {
      doctorName,
      phone,
      category,
      password,
      hospitalId,
      registrationNo,
      registrationCouncil,
      registrationYear,
      degree,
      college,
      completionYear,
      experience,
      establishmentName,
      city,
      state,
      email,
      timingSlots,
      consultancyFees,
    } = req.body;
  
    console.log("Received timingSlots:", timingSlots);

    // if (!validateTimingSlots(JSON.parse(timingSlots || '[]'))) {
    //   return res.status(400).json({ message: "Invalid timing slots. Please ensure all required fields are filled." });
    // }

    // Handle file uploads
    const identityProof = req.files.identityProof
      ? uploadFile(req.files.identityProof, "identityProof")
      : "";
    const avatar = req.files.avatar
      ? uploadFile(req.files.avatar, "avatar")
      : "";
    const medicalRegistrationProof = req.files.medicalRegistrationProof
      ? uploadFile(req.files.medicalRegistrationProof, "medicalRegistrationProof")
      : "";
    const establishmentProof = req.files.establishmentProof
      ? uploadFile(req.files.establishmentProof, "establishmentProof")
      : "";

    // Create new doctor record
    const doctor = new Doctor({
      doctorName,
      phone,
      category,
      avatar: avatar,
      password,
      hospitalId,
      registrationNo,
      registrationCouncil,
      registrationYear,
      degree,
      college,
      completionYear,
      experience,
      establishmentName,
      city,
      state,
      email,
      identityProof,
      medicalRegistrationProof,
      establishmentProof,
      timingSlots: JSON.parse(timingSlots || '[]'), // Default to empty array if timingSlots is not provided
      consultancyFees,
    });

    // Save doctor to database
    await doctor.save();

    // Update hospital with new doctor
    const updatedHospital = await Hospital.findOneAndUpdate(
      { hospitalId: hospitalId },
      { $push: { doctors: doctor } }, // Push doctor ID to hospital's doctors array
      { new: true, upsert: true } // Return updated document or create a new one if none exists
    );

    if (!updatedHospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(201).json({ message: "Doctor registered successfully!" });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Duplicate key error", details: error.keyValue });
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
    const baseUrl = `${req.protocol}://${req.get("host")}/uploads/`;

    // Map the doctor records to include full URLs for file proofs
    res.json(
      doctors.map((doctor) => ({
        ...doctor._doc,
        identityProof: doctor.identityProof ? `${baseUrl}identityProof/${doctor.identityProof}` : "",
        medicalRegistrationProof: doctor.medicalRegistrationProof ? `${baseUrl}medicalRegistrationProof/${doctor.medicalRegistrationProof}` : "",
        establishmentProof: doctor.establishmentProof ? `${baseUrl}establishmentProof/${doctor.establishmentProof}` : "",
        avatar: doctor.avatar ? `${baseUrl}avatar/${doctor.avatar}` : "",
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
};

// Approve a doctor
export const approveDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    if (doctor.isApproved) {
      return res.status(400).json({ message: "Doctor is already approved" });
    }

    doctor.isApproved = true;
    await doctor.save();

    await sendApprovalEmail(doctor);

    res.status(200).json({ message: "Doctor approved successfully" });
  } catch (error) {
    console.error("Error approving doctor:", error);
    res.status(500).json({ message: "Error approving doctor", error: error.message });
  }
};

// Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ message: "Error fetching doctor", error: error.message });
  }
};
