import React from 'react';

const Step6 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div>
    <label>
      Insurance Claim Available:
      <input
        type="radio"
        name="insuranceClaim"
        value="yes"
        checked={formData.insuranceClaim === 'yes'}
        onChange={handleChange}
        required
      /> Yes
      <input
        type="radio"
        name="insuranceClaim"
        value="no"
        checked={formData.insuranceClaim === 'no'}
        onChange={handleChange}
        required
      /> No
    </label>
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step6;
