import React from 'react';

const Step7 = ({ formData, handleChange, handleSubmit, handlePrev }) => (
  <div className="max-w-lg mx-auto p-6 bg-green-50 shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-green-800 mb-4">Final Step</h2>
    <p className="text-gray-700 mb-4">
      Please provide the contact details for the hospital. This information will be used for further communication and inquiries.
    </p>
    <div className="mb-4">
      <label htmlFor="phoneNumber" className="block text-green-700 font-semibold mb-2">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
    </div>

    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={handlePrev}
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </div>
  </div>
);

export default Step7;
