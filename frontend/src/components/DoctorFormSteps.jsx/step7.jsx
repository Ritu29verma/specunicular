import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar2';

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const Step7 = ({ formData, handleTimingSlotChange, handleNext, handlePrev }) => {
  const [timings, setTimings] = useState(formData.timings || []);

  useEffect(() => {
    handleTimingSlotChange(timings);
  }, [ timings]);

  const handleAddTimingSlot = () => {
    setTimings([...timings, { days: [], morningStart: '', morningEnd: '', afternoonStart: '', afternoonEnd: '' }]);
  };

  const handleRemoveTimingSlot = (index) => {
    setTimings(timings.filter((_, i) => i !== index));
  };

  const handleTimingChange = (index, e) => {
    const { name, value } = e.target;
    const newTimings = [...timings];
    newTimings[index][name] = value;
    setTimings(newTimings);
  };

  const handleDayChange = (index, day) => {
    const newTimings = [...timings];
    const selectedDays = newTimings[index].days;
    if (selectedDays.includes(day)) {
      newTimings[index].days = selectedDays.filter(d => d !== day);
    } else {
      newTimings[index].days.push(day);
    }
    setTimings(newTimings);
  };

  return (
    <div className="min-h-screen bg-lightGreen">
      <Navbar showLogin={false} showLogout={false} />
      <ProgressBar step={7} totalSteps={8} />
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">

        <h2 className="text-2xl font-bold text-docsoGreen mb-6">Set Establishment Timing</h2>
        <p className="text-gray-700 mb-8">
          Please provide the available timing slots. You can specify multiple days and the start and end times for each slot, including separate timings for morning and afternoon.
        </p>

        {timings.map((timing, index) => (
          <div key={index} className="mb-6 p-6 bg-lightGreen shadow-sm rounded-lg">
            <div className="grid gap-6">
              <div>
                <label className="block text-docsoGreen font-semibold mb-2">Select Days</label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map(day => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayChange(index, day)}
                      className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 ${
                        timing.days.includes(day)
                          ? 'bg-docsoGreen text-white border-middleGreen'
                          : 'bg-lightGreen border-gray-400 text-gray-600'
                      }`}
                    >
                      {day.slice(0, 2)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={`morningStart_${index}`} className="block text-docsoGreen font-semibold mb-2">Morning Start Time</label>
                  <input
                    type="time"
                    id={`morningStart_${index}`}
                    name="morningStart"
                    value={timing.morningStart}
                    onChange={(e) => handleTimingChange(index, e)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                    required
                  />
                </div>

                <div>
                  <label htmlFor={`morningEnd_${index}`} className="block text-docsoGreen font-semibold mb-2">Morning End Time</label>
                  <input
                    type="time"
                    id={`morningEnd_${index}`}
                    name="morningEnd"
                    value={timing.morningEnd}
                    onChange={(e) => handleTimingChange(index, e)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={`afternoonStart_${index}`} className="block text-docsoGreen font-semibold mb-2">Afternoon Start Time</label>
                  <input
                    type="time"
                    id={`afternoonStart_${index}`}
                    name="afternoonStart"
                    value={timing.afternoonStart}
                    onChange={(e) => handleTimingChange(index, e)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                    required
                  />
                </div>

                <div>
                  <label htmlFor={`afternoonEnd_${index}`} className="block text-docsoGreen font-semibold mb-2">Afternoon End Time</label>
                  <input
                    type="time"
                    id={`afternoonEnd_${index}`}
                    name="afternoonEnd"
                    value={timing.afternoonEnd}
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
};

export default Step7;
