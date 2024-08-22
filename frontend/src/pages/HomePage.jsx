import React from 'react';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard';
import HospitalCard from '../components/HospitalCard';
import './HomePage.css'; // Add styling if needed

const HomePage = () => {

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


  return (
    // <div className="home-page">
    //   <h1>Welcome to the Healthcare Portal</h1>
    //   <div className="login-register">
    //     <Link to="/doctor-registration" className="button">Register as Doctor</Link>
    //     <Link to="/hospital-registration" className="button">Register as Hospital</Link>
    //   </div>
    //   <div className="info-cards">
    //   </div>
    // </div>

    <div className="min-h-screen flex flex-col ">
    <Navbar showLogin={true} showLogout = {true} showOther={true} />
    <div className="flex flex-1 flex-col items-center justify-center bg-lightGreen py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-docsoGreen mb-8 text-center">Welcome to Docso</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl">
        <div
className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
<div className="flex flex-col items-center">
  <img 
    src="https://img.icons8.com/color/96/000000/doctor-male.png" 
    alt="Doctor" 
    className="mb-4 w-24 h-24"
  />
  <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">
    Are you a Doctor?
  </h2>
  <p className="text-gray-600 text-center">
    Join our network to provide expert healthcare to patients around the world.
  </p>
  <div className="mt-4 flex space-x-4">
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200"
      onClick={() => navigate('/login')}
    >
      Login as a Doctor
    </button>
    <button
      className="bg-docsoGreen text-white px-4 py-2 rounded hover:bg-middleGreen transition-colors duration-200"
      onClick={() => navigate('/doctor-registration')}
    >
      Register Yourself
    </button>
  </div>
</div>
</div>
        <div
          className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <img 
              src="https://img.icons8.com/color/96/000000/hospital-room.png" 
              alt="Hospital" 
              className="mb-4 w-24 h-24"
            />
            <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">Are you a Hospital?</h2>
            <p className="text-gray-600 text-center">Partner with us to bring top-notch medical services to more people.</p>
            <div className="mt-4 flex space-x-4">
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200"
      onClick={() => navigate('/login')}
    >
      Login as a Hospital
    </button>
    <button
      className="bg-docsoGreen text-white px-4 py-2 rounded hover:bg-middleGreen transition-colors duration-200"
      onClick={() => navigate('/hospital-registration')}
    >
      Register Yourself
    </button>
  </div>
          </div>
        </div>
        
      </div>

      <div className="homepage">
      <h2>Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>

      <h2>Hospitals</h2>
      <div className="hospital-list">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital._id} hospital={hospital} />
        ))}
      </div>
    </div>
  
    </div>
    <Footer />
  </div>
  );
};

export default HomePage;
