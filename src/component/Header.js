// import React from 'react';
// import './Header.css';

// const Header = ({ handleRegisterClick }) => {
//   return (
//     <header className="header">
//       <h1><center>Resume Builder</center></h1>
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#login">Login</a></li>
//           <li><a href="#register" onClick={handleRegisterClick}>Register</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import './Header.css';

// const Header = ({ handleRegisterClick, handleLoginClick, onHomeClick }) => {
//   return (
//     <header className="header">
//       <h1><center>Resume Builder</center></h1>
//       <nav>
//         <ul>
//           <li><a href="#home" onClick={onHomeClick}>Home</a></li>
//           <li><a href="#login" onClick={handleLoginClick}>Login</a></li>
//           <li><a href="#register" onClick={handleRegisterClick}>Register</a></li>
//         </ul>
//       </nav>
//     </header>
    
//   );
// };

// export default Header;



// import React from 'react';
// import './Header.css';

// const Header = ({ handleRegisterClick, handleLoginClick, onHomeClick, onProfileClick, isLoggedIn }) => {
//   return (
//     <header className="header">
//       <h1>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={onProfileClick}>Profile</li>
//               <li onClick={handleRegisterClick}>Logout</li>
//             </>
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;







// import React from 'react';
// import './Header.css';

// const Header = ({ handleRegisterClick, handleLoginClick, onHomeClick, onProfileClick, isLoggedIn, handleLogoutClick }) => {
//   return (
//     <header className="header">
//       <h1 onClick={onHomeClick}>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={onProfileClick}>Profile</li>
//               <li onClick={handleLogoutClick}>Logout</li>
//             </>
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import './Header.css';

// const Header = ({ handleRegisterClick, handleLoginClick, onHomeClick, onCreateResumeClick, isLoggedIn }) => {
//   return (
//     <header className="header">
//       <h1>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={onCreateResumeClick}>Profile</li>
//               <li onClick={handleRegisterClick}>Logout</li>
//             </>
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;







// import React from 'react';
// import './Header.css';

// const Header = ({
//   handleRegisterClick,
//   handleLoginClick,
//   onHomeClick,
//   onProfileClick,
//   onCreateResumeClick,
//   isLoggedIn,
//   handleLogoutClick,
// }) => {
//   return (
//     <header className="header">
//       <h1 onClick={onHomeClick}>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={onProfileClick}>Profile</li>
//               <li onClick={handleLogoutClick}>Logout</li>
//             </>
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;




// import React from 'react';
// import './Header.css';

// const Header = ({
//   handleRegisterClick,
//   handleLoginClick,
//   onHomeClick,
//   onProfileClick,
//   onCreateResumeClick,
//   isLoggedIn,
//   handleLogoutClick,
//   isProfilePage, // New prop to determine if it's the profile page
// }) => {
//   return (
//     <header className="header">
//       <h1 onClick={onHomeClick}>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             isProfilePage ? (
//               <>
//                 <li onClick={onCreateResumeClick}>Create Resume</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </>
//             ) : (
//               <>
//                 <li onClick={onProfileClick}>Profile</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </>
//             )
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;






// import React from 'react';
// import './Header.css';

// const Header = ({
//   handleRegisterClick,
//   handleLoginClick,
//   onHomeClick,
//   onProfileClick,
//   onCreateResumeClick,
//   isLoggedIn,
//   handleLogoutClick,
//   isProfilePage, // New prop to determine if it's the profile page
// }) => {
//   return (
//     <header className="header">
//       <h1 onClick={onHomeClick}>Resume Builder</h1>
//       <nav>
//         <ul>
//           <li onClick={onHomeClick}>Home</li>
//           {isLoggedIn ? (
//             isProfilePage ? (
//               <>
//                 <li onClick={onCreateResumeClick}>Create Resume</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </>
//             ) : (
//               <>
//                 <li onClick={onProfileClick}>Profile</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </>
//             )
//           ) : (
//             <>
//               <li onClick={handleRegisterClick}>Register</li>
//               <li onClick={handleLoginClick}>Login</li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;






import React from 'react';
import './Header.css';

const Header = ({
  handleRegisterClick,
  handleLoginClick,
  onHomeClick,
  onProfileClick,
  onCreateResumeClick,
  isLoggedIn,
  handleLogoutClick,
  isProfilePage,
  isCreateResumePage, // New prop to determine if it's the create resume page
}) => {
  return (
    <header className="header">
      <h1 onClick={onHomeClick}>Resume Builder</h1>
      <nav>
        <ul>
          <li onClick={onHomeClick}>Home</li>
          {isLoggedIn ? (
            isProfilePage ? (
              <>
                <li onClick={onCreateResumeClick}>Create Resume</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </>
            ) : isCreateResumePage ? (
              <>
                {/* <li onClick={onCreateResumeClick}>Templates</li> */}
                <li onClick={onProfileClick}>Profile</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </>
            ) : (
              <>
                <li onClick={onProfileClick}>Profile</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </>
            )
          ) : (
            <>
              <li onClick={handleRegisterClick}>Register</li>
              <li onClick={handleLoginClick}>Login</li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;




