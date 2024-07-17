// // Profile.js
// import React from 'react';
// import './Profile.css';

// const Profile = () => {
//   return (
//     <div className="profile">
//       <h2>User Profile</h2>
//       <p>Welcome to your profile!</p>
//     </div>
//   );
// };

// export default Profile;





// import React from 'react';
// import './Profile.css';

// const Profile = () => {
//   return (
//     <div className="profile">
//       <h2>User Profile</h2>
//       <p>Welcome to your profile page!</p>
//     </div>
//   );
// };

// export default Profile;







// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   // State for user information
//   const [userInfo, setUserInfo] = useState({
//     name: 'John Doe',
//     address: '123 Main Street, City, Country',
//     education: 'Bachelor of Science in Computer Science',
//     photo: null // Initially no photo
//   });

//   // Function to handle photo upload
//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     // Check if a file is selected
//     if (file) {
//       // Set the photo in state
//       setUserInfo(prevState => ({
//         ...prevState,
//         photo: URL.createObjectURL(file)
//       }));
//     }
//   };

//   return (
//     <div className="profile">
//       <h2>User Profile</h2>
//       <div className="profile-info">
//         <div className="profile-photo">
//           <img src={userInfo.photo} alt="Profile" className="profile-image" />
//           <input type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="profile-details">
//           <p><strong>Name:</strong> {userInfo.name}</p>
//           <p><strong>Address:</strong> {userInfo.address}</p>
//           <p><strong>Education:</strong> {userInfo.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   // State for user information
//   const [userInfo, setUserInfo] = useState({
//     name: 'John Doe',
//     address: '123 Main Street, City, Country',
//     education: 'Bachelor of Science in Computer Science',
//     photo: null // Initially no photo
//   });

//   // Function to handle photo upload
//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     // Check if a file is selected
//     if (file) {
//       // Set the photo in state
//       setUserInfo(prevState => ({
//         ...prevState,
//         photo: URL.createObjectURL(file)
//       }));
//     }
//   };

//   return (
//     <div className="profile">
//       <h2>User Profile</h2>
//       <div className="profile-info">
//         <div className="profile-photo">
//           <label htmlFor="photo-upload" className="upload-text">
//             {userInfo.photo ? <img src={userInfo.photo} alt="Profile" className="profile-image" /> : 'Upload a Photo'}
//           </label>
//           <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
//         </div>
//         <div className="profile-details">
//           <p><strong>Name:</strong> {userInfo.name}</p>
//           <p><strong>Address:</strong> {userInfo.address}</p>
//           <p><strong>Education:</strong> {userInfo.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;





// import React, { useState } from 'react'; // Add useState to the import statement
// import ProfileHeader from './ProfileHeader';
// import './Profile.css';

// const Profile = () => {
//   // State for user information
//   const [userInfo, setUserInfo] = useState({
//     name: 'John Doe',
//     address: '123 Main Street, City, Country',
//     education: 'Bachelor of Science in Computer Science',
//     photo: null // Initially no photo
//   });

//   // Function to handle photo upload
//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUserInfo(prevState => ({
//         ...prevState,
//         photo: URL.createObjectURL(file)
//       }));
//     }
//   };

//   return (
//     <div className="profile">
//       <ProfileHeader />
//       <h2>User Profile</h2>
//       <div className="profile-info">
//         <div className="profile-photo">
//           <img src={userInfo.photo} alt="Profile" className="profile-image" />
//           <input type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="profile-details">
//           <p><strong>Name:</strong> {userInfo.name}</p>
//           <p><strong>Address:</strong> {userInfo.address}</p>
//           <p><strong>Education:</strong> {userInfo.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;





// import React, { useState } from 'react';
// import Header from './Header';
// import './Profile.css';

// const Profile = ({ onHomeClick, onLogoutClick, onCreateResumeClick }) => {
//   const [userInfo, setUserInfo] = useState({
//     name: 'John Doe',
//     address: '123 Main Street, City, Country',
//     education: 'Bachelor of Science in Computer Science',
//     photo: null, // Initially no photo
//   });

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUserInfo(prevState => ({
//         ...prevState,
//         photo: URL.createObjectURL(file),
//       }));
//     }
//   };

//   return (
//     <div className="profile">
//       <Header
//         onHomeClick={onHomeClick}
//         onCreateResumeClick={onCreateResumeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={true} // Indicate that this is the profile page
//       />
//       <h2>User Profile</h2>
//       <div className="profile-info">
//         <div className="profile-photo">
//           <img src={userInfo.photo} alt="Profile" className="profile-image" />
//           <input type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="profile-details">
//           <p><strong>Name:</strong> {userInfo.name}</p>
//           <p><strong>Address:</strong> {userInfo.address}</p>
//           <p><strong>Education:</strong> {userInfo.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;







// import React, { useState } from 'react';
// import Header from './Header';
// import './Profile.css';

// const Profile = ({ onHomeClick, onCreateResumeClick, onLogoutClick }) => {
//   const [userInfo, setUserInfo] = useState({
//     name: 'John Doe',
//     address: '123 Main Street, City, Country',
//     education: 'Bachelor of Science in Computer Science',
//     photo: null, // Initially no photo
//   });

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUserInfo((prevState) => ({
//         ...prevState,
//         photo: URL.createObjectURL(file),
//       }));
//     }
//   };

//   return (
//     <div className="profile">
//       <Header
//         onHomeClick={onHomeClick}
//         onCreateResumeClick={onCreateResumeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={true} // Indicate that this is the profile page
//       />
//       <h2>User Profile</h2>
//       <div className="profile-info">
//         <div className="profile-photo">
//           <img src={userInfo.photo} alt="Profile" className="profile-image" />
//           <input type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="profile-details">
//           <p><strong>Name:</strong> {userInfo.name}</p>
//           <p><strong>Address:</strong> {userInfo.address}</p>
//           <p><strong>Education:</strong> {userInfo.education}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;







import React, { useState } from 'react';
import Header from './Header';
import './Profile.css';

const Profile = ({ onHomeClick, onCreateResumeClick, onLogoutClick }) => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    address: '123 Main Street, City, Country',
    education: 'Bachelor of Science in Computer Science',
    photo: null, // Initially no photo
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prevState) => ({
        ...prevState,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="profile">
      <Header
        onHomeClick={onHomeClick}
        onCreateResumeClick={onCreateResumeClick}
        handleLogoutClick={onLogoutClick}
        isLoggedIn={true}
        isProfilePage={true} // Indicate that this is the profile page
      />
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-photo">
          <img src={userInfo.photo} alt="Profile" className="profile-image" />
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <div className="profile-details">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Address:</strong> {userInfo.address}</p>
          <p><strong>Education:</strong> {userInfo.education}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;






