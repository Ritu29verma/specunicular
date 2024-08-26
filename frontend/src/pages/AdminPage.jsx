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
    };
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

  const formatTimingSlots = (slots) => {
    return slots.map((slot, index) => (
      <div key={index}>
        {slot.day}: {slot.startTime} - {slot.endTime}
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Registered Doctors</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Registration No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Timing Slots</th>
              <th className="py-2 px-4 border-b">Consultancy Fees</th>
              <th className="py-2 px-4 border-b">Identity Proof</th>
              <th className="py-2 px-4 border-b">Medical Registration Proof</th>
              <th className="py-2 px-4 border-b">Establishment Proof</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{doctor.registrationNo}</td>
                <td className="py-2 px-4 border-b">{doctor.doctorName}</td>
                <td className="py-2 px-4 border-b">{doctor.city}</td>
                <td className="py-2 px-4 border-b">{doctor.category}</td>
                <td className="py-2 px-4 border-b">{formatTimingSlots(doctor.timingSlots)}</td>
                <td className="py-2 px-4 border-b">{doctor.consultancyFees}</td>
                <td className="py-2 px-4 border-b">
                  <a href={doctor.identityProof} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a>
                </td>
                <td className="py-2 px-4 border-b">
                  <a href={doctor.medicalRegistrationProof} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a>
                </td>
                <td className="py-2 px-4 border-b">
                  <a href={doctor.establishmentProof} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a>
                </td>
                <td className="py-2 px-4 border-b">
                  {!doctor.isApproved ? (
                    <button 
                      onClick={() => handleApprove(doctor._id)}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-green-500">Approved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Registered Hospitals</h2>
        {/* Table or list for hospitals can be added similarly */}
      </div>
    </div>
  );
};

export default AdminPage;
