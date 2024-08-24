import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import { State, City } from 'country-state-city';
import Navbar from '../Navbar';
import MapComponent from '../MapComponent';

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => { 
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [errors, setErrors] = useState({});

  // Fetch states of India when component mounts
  useEffect(() => {
    const indianStates = State.getStatesOfCountry('IN');
    setStates(indianStates);
  }, []);

  // Fetch cities for the selected state
  useEffect(() => {
    if (selectedState) {
      const stateCities = City.getCitiesOfState('IN', selectedState);
      setCities(stateCities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  // Update map center based on selected city
  useEffect(() => {
    if (selectedCity) {
      const city = cities.find(c => c.name === selectedCity);
      if (city) {
        setMapCenter({ lat: parseFloat(city.latitude), lng: parseFloat(city.longitude) });
      }
    }
  }, [selectedCity, cities]);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.hospitalId) newErrors.hospitalId = 'Hospital ID is required.';
    if (!formData.establishmentName) newErrors.establishmentName = 'Establishment name is required.';
    if (!formData.state) newErrors.state = 'State is required.';
    if (!formData.city) newErrors.city = 'City is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Next button click
  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
      <Navbar showLogin={false} showLogout={false} showOther={false} />
      <ProgressBar step={3} totalSteps={8} />
      <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">Establishment Basic Details</h3>

      <div className="space-y-4 text-left w-1/3 p-6">
        <div>
          <label htmlFor="hospitalId" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your Hospital Id
          </label>
          <input
            type="text"
            name="hospitalId"
            placeholder="Hospital Unique ID"
            value={formData.hospitalId}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
          />
          {errors.hospitalId && <p className="text-red-500 text-sm mt-1">{errors.hospitalId}</p>}
        </div>

        <div>
          <label htmlFor="establishmentName" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Name of Establishment
          </label>
          <input
            type="text"
            name="establishmentName"
            placeholder="Establishment Name"
            value={formData.establishmentName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
          />
          {errors.establishmentName && <p className="text-red-500 text-sm mt-1">{errors.establishmentName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-green-700 font-semibold mb-2">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={(e) => {
              handleChange(e);
              setSelectedState(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.state ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
            }`}
          >
            <option value="" disable>Select State</option>
            {states.map(state => (
              <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-green-700 font-semibold mb-2">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => {
              handleChange(e);
              setSelectedCity(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.city ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
            }`}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.name} value={city.name}>{city.name}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-gray-400 text-white px-6 py-2 ml-6 rounded-md hover:bg-gray-500 transition duration-300"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="bg-docsoGreen text-white px-6 py-2 mr-6 rounded-md hover:bg-middleGreen transition duration-300"
        >
          Save and go to the Next Section
        </button>
      </div>
      <div className="md:w-1/2 p-6">
        <MapComponent center={mapCenter} />
      </div>
    </div>
  );
}

export default Step3;
