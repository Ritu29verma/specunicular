import React from 'react';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div>
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
      name="state"
      placeholder="State"
      value={formData.state}
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

export default Step2;
