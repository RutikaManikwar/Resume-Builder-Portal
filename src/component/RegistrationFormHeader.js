import React, { useState } from 'react';
import './Header.css';

const Header = ({ handleRegisterClick, handleLoginClick, onHomeClick }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = () => {
    // Logic for login action
    // Assuming the login is successful
    setSuccessMessage('Login successful!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleRegister = () => {
    // Logic for register action
    // Assuming the registration is successful
    setSuccessMessage('Registration successful!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <header className="header">
      <h1><center>Resume Builder</center></h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <nav>
        <ul>
          <li><a href="#home" onClick={onHomeClick}>Home</a></li>
          <li><a href="#login" onClick={() => { handleLoginClick(); handleLogin(); }}>Login</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
