import React,{useState} from 'react';
import Navbar from '../components/Navbar.jsx';
import Modal from '../components/Model.jsx'

const SignUp = ({ formData, handleChange, handleNext }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSignUp = () => {
        // Show the modal
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        handleNext(); // Move to Step 1 after closing the modal
      };

return(
  <div className="w-full h-screen bg-lightGreen rounded-lg shadow-md">
    <Navbar showLogin={false} showLogout={false} showOther={false} />
    <h3 className="text-2xl font-semibold text-middleGreen text-left p-3">
      Doctor Sign Up Form
    </h3>

    <div className="space-y-4 text-left w-1/3 p-6">
      <div>
        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-2">
         Enter Name 
        </label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          placeholder="Enter Your Name as Dr. ---"
          value={formData.doctorName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
    Select Your Category
  </label>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
  >
    <option value="">Select Category</option>
    <option value="Dentist">Dentist</option>
    <option value="Cardiologists">Cardiologists</option>
    <option value="Audiologists">Audiologists</option>
    <option value="ENT Specialist">ENT Specialist</option>
    <option value="Gynecologist">Gynecologist</option>
    <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
    <option value="Paediatrician">Paediatrician</option>
    <option value="Psychiatrists">Psychiatrists</option>
    <option value="Veterinarian">Veterinarian</option>
    <option value="Radiologist">Radiologist</option>
    <option value="Pulmonologist">Pulmonologist</option>
    <option value="Endocrinologist">Endocrinologist</option>
    <option value="Oncologist">Oncologist</option>
    <option value="Neurologist">Neurologist</option>
    <option value="Cardiothoracic Surgeon">Cardiothoracic Surgeon</option>
  </select>
</div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
        Phone No.
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your Phone No"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-middleGreen"
        />
      </div>

      <div>
          <label>Profile Avatar:</label>
          <input
            type="file"
            name="avatar"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleSignUp}
          className="bg-docsoGreen text-white px-6 py-2 mr-5 rounded-md hover:bg-middleGreen transition duration-300"
        >
          Sign Up As a Doctor
        </button>
      </div>

    </div>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Sign Up Successful</h2>
        <p className="text-gray-700">Your sign-up was successful. You will be redirected to complete your profile.</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-docsoGreen text-white px-4 py-2 rounded-md hover:bg-middleGreen transition duration-300"
          >
            Proceed
          </button>
        </div>
      </Modal>
  </div>
)};

export default SignUp;
