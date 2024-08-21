import React from 'react';

const Step7 = ({ formData, timingSlot, handleTimingSlotChange, handleAddTimingSlot, handleNext, handlePrev }) => (
  <div>
    <h3>Establishment Timing</h3>
    <select
      name="day"
      value={timingSlot.day}
      onChange={handleTimingSlotChange}
      required
    >
      <option value="">Select Day</option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
    <input
      type="time"
      name="startTime"
      placeholder="Start Time"
      value={timingSlot.startTime}
      onChange={handleTimingSlotChange}
      required
    />
    <input
      type="time"
      name="endTime"
      placeholder="End Time"
      value={timingSlot.endTime}
      onChange={handleTimingSlotChange}
      required
    />
    <button type="button" onClick={handleAddTimingSlot}>Add Timing Slot</button>
    <ul>
      {formData.timingSlots.map((slot, index) => (
        <li key={index}>{slot.day}: {slot.startTime} - {slot.endTime}</li>
      ))}
    </ul>
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
);

export default Step7;
