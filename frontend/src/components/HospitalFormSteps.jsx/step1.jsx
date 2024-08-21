import React from 'react';

const Step1 = ({ formData, handleChange, handleNext }) => (
  <div>
    <input
      type="text"
      name="hospitalName"
      placeholder="Hospital Name"
      value={formData.hospitalName}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="hospitalId"
      placeholder="Hospital Unique Id"
      value={formData.hospitalId}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="category"
      placeholder="Category"
      value={formData.category}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="specialization"
      placeholder="Specialization"
      value={formData.specialization}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="services"
      placeholder="Services"
      value={formData.services}
      onChange={handleChange}
      required
    />
    <textarea
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step1;
