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
      className="bg-gradient-to-r from-green-50 to-green-100 p-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={handleCardClick}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3">{doctor.doctorName}</h3>
      <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Specialization:</span> {doctor.specialization}</p>
      <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">City:</span> {doctor.city}</p>
      <p className="text-gray-700 text-sm mb-4"><span className="font-semibold">Consultancy Fees:</span> {doctor.consultancyFees}</p>

      <div className="bg-gray-200 p-3 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold text-sm mb-1">Timing Slots:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {doctor.timingSlots && doctor.timingSlots.length > 0 ? (
            doctor.timingSlots.map((slot, index) => (
              <li key={index}>
                {slot.day}: {slot.startTime} - {slot.endTime}
              </li>
            ))
          ) : (
            <li>No timing slots available</li>
          )}
        </ul>
      </div>

     
    </div>
  );
};

export default DoctorCard;
