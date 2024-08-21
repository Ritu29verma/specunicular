import React from 'react';

const Step5 = ({ formData, handleTimingChange, handleAddTimingSlot, handleNext, handlePrev }) => (
  <div>
    {formData.timings.map((timing, index) => (
      <div key={index}>
        <input
          type="text"
          name="day"
          placeholder="Day"
          value={timing.day}
          onChange={(e) => handleTimingChange(index, e)}
          required
        />
        <input
          type="time"
          name="startTime"
          placeholder="Start Time"
          value={timing.startTime}
          onChange={(e) => handleTimingChange(index, e)}
          required
        />
        <input
          type="time"
          name="endTime"
          placeholder="End Time"
          value={timing.endTime}
          onChange={(e) => handleTimingChange(index, e)}
          required
        />
      </div>
    ))}
    <button type="button" onClick={handleAddTimingSlot}>Add Timing Slot</button>
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step5;
