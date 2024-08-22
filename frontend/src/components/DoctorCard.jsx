

// src/components/DoctorCard.jsx
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
        <div className="doctor-card" onClick={handleCardClick}>
    
          <h3>{doctor.doctorName}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>City: {doctor.city}</p>
          <p>Consultancy Fees: {doctor.consultancyFees}</p>
          <p>Timing Slots:</p>
          <ul>
            {doctor.timingSlots.map((slot, index) => (
              <li key={index}>
                {slot.day}: {slot.startTime} - {slot.endTime}
              </li>
            ))}
          </ul>
          {/* <p>Status: {doctor.isApproved ? "Approved" : "Pending Approval"}</p> */}
        </div>

    )}

export default DoctorCard;
