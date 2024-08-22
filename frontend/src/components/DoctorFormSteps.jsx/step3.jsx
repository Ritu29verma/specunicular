import React from 'react';
import ProgressBar from '../ProgressBar';
import Navbar from '../Navbar';

const Step3 = ({ formData, handleChange, handleNext, handlePrev, hospitals }) => (
   // const [states, setStates] = useState([]);
    // const [cities, setCities] = useState([]);
    
    // const [selectedState, setSelectedState] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    
    // useEffect(() => {
    //   const getStates = async () => {
    //     try {
    //       const result = await csc.getStatesOfCountry(selectedCountry);
    //       let allStates = [];
    //       allStates = result?.map(({ isoCode, name }) => ({
    //         isoCode,
    //         name
    //       }));
    //       const [{ isoCode: firstState = '' } = {}] = allStates;
    //       setCities([]);
    //       setSelectedCity('');
    //       setStates(allStates);
    //       setSelectedState(firstState);
    //     } catch (error) {
    //       setStates([]);
    //       setCities([]);
    //       setSelectedCity('');
    //     }
    //   };
  
    //   getStates();
    // }, []);
  
    // useEffect(() => {
    //   const getCities = async () => {
    //     try {
    //       const result = await csc.getCitiesOfState(
    //         selectedCountry,
    //         selectedState
    //       );
    //       let allCities = [];
    //       allCities = result?.map(({ name }) => ({
    //         name
    //       }));
    //       const [{ name: firstCity = '' } = {}] = allCities;
    //       setCities(allCities);
    //       setSelectedCity(firstCity);
    //     } catch (error) {
    //       setCities([]);
    //     }
    //   };
  
    //   getCities();
    // }, [selectedState]);

  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <ProgressBar step={3} totalSteps={8} />
    <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">Establishment Basic Details</h3>

    <div className="space-y-4 text-left w-1/3 p-6">
    <div>
    <label htmlFor="hospitalId" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Hospital Id
        </label>
        <input
        type="text"
        name="hospitalId"
        placeholder="Hospital Unique ID"
        value={formData.hospitalId}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
      />
    </div>
     
     <div>
     <label htmlFor="Establishment" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Name of Establishment
        </label>
        <input
        type="text"
        name="establishmentName"
        placeholder="Establishment Name"
        value={formData.establishmentName}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
      />
     </div>
    
    <div>
    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Name of the City
        </label>
        <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
      />
    </div>
     
     <div>
     <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Name of the Locality
        </label>
        <input
        type="text"
        name="locality"
        placeholder="Locality"
        value={formData.locality}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
      />
     </div>
     
    </div>

    <div className="mt-6 flex justify-between">
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
        className="bg-docsoGreen text-white px-6 py-2 mr-6 rounded-md hover:bg-middleGreen transition duration-300"
      >
        Save and go to the Next Section
      </button>
    </div>
  </div>
);

export default Step3;
