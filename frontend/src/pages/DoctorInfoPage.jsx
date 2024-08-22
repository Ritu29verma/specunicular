import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DoctorInfoPage.css';

const DoctorInfo = () => {
  const { doctorId } = useParams(); // Get the doctorId from the URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}`);
        setDoctor(response.data);
      } catch (error) {
        setError('Error fetching doctor information');
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  if (loading) {
    return <p>Loading doctor information...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    doctor && (
      <div className="doctor-info-container">
        <div className="doctor-info-card">
          <h2>{doctor.doctorName}</h2>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p><strong>City:</strong> {doctor.city}</p>
          <p><strong>Locality:</strong> {doctor.locality}</p>
          <p><strong>Consultancy Fees:</strong> ${doctor.consultancyFees}</p>
          
          <h3>Timing Slots</h3>
          <ul>
            {doctor.timingSlots.map((slot, index) => (
              <li key={index}>
                {slot.day}: {slot.startTime} - {slot.endTime}
              </li>
            ))}
          </ul>
          
          {/* Display Images */}
          <div className="doctor-info-images">
            <h3>Proof Documents</h3>
            <div className="proof-images">
              <div className="proof-image">
                <img src={`http://localhost:5000/uploads/establishmentProof/${doctor.establishmentProof}`} alt="Establishment Proof" />
                <p>Establishment Proof</p>
              </div>
              <div className="proof-image">
                <img src={`http://localhost:5000/uploads/identityProof/${doctor.identityProof}`} alt="Identity Proof" />
                <p>Identity Proof</p>
              </div>
              <div className="proof-image">
                <img src={`http://localhost:5000/uploads/medicalRegistrationProof/${doctor.medicalRegistrationProof}`} alt="Medical Registration Proof" />
                <p>Medical Registration Proof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorInfo;
