import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    return <p className="text-center text-gray-500">Loading doctor information...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    doctor && (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-40">
            <img
              src={`http://localhost:5000/uploads/avatar/${doctor.avatar}`}
              alt={doctor.doctorName}
              className=" m-4 w-40 h-40 rounded-md object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">{doctor.doctorName}</h2>
              <p className="text-lg mb-2"><strong>Category:</strong> {doctor.category}</p>
              <p className="text-lg mb-2"><strong>State:</strong> {doctor.state}</p>
              <p className="text-lg mb-2"><strong>City:</strong> {doctor.city}</p>
              <p className="text-lg mb-4"><strong>Consultancy Fees:</strong> INR {doctor.consultancyFees}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Timing Slots</h3>
            {doctor.timingSlots && Array.isArray(doctor.timingSlots) ? (
              <ul className="list-disc list-inside text-gray-600 text-xl">
                {doctor.timingSlots.map((slot) => (
                  <li key={slot._id}>
                    {slot.day}: {slot.startTime} - {slot.endTime}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No timing slots available.</p>
            )}
          </div>

          {/* Display Images */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Proof Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {doctor.establishmentProof && (
                <div className="proof-image">
                  <img
                    src={`http://localhost:5000/uploads/establishmentProof/${doctor.establishmentProof}`}
                    alt="Establishment Proof"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                  <p className="text-center mt-2">Establishment Proof</p>
                </div>
              )}
              {doctor.identityProof && (
                <div className="proof-image">
                  <img
                    src={`http://localhost:5000/uploads/identityProof/${doctor.identityProof}`}
                    alt="Identity Proof"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                  <p className="text-center mt-2">Identity Proof</p>
                </div>
              )}
              {doctor.medicalRegistrationProof && (
                <div className="proof-image">
                  <img
                    src={`http://localhost:5000/uploads/medicalRegistrationProof/${doctor.medicalRegistrationProof}`}
                    alt="Medical Registration Proof"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                  <p className="text-center mt-2">Medical Registration Proof</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorInfo;
