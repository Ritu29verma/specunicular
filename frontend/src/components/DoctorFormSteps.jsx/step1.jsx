import React from 'react';
import ProgressBar from '../ProgressBar';
import Navbar from '../Navbar';

const Step1 = ({ formData, handleChange, handleNext }) => (
  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <ProgressBar step={1} totalSteps={8} />
    <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
      Doctor Registration Form
    </h3>

    <div className="space-y-4 text-left w-1/3 p-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
         Enter Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label htmlFor="registrationNo" className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your Registration No
        </label>
        <input
          type="text"
          id="registrationNo"
          name="registrationNo"
          placeholder="Registration No"
          value={formData.registrationNo}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label htmlFor="registrationCouncil" className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your Registration Council
        </label>
        <select
          id="registrationCouncil"
          name="registrationCouncil"
          value={formData.registrationCouncil}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        >
          <option value="">Select Registration Council</option>
          <option value="Council1">Council1</option>
          <option value="Council2">Council2</option>
        </select>
      </div>

      <div>
        <label htmlFor="registrationYear" className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your Registration Year
        </label>
        <input
          type="text"
          id="registrationYear"
          name="registrationYear"
          placeholder="Registration Year"
          value={formData.registrationYear}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>
    </div>

    <div className="mt-6 flex justify-end">
      <button
        type="button"
        onClick={handleNext}
        className="bg-docsoGreen text-white px-6 py-2 mr-5 rounded-md hover:bg-middleGreen transition duration-300"
      >
        Save and go to the Next Section
      </button>
    </div>
  </div>
);

export default Step1;
