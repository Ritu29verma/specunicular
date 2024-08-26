import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/doctor/${doctor._id}`);
  };

  const status = doctor.isApproved;

  if (!status) {
    // If the doctor is not approved, don't render the card
    return null;
  }

  return (
    <div
      className="bg-gradient-to-r from-lightGreen to-middleGreen p-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-center mb-4">
        <img
          src={doctor.avatar}
          alt={doctor.doctorName}
          className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-docsoGreen"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.doctorName}</h3>
          <p className="text-gray-700 text-sm mb-1">
            <span className="font-semibold">Category:</span> {doctor.category}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <span className="font-semibold">City:</span> {doctor.city}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <span className="font-semibold">Consultancy Fees:</span> INR {doctor.consultancyFees}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-docsoGreen font-semibold text-sm mb-2">Timing Slots:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {doctor.timingSlots && doctor.timingSlots.length > 0 ? (
            doctor.timingSlots.map((slot, index) => (
              <li key={index}>
                {slot.day}: {slot.startTime} - {slot.endTime}
              </li>
            ))
          ) : (
            <p className="text-gray-600">No timing slots available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorCard;
