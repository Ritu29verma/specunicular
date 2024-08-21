import React from 'react';

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div>
    <input
      type="number"
      name="totalBeds"
      placeholder="Total Beds"
      value={formData.totalBeds}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      name="availableBeds"
      placeholder="Available Beds"
      value={formData.availableBeds}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step3;
