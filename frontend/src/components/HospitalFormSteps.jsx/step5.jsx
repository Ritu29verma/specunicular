import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar2';

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const Step5 = ({ formData, handleTimingSlotChange, handleNext, handlePrev }) => {
  const [timings, setTimings] = useState(formData.timings || []);
  const [selectedDays, setSelectedDays] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    handleTimingSlotChange(timings);
  }, [timings]);

  const handleAddTimingSlot = () => {
    setTimings([...timings, { days: [], startTime: '', endTime: '' }]);
  };

  const handleRemoveTimingSlot = (index) => {
    const removedDays = timings[index].days;
    const newTimings = timings.filter((_, i) => i !== index);
    const newSelectedDays = selectedDays.filter(day => !removedDays.includes(day));
    setTimings(newTimings);
    setSelectedDays(newSelectedDays);
  };

  const handleTimingChange = (index, e) => {
    const { name, value } = e.target;
    const newTimings = [...timings];
    newTimings[index][name] = value;
    setTimings(newTimings);
    validateTimingSlot(index, newTimings[index]);
  };

  const handleDayChange = (index, day) => {
    const newTimings = [...timings];
    const selectedDaysInSlot = newTimings[index].days;
    if (selectedDaysInSlot.includes(day)) {
      newTimings[index].days = selectedDaysInSlot.filter(d => d !== day);
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      newTimings[index].days.push(day);
      setSelectedDays([...selectedDays, day]);
    }
    setTimings(newTimings);
  };

  const validateTimingSlot = (index, timing) => {
    const errors = {};
    const { startTime, endTime } = timing;
  
    if (startTime && endTime) {
      const start = new Date(`1970-01-01T${startTime}:00`);
      const end = new Date(`1970-01-01T${endTime}:00`);
  
      if (end <= start) {
        errors.start = 'End time must be after start time';
      } else if ((end - start) < 1800000) {
        errors.end = 'Slots must be at least 30 minutes long';
      }
    }
  
    setErrors(prevErrors => ({ ...prevErrors, [index]: errors }));
  };
  

  return (
    <div className="min-h-screen bg-lightGreen">
      <Navbar showLogin={false} showLogout={false} />
      <ProgressBar step={7} totalSteps={8} />
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">

        <h2 className="text-2xl font-bold text-docsoGreen mb-6">Set Establishment Timing</h2>
        <p className="text-gray-700 mb-8">
          Please provide the available timing slots. You can specify multiple days and the start and end times for each slot.
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
                      disabled={selectedDays.includes(day) && !timing.days.includes(day)}
                      className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 ${
                        timing.days.includes(day)
                          ? 'bg-docsoGreen text-white border-middleGreen'
                          : 'bg-lightGreen border-gray-400 text-gray-600'
                      } ${selectedDays.includes(day) && !timing.days.includes(day) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {day.slice(0, 2)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={`startTime${index}`} className="block text-docsoGreen font-semibold mb-2">Start Time</label>
                  <input
                    type="time"
                    id={`startTime${index}`}
                    name="startTime"
                    value={timing.startTime}
                    onChange={(e) => handleTimingChange(index, e)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                    required
                  />
                  {errors[index]?.start && <p className="text-red-500 text-sm">{errors[index].start}</p>}
                </div>

                <div>
                  <label htmlFor={`endTime${index}`} className="block text-docsoGreen font-semibold mb-2"> End Time</label>
                  <input
                    type="time"
                    id={`endTime${index}`}
                    name="endTime"
                    value={timing.endTime}
                    onChange={(e) => handleTimingChange(index, e)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-middleGreen"
                    required
                  />
                  {errors[index]?.end && <p className="text-red-500 text-sm">{errors[index].end}</p>}
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
              className="py-3 px-6 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="py-3 px-6 bg-docsoGreen text-white font-semibold rounded-lg hover:bg-middleGreen focus:outline-none focus:ring-2 focus:ring-middleGreen"
              disabled={Object.keys(errors).some(index => Object.keys(errors[index]).length > 0)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
