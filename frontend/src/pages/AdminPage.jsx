import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors/all');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hospitals/all-hospitals');
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchDoctors();
    fetchHospitals();
  }, []);

  const handleApprove = async (doctorId) => {
    try {
      await axios.post(`http://localhost:5000/api/doctors/${doctorId}/approve`);
      setDoctors(doctors.map(doctor =>
        doctor._id === doctorId ? { ...doctor, isApproved: true } : doctor
      ));
    } catch (error) {
      console.error('Error approving doctor:', error);
    }
  };
  // const handleApproveHospitals = async (hospitalId) => {
  //   try {
  //     await axios.post(`http://localhost:5000/api/hospitals/${hospitalId}/approve`);
  //     setHospitals(hospitals.map(hospital =>
  //       hospital._id === hospitalId ? { ...hospital, isApproved: true } : hospital
  //     ));
  //   } catch (error) {
  //     console.error('Error approving hospital:', error);
  //   }
  // };

  const formatTimingSlots = (slots) => {
    return slots.map((slot, index) => (
      <div key={index}>
        {slot.day}: {slot.startTime} - {slot.endTime}
      </div>
    ));
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>All Registered Doctor</h2>
      <table>
        <thead>
          <tr>
            <th>Registration No</th>
            <th>Name</th>
            <th>City</th>
            <th>Specialization</th>
            <th>Timing Slots</th>
            <th>Consultancy Fees</th>
            <th>Identity Proof</th>
            <th>Medical Registration Proof</th>
            <th>Establishment Proof</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.registrationNo}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.city}</td>
              <td>{doctor.specialization}</td>
              <td>{formatTimingSlots(doctor.timingSlots)}</td>
              <td>{doctor.consultancyFees}</td>
              <td>
                <a href={doctor.identityProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                <a href={doctor.medicalRegistrationProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                <a href={doctor.establishmentProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                {!doctor.isApproved ? (
                  <button onClick={() => handleApprove(doctor._id)}>Approve</button>
                ) : (
                  "Approved"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>All Hospitals</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Registration No</th>
            <th>Name</th>
            <th>City</th>
            <th>Specialization</th>
            <th>Timing Slots</th>
            <th>Consultancy Fees</th>
            <th>Identity Proof</th>
            <th>Medical Registration Proof</th>
            <th>Establishment Proof</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.registrationNo}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.city}</td>
              <td>{doctor.specialization}</td>
              <td>{formatTimingSlots(doctor.timingSlots)}</td>
              <td>{doctor.consultancyFees}</td>
              <td>
                <a href={doctor.identityProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                <a href={doctor.medicalRegistrationProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                <a href={doctor.establishmentProof} target="_blank" rel="noopener noreferrer">View Image</a>
              </td>
              <td>
                {!doctor.isApproved ? (
                  <button onClick={() => handleApprove(doctor._id)}>Approve</button>
                ) : (
                  "Approved"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AdminPage;
