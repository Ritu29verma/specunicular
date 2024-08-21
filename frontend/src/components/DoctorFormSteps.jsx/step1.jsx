import React from 'react';

const Step1 = ({ formData, handleChange, handleNext }) => (
  <div>
    <h3>Medical Registration</h3>
    <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
    <input
      type="text"
      name="registrationNo"
      placeholder="Registration No"
      value={formData.registrationNo}
      onChange={handleChange}
      required
    />
    <select
      name="registrationCouncil"
      value={formData.registrationCouncil}
      onChange={handleChange}
      required
    >
      <option value="">Select Registration Council</option>
      <option value="Council1">Council1</option>
      <option value="Council2">Council2</option>
      {/* Add more councils as needed */}
    </select>
    <input
      type="text"
      name="registrationYear"
      placeholder="Registration Year"
      value={formData.registrationYear}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step1;
