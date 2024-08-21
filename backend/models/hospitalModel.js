import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  hospitalId:String,
  category: String,
  specialization: String,
  services: String,
  description: String,
  city: String,
  state: String,
  locality: String,
  totalBeds: Number,
  availableBeds: Number,
  totalDoctorStaff: Number,
  nursingStaff: Number,
  timings: [{ day: String, startTime: String, endTime: String }],
  insuranceClaim: String,
  contactDetails: String,
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }] // Field to store doctor references
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;
