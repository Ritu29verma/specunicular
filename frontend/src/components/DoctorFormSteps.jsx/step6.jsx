import React from 'react';

const Step6 = ({ handleChange, handleNext, handlePrev }) => (
  <div>
    <h3>Establishment Proof</h3>
    <input
      type="file"
      name="establishmentProof"
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step6;
