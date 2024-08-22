// src/components/HospitalCard.jsx
import React from 'react';
import {useNavigate} from 'react-router-dom'

const HospitalCard = ({ hospital }) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/hospitals/${hospital._id}`);
    };

  return (
    <div className="hospital-card" onClick={handleCardClick}>
      <h3>{hospital.hospitalName}</h3>
      <p>Category: {hospital.category}</p>
      <p>Specialization: {hospital.specialization}</p>
      <p>City: {hospital.city}</p>
      {/* <p>Services: {hospital.services.join(', ')}</p>
      <p>Total Beds: {hospital.totalBeds}</p>
      <p>Available Beds: {hospital.availableBeds}</p> */}
      {/* <p>Doctors:</p> */}
      {/* <ul>
        {hospital.doctors.map((doctor, index) => (
          <li key={index}>{doctor.doctorName}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default HospitalCard;
