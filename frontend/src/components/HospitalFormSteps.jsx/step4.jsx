import React from 'react';

const Step4 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div>
    <input
      type="number"
      name="totalDoctorStaff"
      placeholder="Total Doctor Staff"
      value={formData.totalDoctorStaff}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      name="nursingStaff"
      placeholder="Nursing Staff"
      value={formData.nursingStaff}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step4;
