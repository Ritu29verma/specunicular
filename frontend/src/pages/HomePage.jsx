import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard';
import HospitalCard from '../components/HospitalCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const HomePage = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors/all');
        setDoctors(response.data.filter(doctor => doctor.isApproved).slice(0, 10)); // Limit to 10
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hospitals/all-hospitals');
        setHospitals(response.data.slice(0, 10)); // Limit to 10
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchDoctors();
    fetchHospitals();
  }, []);

  const getSliderSettings = (items) => {
    const slidesToShow = items.length < 3 ? items.length : 3;
    return {
      dots: items.length > 1,
      infinite: items.length > 1,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      centerMode: items.length <= 3,
      centerPadding: items.length <= 3 ? '0' : '20px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: items.length < 2 ? items.length : 2,
            slidesToScroll: 1,
            centerMode: items.length <= 2,
            centerPadding: items.length <= 2 ? '0' : '10px',
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: items.length < 1 ? items.length : 1,
            slidesToScroll: 1,
            centerMode: items.length <= 1,
            centerPadding: items.length <= 1 ? '0' : '5px',
          },
        },
      ],
    };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showLogin={true} showLogout={true} showOther={true} />
      <div className="flex flex-1 flex-col items-center justify-center bg-lightGreen py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-docsoGreen mb-8 text-center">Welcome to Docso</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl">
          {/* Doctor and Hospital Registration Boxes */}
          <div className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-90 hover:shadow-2xl">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/000000/doctor-male.png" alt="Doctor" className="mb-4 w-24 h-24" />
              <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">Are you a Doctor?</h2>
              <p className="text-gray-600 text-center">Join our network to provide expert healthcare to patients around the world.</p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200" onClick={() => navigate('/login')}>Login as a Doctor</button>
                <button className="bg-docsoGreen text-white px-4 py-2 rounded hover:bg-middleGreen transition-colors duration-200" onClick={() => navigate('/doctor-registration')}>Register Yourself</button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 m-4 w-full md:w-2/5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/000000/hospital-room.png" alt="Hospital" className="mb-4 w-24 h-24" />
              <h2 className="text-2xl font-semibold text-indigo-800 text-center mb-4">Are you a Hospital?</h2>
              <p className="text-gray-600 text-center">Partner with us to bring top-notch medical services to more people.</p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200" onClick={() => navigate('/login')}>Login as a Hospital</button>
                <button className="bg-docsoGreen text-white px-4 py-2 rounded hover:bg-middleGreen transition-colors duration-200" onClick={() => navigate('/hospital-registration')}>Register Yourself</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-docsoGreen mb-4">Doctors</h2>
          {doctors.length > 0 ? (
            <Slider {...getSliderSettings(doctors)}>
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </Slider>
          ) : (
            <p className="text-gray-600">No doctors available</p>
          )}

          <h2 className="text-2xl font-bold text-docsoGreen mt-10 mb-4">Hospitals</h2>
          {hospitals.length > 0 ? (
            <Slider {...getSliderSettings(hospitals)}>
              {hospitals.map((hospital) => (
                <HospitalCard key={hospital._id} hospital={hospital} />
              ))}
            </Slider>
          ) : (
            <p className="text-gray-600">No hospitals available</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
