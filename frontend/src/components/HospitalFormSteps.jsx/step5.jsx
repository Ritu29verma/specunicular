import React from 'react';

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const Step5 = ({ formData, handleTimingChange, handleAddTimingSlot, handleRemoveTimingSlot, handleNext, handlePrev }) => (
  <div className="max-w-lg mx-auto p-6 bg-green-50 shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-green-800 mb-4">Add Timing Slots</h2>
    <p className="text-gray-700 mb-4">
      Please provide the available timing slots for the hospital. You can specify the day of the week and the start and end times for each slot. Use the "Add Timing Slot" button to add more slots, and the "Remove" button to delete any slot if necessary.
    </p>

    {formData.timings.map((timing, index) => (
      <div key={index} className="mb-4 p-4 bg-white shadow-sm rounded-lg flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor={`day_${index}`} className="block text-green-700 font-semibold mb-1">Day</label>
          <select
            id={`day_${index}`}
            name="day"
            value={timing.day}
            onChange={(e) => handleTimingChange(index, e)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select Day</option>
            {daysOfWeek.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor={`startTime_${index}`} className="block text-green-700 font-semibold mb-1">Start Time</label>
          <input
            type="time"
            id={`startTime_${index}`}
            name="startTime"
            value={timing.startTime}
            onChange={(e) => handleTimingChange(index, e)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor={`endTime_${index}`} className="block text-green-700 font-semibold mb-1">End Time</label>
          <input
            type="time"
            id={`endTime_${index}`}
            name="endTime"
            value={timing.endTime}
            onChange={(e) => handleTimingChange(index, e)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        
        <button
          type="button"
          onClick={() => handleRemoveTimingSlot(index)}
          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Remove
        </button>
      </div>
    ))}

    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={handleAddTimingSlot}
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Timing Slot
      </button>
      <div className="flex space-x-4">
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
  </div>
);

export default Step5;
