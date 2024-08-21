import React from 'react';

const Step8 = ({ formData, handleChange, handlePrev }) => (
  <div>
    <h3>Consultancy Fees</h3>
    <input
      type="text"
      name="consultancyFees"
      placeholder="Consultancy Fees (in Rupees)"
      value={formData.consultancyFees}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="submit">Submit</button>
  </div>
);

export default Step8;
