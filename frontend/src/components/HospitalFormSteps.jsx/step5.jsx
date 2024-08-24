import React from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar2'; 

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const Step5 = ({ formData, handleTimingChange, handleAddTimingSlot, handleRemoveTimingSlot, handleNext, handlePrev }) => (
  <div className="min-h-screen bg-lightGreen">
    <Navbar showLogin={false} showLogout={false} />
    <ProgressBar step={5} totalSteps={7} />
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">

      <h2 className="text-2xl font-bold text-docsoGreen mb-6">Add Timing Slots</h2>
      <p className="text-gray-700 mb-8">
        Please provide the available timing slots for the hospital. You can specify the day of the week and the start and end times for each slot. Use the "Add Timing Slot" button to add more slots, and the "Remove" button to delete any slot if necessary.
      </p>

      {formData.timings.map((timing, index) => (
        <div key={index} className="mb-6 p-6 bg-lightGreen shadow-sm rounded-lg">
          <div className="grid gap-6">
            <div>
              <label htmlFor={`day_${index}`} className="block text-docsoGreen font-semibold mb-2">Day</label>
              <select
                id={`day_${index}`}
                name="day"
                value={timing.day}
                onChange={(e) => handleTimingChange(index, e)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                required
              >
                <option value="">Select Day</option>
                {daysOfWeek.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
           <div className=' grid md:grid-cols-2 gap-3'>
            <div>
              <label htmlFor={`startTime_${index}`} className="block text-docsoGreen font-semibold mb-2">Start Time</label>
              <input
                type="time"
                id={`startTime_${index}`}
                name="startTime"
                value={timing.startTime}
                onChange={(e) => handleTimingChange(index, e)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                required
              />
            </div>

            <div>
              <label htmlFor={`endTime_${index}`} className="block text-docsoGreen font-semibold mb-2">End Time</label>
              <input
                type="time"
                id={`endTime_${index}`}
                name="endTime"
                value={timing.endTime}
                onChange={(e) => handleTimingChange(index, e)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                required
              />
            </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleRemoveTimingSlot(index)}
            className="mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={handleAddTimingSlot}
          className="py-3 px-6 bg-docsoGreen text-white font-semibold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-middleGreen"
        >
          Add Timing Slot
        </button>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handlePrev}
            className="py-3 px-6 bg-docsoGreen text-white font-semibold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-middleGreen"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="py-3 px-6 bg-docsoGreen text-white font-semibold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-middleGreen"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Step5;
