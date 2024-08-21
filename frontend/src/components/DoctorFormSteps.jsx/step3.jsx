import React from 'react';

const Step3 = ({ formData, handleChange, handleNext, handlePrev,hospitals }) => (
  <div>
    <h3>Establishment Basic Details</h3>
    
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
      name="establishmentName"
      placeholder="Establishment Name"
      value={formData.establishmentName}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="locality"
      placeholder="Locality"
      value={formData.locality}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step3;
