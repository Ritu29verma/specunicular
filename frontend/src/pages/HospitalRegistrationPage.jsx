import React, { useState } from 'react';
import axios from 'axios';
import Step1 from '../components/HospitalFormSteps.jsx/step1';
import Step2 from '../components/HospitalFormSteps.jsx/step2';
import Step3 from '../components/HospitalFormSteps.jsx/step3';
import Step4 from '../components/HospitalFormSteps.jsx/step4';
import Step5 from '../components/HospitalFormSteps.jsx/step5';
import Step6 from '../components/HospitalFormSteps.jsx/step6';
import Step7 from '../components/HospitalFormSteps.jsx/step7';

const HospitalRegistrationForm = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalId: '',
    category: '',
    specialization: '',
    services: '',
    description: '',
    city: '',
    state: '',
    locality: '',
    totalBeds: '',
    availableBeds: '',
    totalDoctorStaff: '',
    nursingStaff: '',
    timings: [],
    insuranceClaim: '',
    contactDetails: ''
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTimingChange = (index, e) => {
    const { name, value } = e.target;
    const newTimings = [...formData.timings];
    newTimings[index] = {
      ...newTimings[index],
      [name]: value
    };
    setFormData({
      ...formData,
      timings: newTimings
    });
  };

  const handleAddTimingSlot = () => {
    setFormData({
      ...formData,
      timings: [...formData.timings, { day: '', startTime: '', endTime: '' }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    // Convert timings to a JSON string
    const dataToSubmit = {
      ...formData,
      timings: JSON.stringify(formData.timings) // Ensure timings is a JSON string
    };
  
    try {
      await axios.post('http://localhost:5000/api/hospitals/register-hospital', dataToSubmit);
      alert('Hospital registered successfully!');
      window.location.href = "/";
    } catch (err) {
      setError('Failed to register hospital: ' + err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="hospital-registration-form">
      <h2>Hospital Registration</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} handleNext={() => setStep(step + 1)} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} handleNext={() => setStep(step + 1)} handlePrev={() => setStep(step - 1)} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} handleNext={() => setStep(step + 1)} handlePrev={() => setStep(step - 1)} />}
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} handleNext={() => setStep(step + 1)} handlePrev={() => setStep(step - 1)} />}
        {step === 5 && <Step5 formData={formData} handleTimingChange={handleTimingChange} handleAddTimingSlot={handleAddTimingSlot} handleNext={() => setStep(step + 1)} handlePrev={() => setStep(step - 1)} />}
        {step === 6 && <Step6 formData={formData} handleChange={handleChange} handleNext={() => setStep(step + 1)} handlePrev={() => setStep(step - 1)} />}
        {step === 7 && <Step7 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handlePrev={() => setStep(step - 1)} />}
      </form>
      {loading && <p>Submitting...</p>}
    </div>
  );
};

export default HospitalRegistrationForm;
