import React, { useState,useEffect } from "react";
import axios from "axios";
import Step1 from "../components/DoctorFormSteps.jsx/step1";
import Step2 from "../components/DoctorFormSteps.jsx/step2";
import Step3 from "../components/DoctorFormSteps.jsx/step3";
import Step4 from "../components/DoctorFormSteps.jsx/step4";
import Step5 from "../components/DoctorFormSteps.jsx/step5";
import Step6 from "../components/DoctorFormSteps.jsx/step6";
import Step7 from "../components/DoctorFormSteps.jsx/step7";
import Step8 from "../components/DoctorFormSteps.jsx/step8";

const DoctorRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hospitalId: '',
    registrationNo: "",
    registrationCouncil: "",
    registrationYear: "",
    degree: "",
    college: "",
    completionYear: "",
    experience: "",
    establishmentName: "",
    city: "",
    locality: "",
    identityProof: null,
    medicalRegistrationProof: null,
    establishmentProof: null,
    timingSlots: [],
    consultancyFees: "",
  });

  const [timingSlot, setTimingSlot] = useState({
    day: "",
    startTime: "",
    endTime: "",
  });



  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTimingSlotChange = (e) => {
    const { name, value } = e.target;
    setTimingSlot({
      ...timingSlot,
      [name]: value,
    });
  };

  const handleAddTimingSlot = () => {
    setFormData({
      ...formData,
      timingSlots: [...formData.timingSlots, timingSlot],
    });
    setTimingSlot({ day: "", startTime: "", endTime: "" });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formDataToSubmit.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    });

    try {
      await axios.post(
        "http://localhost:5000/api/doctors/register",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Doctor registered successfully!");
    } catch (error) {
      console.error("Error registering doctor:", error);
      alert("An error occurred while registering the doctor.");
    }
  };

  return (
    <div className="doctor-registration-form">
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
       
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 4 && (
          <Step4
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 5 && (
          <Step5
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 6 && (
          <Step6
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 7 && (
          <Step7
            formData={formData}
            timingSlot={timingSlot}
            handleTimingSlotChange={handleTimingSlotChange}
            handleAddTimingSlot={handleAddTimingSlot}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {step === 8 && (
          <Step8
            formData={formData}
            handleChange={handleChange}
            handlePrev={handlePrev}
          />
        )}
      </form>
    </div>
  );
};

export default DoctorRegistrationForm;
