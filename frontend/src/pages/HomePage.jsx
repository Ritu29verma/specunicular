import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css'; // Add styling if needed

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
