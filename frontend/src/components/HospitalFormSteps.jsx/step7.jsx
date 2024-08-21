import React from 'react';

const Step7 = ({ formData, handleChange, handleSubmit, handlePrev }) => (
  <div>
    <input
      type="text"
      name="contactDetails"
      placeholder="Contact Details"
      value={formData.contactDetails}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="submit">Submit</button>
  </div>
);

export default Step7;
