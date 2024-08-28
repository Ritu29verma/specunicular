import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import Navbar from '../Navbar';
import { doctorColleges } from '../../utils/doctorColleges.js';
import { doctorDegrees } from '../../utils/doctorDegrees.js';

const Step2 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [isDegreeOther, setIsDegreeOther] = useState(formData.degree === 'Others');
  const [isCollegeOther, setIsCollegeOther] = useState(formData.college === 'Others');
  const [errors, setErrors] = useState({});

  const handleDegreeChange = (e) => {
    const value = e.target.value;
    setIsDegreeOther(value === 'Others');
    handleChange(e);
  };

  const handleCollegeChange = (e) => {
    const value = e.target.value;
    setIsCollegeOther(value === 'Others');
    handleChange(e);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.degree) newErrors.degree = 'Degree is required.';
    if (isDegreeOther && !formData.otherDegree) newErrors.otherDegree = 'Other Degree is required.';
    if (!formData.college) newErrors.college = 'College is required.';
    if (isCollegeOther && !formData.otherCollege) newErrors.otherCollege = 'Other College is required.';
    if (!formData.completionYear) newErrors.completionYear = 'Completion Year is required.';
    if (!formData.experience) newErrors.experience = 'Experience is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="w-full min-h-screen bg-lightGreen rounded-lg shadow-md">
      <Navbar showLogin={false} showLogout={false} showOther={false} />
      <ProgressBar step={2} totalSteps={8} />
      <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
        Educational Qualification
      </h3>

      <div className="space-y-4 text-left w-1/3 p-6">
        <div>
          <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleDegreeChange}
            required
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.degree ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
            }`}
          >
            <option value="">Select Degree</option>
            {doctorDegrees.map((degree, index) => (
              <option key={index} value={degree}>
                {degree}
              </option>
            ))}
            <option value="Others">Others</option>
          </select>
          {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
          {isDegreeOther && (
            <div className="mt-2">
              <label htmlFor="otherDegree" className="block text-sm font-medium text-gray-700 mb-2">
                Specify Degree
              </label>
              <input
                type="text"
                id="otherDegree"
                name="degree"
                placeholder="Specify Degree"
                value={formData.degree || ''}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.otherDegree ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
                }`}
              />
              {errors.otherDegree && <p className="text-red-500 text-sm mt-1">{errors.otherDegree}</p>}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
            Select Your College
          </label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleCollegeChange}
            required
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.college ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
            }`}
          >
            <option value="">Select College</option>
            {doctorColleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
            <option value="Others">Others</option>
          </select>
          {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
          {isCollegeOther && (
            <div className="mt-2">
              <label htmlFor="otherCollege" className="block text-sm font-medium text-gray-700 mb-2">
                Specify College
              </label>
              <input
                type="text"
                id="otherCollege"
                name="otherCollege"
                placeholder="Specify College"
                value={formData.otherCollege || ''}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.otherCollege ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
                }`}
              />
              {errors.otherCollege && <p className="text-red-500 text-sm mt-1">{errors.otherCollege}</p>}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="completionYear" className="block text-sm font-medium text-gray-700 mb-2">
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
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.completionYear ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
            }`}
          />
          {errors.completionYear && <p className="text-red-500 text-sm mt-1">{errors.completionYear}</p>}
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
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
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.experience ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-middleGreen'
            }`}
          />
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-gray-400 text-white px-6 mb-7  py-2 ml-6 rounded-md hover:bg-gray-500 transition duration-300"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="bg-docsoGreen text-white px-6 mb-7  py-2 mr-6 rounded-md hover:bg-middleGreen transition duration-300"
        >
          Save and go to the Next Section
        </button>
      </div>
    </div>
  );
};

export default Step2;
