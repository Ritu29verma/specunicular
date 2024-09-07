import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  doctorName: { type: String, required: true }, // Add doctor's name for signup
  phone: { type: String, required: true }, // Add mobile number for signup
  category: { type: String, required: true }, // Add category for signup
  avatar: { type: String }, // Add profile avatar for signup
  password: { type: String, required: true },
  email: {
    type: String,
    required: true, // Ensure the email field is required 
    lowercase: true,
  },
  hospitalId: { type: String },
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
      days: [{ type: String, required: true }],
      startTime: { type: String },
      endTime: { type: String },
      morningStart: { type: String }, // Updated field names
      morningEnd: { type: String },
      afternoonStart: { type: String },
      afternoonEnd: { type: String },
    },
  ],
  consultancyFees: { type: String, required: true },
});

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  hospitalImage:{type:String},
  hospitalId: { type: String, unique: true },
  category: String,
  specialization: String,
  services: String,
  description: String,
  city: String,
  state: String,
  totalBeds: Number,
  availableBeds: Number,
  totalDoctorStaff: Number,
  nursingStaff: Number,
  timings: [
    {
      days: [{ type: String, required: true }],
      startTime: { type: String },
      endTime: { type: String },
    },
  ],
  insuranceClaim: String,
  contactDetails: String,
  doctors: [doctorSchema], // Field to store doctor references
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
