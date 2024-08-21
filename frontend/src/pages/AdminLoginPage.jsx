import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = ({ setAdminAuthenticated }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') { // Use a more secure method in real applications
      setAdminAuthenticated(true);
      navigate('/admin');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter admin password" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLoginPage;
