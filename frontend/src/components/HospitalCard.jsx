import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hospitals/${hospital._id}`);
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={handleCardClick}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3">{hospital.hospitalName}</h3>
      <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Category:</span> {hospital.category}</p>
      <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Specialization:</span> {hospital.specialization}</p>
      <p className="text-gray-700 text-sm mb-4"><span className="font-semibold">City:</span> {hospital.city}</p>

      <div className="bg-gray-200 p-3 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold text-sm mb-1">Services:</p>
        <p className="text-gray-600 text-sm">
          {hospital.services}
        </p>
      </div>

      <div className="bg-gray-200 p-3 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold text-sm mb-1">Beds Information:</p>
        <p className="text-gray-600 text-sm"><span className="font-semibold">Total Beds:</span> {hospital.totalBeds}</p>
        <p className="text-gray-600 text-sm"><span className="font-semibold">Available Beds:</span> {hospital.availableBeds}</p>
      </div>

      <div className="bg-gray-200 p-3 rounded-lg">
        <p className="text-gray-800 font-semibold text-sm mb-1">Doctors:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {hospital.doctors && hospital.doctors.length > 0 ? (
            hospital.doctors.map((doctor, index) => (
              <li key={index}>{doctor.doctorName}</li>
            ))
          ) : (
            <li>No doctors listed</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HospitalCard;
