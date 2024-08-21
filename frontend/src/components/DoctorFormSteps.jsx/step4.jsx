import React from 'react';

const Step4 = ({ handleChange, handleNext, handlePrev }) => (
  <div>
    <h3>Identity Proof</h3>
    <input
      type="file"
      name="identityProof"
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step4;
