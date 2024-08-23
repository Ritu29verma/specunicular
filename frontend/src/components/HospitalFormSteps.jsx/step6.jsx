import React from 'react';

const Step6 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div className="max-w-lg mx-auto p-6 bg-green-50 shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-green-800 mb-4">Insurance Claim Information</h2>
    <p className="text-gray-700 mb-4">
      Please let us know if insurance claims are available for the services provided by your hospital.
      This information will help us ensure that patients can receive the necessary assistance and coverage.
    </p>
    
    <div className="mb-4">
      <label className="block text-green-700 font-semibold mb-2">Is insurance claim available?</label>
      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="insuranceClaimYes"
          name="insuranceClaim"
          value="yes"
          checked={formData.insuranceClaim === 'yes'}
          onChange={handleChange}
          className="mr-2"
          required
        />
        <label htmlFor="insuranceClaimYes" className="text-green-700">Yes</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="insuranceClaimNo"
          name="insuranceClaim"
          value="no"
          checked={formData.insuranceClaim === 'no'}
          onChange={handleChange}
          className="mr-2"
          required
        />
        <label htmlFor="insuranceClaimNo" className="text-green-700">No</label>
      </div>
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
        onClick={handleNext}
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step6;
