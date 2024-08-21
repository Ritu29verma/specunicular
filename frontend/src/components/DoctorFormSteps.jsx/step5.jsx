import React from 'react';

const Step5 = ({ handleChange, handleNext, handlePrev }) => (
  <div>
    <h3>Medical Registration Proof</h3>
    <input
      type="file"
      name="medicalRegistrationProof"
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step5;
