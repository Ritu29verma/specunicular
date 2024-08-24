import React from 'react';
import ProgressBar from '../ProgressBar';
import Navbar from '../Navbar';
import { doctorColleges } from '../../utils/doctorColleges.js';
import { doctorDegrees } from '../../utils/doctorDegrees.js';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => (
  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <ProgressBar step={2} totalSteps={8} />
    <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
      Educational Qualification
    </h3>

    <div className="space-y-4 text-left w-1/3 p-6">
      <div>
        <label
          htmlFor="degree"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Your Degree
        </label>
        <select
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        >
          <option value="">Select Degree</option>
          {doctorDegrees.map((degree, index) => (
            <option key={index} value={degree}>
              {degree}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="college"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
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
          <option value="" disable>Select College</option>
          {doctorColleges.map((college, index) => (
            <option key={index} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>

      {/* New Input Fields */}
      <div>
        <label
          htmlFor="completionYear"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Completion Year
        </label>
        <input
          type="text"
          id="completionYear"
          name="completionYear"
          placeholder="Completion Year"
          value={formData.completionYear}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Experience (in years)
        </label>
        <input
          type="number"
          id="experience"
          name="experience"
          placeholder="Experience (in years)"
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
