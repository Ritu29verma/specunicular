import React from 'react';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div>
    <h3>Educational Qualification</h3>
    <input
      type="text"
      name="degree"
      placeholder="Degree"
      value={formData.degree}
      onChange={handleChange}
      required
    />
    <select
      name="college"
      value={formData.college}
      onChange={handleChange}
      required
    >
      <option value="">Select College</option>
      <option value="College1">College1</option>
      <option value="College2">College2</option>
      {/* Add more colleges as needed */}
    </select>
    <input
      type="text"
      name="completionYear"
      placeholder="Year of Completion"
      value={formData.completionYear}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="experience"
      placeholder="Year of Experience"
      value={formData.experience}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step2;
