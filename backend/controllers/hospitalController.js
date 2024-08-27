import express from 'express';
import Hospital from '../models/hospitalModel.js';

const router = express.Router();

// Route to register a new hospital
export const registerHospital =  async (req, res) => {
    try {
        const {
          hospitalName,
          hospitalId,
          category,
          specialization,
          services,
          description,
          city,
          state,
          totalBeds,
          availableBeds,
          totalDoctorStaff,
          nursingStaff,
          timings, // This should be a JSON string
          insuranceClaim,
          contactDetails
        } = req.body;
    
        const hospital = new Hospital({
          hospitalName,
          hospitalId,
          category,
          specialization,
          services,
          description,
          city,
          state,
          totalBeds,
          availableBeds,
          totalDoctorStaff,
          nursingStaff,
          timings: JSON.parse(timings), // Parse the JSON string into an object
          insuranceClaim,
          contactDetails
        });
    
        await hospital.save();
        res.status(201).json({ message: 'Hospital registered successfully!' });
      } catch (error) {
        console.error('Error registering hospital:', error);
        res.status(500).json({ message: 'Error registering hospital', error: error.message });
      }
};

// Route to get all hospitals
export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find({});
    res.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ message: 'Error fetching hospitals', error: error.message });
  }
};

export const getHospitalById = async (req, res) => {
  try {
    const hospitalId = req.params.id;
    const hospital = await Hospital.findById(hospitalId).populate('doctors');

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    res.json(hospital);
  } catch (error) {
    console.error('Error fetching hospital:', error);
    res.status(500).json({ message: 'Error fetching hospital', error: error.message });
  }
};


export const approveHospital = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    hospital.isApproved = true;
    await hospital.save();

    res.status(200).json({ message: 'Hospital approved successfully!' });
  } catch (error) {
    console.error('Error approving hospital:', error);
    res.status(500).json({ message: 'Error approving hospital', error: error.message });
  }
};

export default router;
