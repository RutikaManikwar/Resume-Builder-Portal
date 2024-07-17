import React from 'react';
import './Header.css';

const ProfileHeader = ({
  onHomeClick,
  onCreateResumeClick,
  handleLogoutClick,
}) => {
  return (
    <header className="header">
      <h1 onClick={onHomeClick}>Resume Builder</h1>
      <nav>
        <ul>
          <li onClick={onHomeClick}>Home</li>
          <li onClick={onCreateResumeClick}>Create Resume</li>
          <li onClick={handleLogoutClick}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default ProfileHeader;
