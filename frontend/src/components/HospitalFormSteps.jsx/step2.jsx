import React, { useState, useEffect } from 'react';
import { State, City } from 'country-state-city';
import MapComponent from '../MapComponent';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // Default to India
  const [errors, setErrors] = useState({});

  // Fetch states for India using country-state-city
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
  }, [selectedCity]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.state) newErrors.state = 'State is required.';
    if (!formData.city) newErrors.city = 'City is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 max-w-lg mx-auto p-6 bg-green-50 shadow-md rounded-lg">
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
            <option value="">Select State</option>
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

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Next
          </button>
        </div>
      </div>

      <div className="md:w-1/2 p-6">
        <MapComponent center={mapCenter} />
      </div>
    </div>
  );
};

export default Step2;
