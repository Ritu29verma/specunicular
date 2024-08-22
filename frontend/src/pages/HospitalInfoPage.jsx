import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./HospitalInfoPage.css"

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
    return <p>Loading...</p>;
  }

  return (
    <div className="hospital-info">
      <h2>{hospital.hospitalName}</h2>
      <p>Location: {hospital.city}, {hospital.locality}</p>
      <p>Total Beds: {hospital.totalBeds}</p>
      <p>Available Beds: {hospital.availableBeds}</p>
      <p>Category: {hospital.category}</p>
      <p>Specialization: {hospital.specialization}</p>
      <p>Description: {hospital.description}</p>
      <p>Contact: {hospital.contactDetails}</p>
      <p>Insurance Claim: {hospital.insuranceClaim ? 'Yes' : 'No'}</p>

      <h3>Doctors at this Hospital:</h3>
      <ul>
        {hospital.doctors.map((doctor) => (
          <li key={doctor._id}>
            <strong>{doctor.doctorName}</strong> - {doctor.specialization}
            <br />
            Consultancy Fees: {doctor.consultancyFees}
            <br />
            Timing Slots:
            <ul>
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
  );
};

export default HospitalInfo;