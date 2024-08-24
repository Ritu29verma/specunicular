import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar';

const Step7 = ({ formData, handleTimingSlotChange, handleNext, handlePrev }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [morningTimes, setMorningTimes] = useState({});
  const [afternoonTimes, setAfternoonTimes] = useState({});

  const handleDayChange = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
      setMorningTimes(prev => ({ ...prev, [day]: { start: '', end: '' } }));
      setAfternoonTimes(prev => ({ ...prev, [day]: { start: '', end: '' } }));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const convertTo12Hour = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour);
    const period = hourInt >= 12 ? 'PM' : 'AM';
    const adjustedHour = hourInt % 12 || 12;
    return `${adjustedHour}:${minute} ${period}`;
  };

  const handleMorningTimeChange = (day, timeType, value) => {
    const updatedTimes = { ...morningTimes[day], [timeType]: value };
    if (timeType === 'end' && (!updatedTimes.start || value < updatedTimes.start)) {
      alert('End time cannot be earlier than start time.');
      setMorningTimes(prev => ({
        ...prev,
        [day]: { ...prev[day], end: '' },
      }));
    } else {
      setMorningTimes(prev => ({
        ...prev,
        [day]: updatedTimes,
      }));
    }
  };

  const handleAfternoonTimeChange = (day, timeType, value) => {
    const updatedTimes = { ...afternoonTimes[day], [timeType]: value };
    if (timeType === 'end' && (!updatedTimes.start || value < updatedTimes.start)) {
      alert('End time cannot be earlier than start time.');
      setAfternoonTimes(prev => ({
        ...prev,
        [day]: { ...prev[day], end: '' },
      }));
    } else {
      setAfternoonTimes(prev => ({
        ...prev,
        [day]: updatedTimes,
      }));
    }
  };

  const isTimingComplete = (day) => {
    return morningTimes[day]?.start && morningTimes[day]?.end && afternoonTimes[day]?.start && afternoonTimes[day]?.end;
  };

  const getValidTimes = (day, type) => {
    const times = Array.from({ length: 24 }, (_, i) => i < 10 ? `0${i}:00` : `${i}:00`);
    const startTimes = type === 'morning' ? times.slice(0, 12) : times.slice(12);

    if (type === 'morning') {
      if (morningTimes[day]?.start) {
        return startTimes.filter(time => time >= morningTimes[day].start);
      }
    } else if (type === 'afternoon') {
      if (afternoonTimes[day]?.start) {
        return startTimes.filter(time => time >= afternoonTimes[day].start);
      }
    }

    return startTimes;
  };

  return (
    <div className="min-h-screen min-w-full bg-lightGreen rounded-lg shadow-md flex flex-col">
      <Navbar showLogin={false} showLogout={false} showOther={false} />
      <ProgressBar step={7} totalSteps={8} />

      <div className="flex flex-col flex-1 p-3 overflow-auto">
        <h3 className="text-2xl font-semibold text-middleGreen text-left mb-4">
          Establishment Timing
        </h3>

        <div className="space-y-4 text-left w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Days
            </label>
            <div className="flex flex-wrap gap-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <div
                  key={day}
                  onClick={() => handleDayChange(day)}
                  className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 ${
                    selectedDays.includes(day)
                      ? 'bg-white border-middleGreen'
                      : 'bg-lightGreen border-black'
                  }`}
                >
                  <span className="text-gray-700 font-medium">{day.slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedDays.length > 0 && (
            <div className="space-y-2 mt-4 max-w-md">
              <div className="text-lg text-gray-800 font-semibold">Set Timing for Selected Days</div>
              {selectedDays.map((day) => (
                <div key={day} className="mt-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Morning Start Time</label>
                      <input
                        type="time"
                        value={morningTimes[day]?.start || ''}
                        onChange={(e) => handleMorningTimeChange(day, 'start', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Morning End Time</label>
                      <input
                        type="time"
                        value={morningTimes[day]?.end || ''}
                        onChange={(e) => handleMorningTimeChange(day, 'end', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
                        disabled={!morningTimes[day]?.start}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Afternoon Start Time</label>
                      <input
                        type="time"
                        value={afternoonTimes[day]?.start || ''}
                        onChange={(e) => handleAfternoonTimeChange(day, 'start', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Afternoon End Time</label>
                      <input
                        type="time"
                        value={afternoonTimes[day]?.end || ''}
                        onChange={(e) => handleAfternoonTimeChange(day, 'end', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
                        disabled={!afternoonTimes[day]?.start}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <ul className="mt-4 space-y-2">
            {selectedDays.map((day, index) => (
              isTimingComplete(day) && (
                <li key={index} className="text-gray-700">
                  {day}:
                  Morning: {morningTimes[day]?.start} - {morningTimes[day]?.end},
                  Afternoon: {convertTo12Hour(afternoonTimes[day]?.start)} - {convertTo12Hour(afternoonTimes[day]?.end)}
                </li>
              )
            ))}
          </ul>
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
};

export default Step7;
