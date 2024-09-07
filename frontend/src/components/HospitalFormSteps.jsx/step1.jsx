import React, { useState } from "react";
import Navbar from "../Navbar";
import ProgressBar from "../ProgressBar2";
const Step1 = ({ formData, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.hospitalName)
      newErrors.hospitalName = "Hospital Name is required.";
    if (!formData.hospitalId)
      newErrors.hospitalId = "Hospital Unique Id is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.specialization)
      newErrors.specialization = "Specialization is required.";
    if (!formData.services) newErrors.services = "Services are required.";
    if (!formData.description)
      newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  const handleFileChange = (e) => {
    handleChange(e); 
  };

  return (
    <div className="w-full min-h-screen bg-lightGreen rounded-lg shadow-md">
      <Navbar showLogin={false} showLogout={false} showOther={false} />
      <ProgressBar step={1} totalSteps={7} />
      <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
        Hospital Registration Form
      </h3>

      <div className="space-y-4 text-left w-1/3 p-6">
        <div>
          <label
            htmlFor="hospitalName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            placeholder="Hospital Name"
            value={formData.hospitalName}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.hospitalName
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.hospitalName && (
            <p className="text-red-500 text-sm mt-1">{errors.hospitalName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="hospitalId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Hospital Unique Id
          </label>
          <input
            type="text"
            id="hospitalId"
            name="hospitalId"
            placeholder="Hospital Unique Id"
            value={formData.hospitalId}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.hospitalId
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.hospitalId && (
            <p className="text-red-500 text-sm mt-1">{errors.hospitalId}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.category
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.specialization
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.specialization && (
            <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="services"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Services
          </label>
          <input
            type="text"
            name="services"
            placeholder="Services"
            value={formData.services}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.services
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.services && (
            <p className="text-red-500 text-sm mt-1">{errors.services}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
              errors.description
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-middleGreen"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="hospitalImage"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Hspital Image
          </label>
          <div className="flex items-center">
            <label
              htmlFor="hospitalImage"
              className="bg-docsoGreen text-white px-4 py-2 rounded-md cursor-pointer hover:bg-middleGreen transition duration-300"
            >
              Choose File
            </label>
            <input
              type="file"
              id="hospitalImage"
              name="hospitalImage"
              onChange={handleFileChange}
              required
              className="hidden"
            />
            <span className="ml-3 text-gray-700">
              {formData.hospitalImage ? formData.hospitalImage.name : "No file chosen"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleNextClick}
          className="bg-docsoGreen text-white px-6 py-2 mr-5 rounded-md hover:bg-middleGreen transition duration-300 m-5"
        >
          Save and go to the Next Section
        </button>
      </div>
    </div>
  );
};

export default Step1;
