import React from 'react';
import ProgressBar from '../ProgressBar';
import Navbar from '../Navbar';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <ProgressBar step={2} totalSteps={8} />
    <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
      Educational Qualification
    </h3>

    <div className="space-y-4 text-left w-1/3 p-6">
      <div>
        <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your Degree
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Your College
        </label>
        <select
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        >
          <option value="">Select College</option>
          <option value="College1">College1</option>
          <option value="College2">College2</option>
          {/* Add more colleges as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="completionYear" className="block text-sm font-medium text-gray-700 mb-2">
         Enter your Year of Completion
        </label>
        <input
          type="text"
          id="completionYear"
          name="completionYear"
          placeholder="Year of Completion"
          value={formData.completionYear}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
         Enter Your Years of Experience
        </label>
        <input
          type="text"
          id="experience"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>
    </div>

    <div className="mt-6 flex justify-between">
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
        className="bg-docsoGreen text-white px-6 py-2 mr-6 rounded-md hover:bg-middleGreen transition duration-300"
      >
       Save and go to the Next Section
      </button>
    </div>
  </div>
);

export default Step2;
