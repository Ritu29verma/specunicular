import React, { useState } from 'react';

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.totalBeds) newErrors.totalBeds = 'Total Beds is required.';
    if (!formData.availableBeds && formData.availableBeds !== 0) newErrors.availableBeds = 'Available Beds is required.';
    if (formData.availableBeds > formData.totalBeds) newErrors.availableBeds = 'Available Beds cannot be greater than Total Beds.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-green-50 shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="totalBeds" className="block text-green-700 font-semibold mb-2">Total Beds</label>
        <input
          type="number"
          id="totalBeds"
          name="totalBeds"
          placeholder="Total Beds"
          value={formData.totalBeds}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.totalBeds ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
          required
        />
        {errors.totalBeds && <p className="text-red-500 text-sm mt-1">{errors.totalBeds}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="availableBeds" className="block text-green-700 font-semibold mb-2">Available Beds</label>
        <input
          type="number"
          id="availableBeds"
          name="availableBeds"
          placeholder="Available Beds"
          value={formData.availableBeds}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.availableBeds ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
          required
        />
        {errors.availableBeds && <p className="text-red-500 text-sm mt-1">{errors.availableBeds}</p>}
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
  );
};

export default Step3;
