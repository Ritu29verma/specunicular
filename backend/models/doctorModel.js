// models/Doctor.js
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const doctorSchema = new mongoose.Schema({
  doctorName: { type: String, required: true }, // Add doctor's name for signup
  phone: { type: String, required: true, unique: true }, // Add mobile number for signup
  category: { type: String, required: true }, // Add category for signup
  avatar: { type: String }, // Add profile avatar for signup
  password: { type: String, required: true },
  email: {
    type: String,
    required: true, // Ensure the email field is required
    unique: true, // Ensure the email field is unique
    trim: true,
    lowercase: true
  },
  registrationNo: { type: String, required: true },
  registrationCouncil: { type: String, required: true },
  registrationYear: { type: String, required: true },
  degree: { type: String, required: true },
  college: { type: String, required: true },
  completionYear: { type: String, required: true },
  experience: { type: String, required: true },
  establishmentName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  identityProof: { type: String, required: true },
  medicalRegistrationProof: { type: String, required: true },
  establishmentProof: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  timingSlots: [
    {
      day: { type: String, required: true },
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    },
  ],
  consultancyFees: { type: String, required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

doctorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});
export default Doctor;
