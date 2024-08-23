import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HospitalInfo = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/hospitals/${id}`);
        setHospital(response.data);
      } catch (error) {
        console.error('Error fetching hospital:', error);
      }
    };

    fetchHospital();
  }, [id]);

  if (!hospital) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{hospital.hospitalName}</h2>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Location:</strong> {hospital.city}, {hospital.locality}
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Total Beds:</strong> {hospital.totalBeds}
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Available Beds:</strong> {hospital.availableBeds}
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Category:</strong> {hospital.category}
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Specialization:</strong> {hospital.specialization}
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Description:</strong> {hospital.description}
        </p>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Contact:</strong> {hospital.contactDetails}
        </p>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Insurance Claim:</strong> {hospital.insuranceClaim ? 'Yes' : 'No'}
        </p>

        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Doctors at this Hospital:</h3>
        <ul className="space-y-4">
          {hospital.doctors.map((doctor) => (
            <li key={doctor._id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-800">{doctor.doctorName}</h4>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Consultancy Fees:</strong> {doctor.consultancyFees}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Timing Slots:</strong>
              </p>
              <ul className="list-disc pl-5 text-gray-500">
                {doctor.timingSlots.map((slot, index) => (
                  <li key={index}>
                    {slot.day}: {slot.startTime} - {slot.endTime}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HospitalInfo;
