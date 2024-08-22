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
    <div className="home-page">
      <h1>Welcome to the Healthcare Portal</h1>
      <div className="login-register">
        <Link to="/doctor-registration" className="button">Register as Doctor</Link>
        <Link to="/hospital-registration" className="button">Register as Hospital</Link>
      </div>
      <div className="info-cards">
        {/* Category and hospital info cards */}
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
  );
};

export default HomePage;
