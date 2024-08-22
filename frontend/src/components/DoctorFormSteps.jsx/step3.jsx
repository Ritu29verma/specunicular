import React from 'react';
// import csc from 'country-state-city';


const Step3 = ({ formData, handleChange, handleNext, handlePrev}) => {
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
    
  return(
  <div>
    <h3>Establishment Basic Details</h3>
    
    <input
      type="text"
      name="hospitalId"
      placeholder="Hospital Unique Id"
      value={formData.hospitalId}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="establishmentName"
      placeholder="Establishment Name"
      value={formData.establishmentName}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="locality"
      placeholder="Locality"
      value={formData.locality}
      onChange={handleChange}
      required
    />
    <button type="button" onClick={handlePrev}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
  </div>
)};

export default Step3;
