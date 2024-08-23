import React, { useState } from 'react';

const Step4 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.totalDoctorStaff) newErrors.totalDoctorStaff = 'Total Doctor Staff is required.';
    if (!formData.nursingStaff && formData.nursingStaff !== 0) newErrors.nursingStaff = 'Nursing Staff is required.';

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
        <label htmlFor="totalDoctorStaff" className="block text-green-700 font-semibold mb-2">Total Doctor Staff</label>
        <input
          type="number"
          id="totalDoctorStaff"
          name="totalDoctorStaff"
          placeholder="Total Doctor Staff"
          value={formData.totalDoctorStaff}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.totalDoctorStaff ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
          required
        />
        {errors.totalDoctorStaff && <p className="text-red-500 text-sm mt-1">{errors.totalDoctorStaff}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="nursingStaff" className="block text-green-700 font-semibold mb-2">Nursing Staff</label>
        <input
          type="number"
          id="nursingStaff"
          name="nursingStaff"
          placeholder="Nursing Staff"
          value={formData.nursingStaff}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.nursingStaff ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
          required
        />
        {errors.nursingStaff && <p className="text-red-500 text-sm mt-1">{errors.nursingStaff}</p>}
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

export default Step4;
