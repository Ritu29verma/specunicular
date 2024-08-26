import React, { useState } from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar2';

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.totalBeds) newErrors.totalBeds = 'Total Beds is required.';
    if (!formData.availableBeds && formData.availableBeds !== 0) newErrors.availableBeds = 'Available Beds is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-lightGreen ">
       <Navbar />
       <ProgressBar step={3} totalSteps={7} />
       <div className="max-w-2xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
      <div className=" p-4">
        <div className="mb-6">
          <label htmlFor="totalBeds" className="block text-docsoGreen font-semibold mb-2">Total Beds</label>
          <input
            type="number"
            id="totalBeds"
            name="totalBeds"
            placeholder="Enter total beds"
            value={formData.totalBeds}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.totalBeds ? 'border-red-500 focus:ring-red-500' : 'border-middleGreen focus:ring-middleGreen'
            }`}
            required
          />
          {errors.totalBeds && <p className="text-red-500 text-sm mt-1">{errors.totalBeds}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="availableBeds" className="block text-docsoGreen font-semibold mb-2">Available Beds</label>
          <input
            type="number"
            id="availableBeds"
            name="availableBeds"
            placeholder="Enter available beds"
            value={formData.availableBeds}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.availableBeds ? 'border-red-500 focus:ring-red-500' : 'border-middleGreen focus:ring-middleGreen'
            }`}
            required
          />
          {errors.availableBeds && <p className="text-red-500 text-sm mt-1">{errors.availableBeds}</p>}
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="w-full flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="py-3 px-6 bg-docsoGreen text-white font-bold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-docsoGreen"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            className="py-3 px-6 bg-docsoGreen text-white font-bold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-docsoGreen"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Step3;
