import React from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar';

const Step4 = ({ handleChange, handleNext, handlePrev }) => (
  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md flex flex-col">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <ProgressBar step={4} totalSteps={8} />

    <div className="flex flex-col items-center justify-center flex-1 p-6">
      <h3 className="text-2xl font-semibold text-middleGreen mb-6 text-center">
        Upload Identity Proof
      </h3>

      <div className="space-y-4 text-left w-full max-w-md">
        <div>
          <label htmlFor="identityProof" className="block text-sm font-medium text-gray-700 mb-2">
           Upload Identity Proof
          </label>
          <input
            type="file"
            id="identityProof"
            name="identityProof"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between w-full max-w-md">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-gray-400 text-white px-6 py-2 ml-6 rounded-md hover:bg-gray-500 transition duration-300"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-docsoGreen text-white px-6 py-2 rounded-md hover:bg-middleGreen transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export default Step4;
