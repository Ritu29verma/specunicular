import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminPage = ({ doctor }) => {
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [customMessage, setCustomMessage] = useState("");
  const [showTextarea, setShowTextarea] = useState(false);
  const [rejectedDoctorId, setRejectedDoctorId] = useState(null);
  const navigate = useNavigate();

  // Use the environment variable here
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/doctors/all`);
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    const fetchHospitals = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/hospitals/all-hospitals`);
        setHospitals(response.data);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchDoctors();
    fetchHospitals();
  }, [baseUrl]);

  const handleApprove = async (doctorId) => {
    try {
      await axios.post(`${baseUrl}/api/doctors/${doctorId}/approve`);
      setDoctors(
        doctors.map((doctor) =>
          doctor._id === doctorId ? { ...doctor, isApproved: true } : doctor
        )
      );
    } catch (error) {
      console.error("Error approving doctor:", error);
    }
  };

  const handleReject = async (doctorId) => {
    try {
      const response = await axios.post(`${baseUrl}/api/doctors/${doctorId}/reject`, {
        customMessage,
      });
      console.log(response.data.message); // Success message
      setCustomMessage("");
      setRejectedDoctorId(null);
    } catch (error) {
      console.error("Error rejecting doctor:", error);
    }
  };

  const formatTimingSlots = (slots) => {
    return slots.map((slot, index) => (
      <div key={index}>
        {slot.day}: {slot.startTime} - {slot.endTime}
      </div>
    ));
  };

  const handleClick = (doctorId) => {
    navigate(`/doctor/${doctorId}`);
  };

  return (
    <div>
      <Navbar showOther={true} />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Registered Doctors</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border-b border-r border-gray-300">
                  Registration No
                </th>
                <th className="py-2 px-4 border-b border-r border-gray-300">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-r border-gray-300">
                  City
                </th>
                <th className="py-2 px-4 border-b border-r border-gray-300">
                  Category
                </th>
                <th className="py-2 px-4 border-b border-r border-gray-300">
                  Consultancy Fees
                </th>
                <th className="py-2 px-4 border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-r border-gray-300">
                    {doctor.registrationNo}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">
                    {doctor.doctorName}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">
                    {doctor.city}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">
                    {doctor.category}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-300">
                    {doctor.consultancyFees}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
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
                    <button
                      onClick={() => handleClick(doctor._id)}
                      className="bg-yellow-500 text-white px-6 py-1 rounded hover:bg-green-600 ml-2"
                    >
                      Review
                    </button>

                    {rejectedDoctorId === doctor._id ? (
                      <div>
                        <textarea
                          placeholder="Enter custom rejection message"
                          value={customMessage}
                          onChange={(e) => setCustomMessage(e.target.value)}
                          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                          rows="4"
                        ></textarea>

                        <button
                          onClick={() => handleReject(doctor._id)}
                          className="bg-red-500 text-white px-7 py-1 rounded-lg transition hover:bg-red-600"
                        >
                          Send
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setRejectedDoctorId(doctor._id)}
                        className="bg-red-500 text-white px-7 py-1 rounded-lg transition hover:bg-red-600 ml-2"
                      >
                        Reject
                      </button>
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
    </div>
  );
};

export default AdminPage;
