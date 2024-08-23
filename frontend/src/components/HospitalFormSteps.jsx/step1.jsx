import React, { useState } from 'react';

const Step1 = ({ formData, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.hospitalName) newErrors.hospitalName = 'Hospital Name is required.';
    if (!formData.hospitalId) newErrors.hospitalId = 'Hospital Unique Id is required.';
    if (!formData.category) newErrors.category = 'Category is required.';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required.';
    if (!formData.services) newErrors.services = 'Services are required.';
    if (!formData.description) newErrors.description = 'Description is required.';

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
        <label htmlFor="hospitalName" className="block text-green-700 font-semibold mb-2">Hospital Name</label>
        <input
          type="text"
          id="hospitalName"
          name="hospitalName"
          placeholder="Hospital Name"
          value={formData.hospitalName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.hospitalName ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.hospitalName && <p className="text-red-500 text-sm mt-1">{errors.hospitalName}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="hospitalId" className="block text-green-700 font-semibold mb-2">Hospital Unique Id</label>
        <input
          type="text"
          id="hospitalId"
          name="hospitalId"
          placeholder="Hospital Unique Id"
          value={formData.hospitalId}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.hospitalId ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.hospitalId && <p className="text-red-500 text-sm mt-1">{errors.hospitalId}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-green-700 font-semibold mb-2">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.category ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="specialization" className="block text-green-700 font-semibold mb-2">Specialization</label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.specialization ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="services" className="block text-green-700 font-semibold mb-2">Services</label>
        <input
          type="text"
          id="services"
          name="services"
          placeholder="Services"
          value={formData.services}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.services ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-green-700 font-semibold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.description ? 'border-red-500 focus:ring-red-500' : 'border-green-300 focus:ring-green-500'
          }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <button
        type="button"
        onClick={handleNextClick}
        className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
