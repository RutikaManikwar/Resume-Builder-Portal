// // import React, { useState } from 'react';
// // import Header from './Header';
// // import RegistrationForm from './RegistrationForm';
// // import './Main.css';

// // const Main = () => {
// //   const [showRegistrationForm, setShowRegistrationForm] = useState(false);

// //   const handleRegisterClick = () => {
// //     setShowRegistrationForm(true);
// //   };

// //   return (
// //     <div className="main-container">
// //       {showRegistrationForm ? (
// //         <div className="registration-page">
// //           <Header />
// //           <RegistrationForm />
// //         </div>
// //       ) : (
// //         <div className="home-page">
// //           <Header handleRegisterClick={handleRegisterClick} />
// //           <div className="content">
// //             <h1>Welcome to Resume Builder</h1>
// //             <p>Click on Register to create a new account.</p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Main;


// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import './Main.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       {currentPage === 'register' ? (
//         <div className="registration-page">
//           <Header onHomeClick={handleHomeClick} />
//           <RegistrationForm />
//         </div>
//       ) : (
//         <div className="home-page">
//           <Header onHomeClick={handleHomeClick} handleRegisterClick={handleRegisterClick} />
//           <div className="content">
//             <h1>Welcome to Resume Builder</h1>
//             <p>Click on Register to create a new account.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;


// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import './Main.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleLoginClick = () => {
//     setCurrentPage('login');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header handleRegisterClick={handleRegisterClick} handleLoginClick={handleLoginClick} onHomeClick={handleHomeClick} />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm />}
//       {currentPage === 'home' && (
//         <div className="home-content">
//           <h1>Welcome to Resume Builder</h1>
//           <p>Click on Register to create a new account or Login if you already have an account.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;


// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import './Main.css';
// import './Home.css';

// const Home = () => {
//   return (
//     <main className="home">
//       <section className="intro">
//         <h2>Build Your Professional Resume in Minutes</h2>
//         <p>Create a standout resume with our easy-to-use builder.</p>
//         <img src="/images/resume-example.png" alt="Resume Example" className="resume-image"/>
//       </section>
//       <section className="features">
//         <div className="feature">
//           <div className="image-container">
//             <img src="/images/feature1.png" alt="Feature 1" />
//           </div>
//           <h3>Easy to Use</h3>
//           <p>Our builder is simple and intuitive.</p>
//         </div>
//         <div className="feature">
//           <div className="image-container">
//             <img src="/images/feature2.png" alt="Feature 2" />
//           </div>
//           <h3>Professional Templates</h3>
//           <p>Choose from a variety of templates.</p>
//         </div>
//         <div className="feature">
//           <div className="image-container">
//             <img src="/images/feature3.png" alt="Feature 3" />
//           </div>
//           <h3>Customizable</h3>
//           <p>Tailor your resume to your needs.</p>
//         </div>
//       </section>
//     </main>
//   );
// };

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleLoginClick = () => {
//     setCurrentPage('login');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header handleRegisterClick={handleRegisterClick} handleLoginClick={handleLoginClick} onHomeClick={handleHomeClick} />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm />}
//       {currentPage === 'home' && <Home />}
//     </div>
//   );
// };

// export default Main;



// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import Profile from './Profile';
// import './Main.css';
// import './Home.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleLoginClick = () => {
//     setCurrentPage('login');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   const handleProfileClick = () => {
//     setCurrentPage('profile');
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header 
//         handleRegisterClick={handleRegisterClick} 
//         handleLoginClick={handleLoginClick} 
//         onHomeClick={handleHomeClick} 
//         onProfileClick={handleProfileClick}
//         isLoggedIn={isLoggedIn}
//       />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
//       {currentPage === 'home' && <Home />}
//       {currentPage === 'profile' && <Profile />}
//     </div>
//   );
// };

// export default Main;



// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import Profile from './Profile';
// import './Main.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleLoginClick = () => {
//     setCurrentPage('login');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   const handleProfileClick = () => {
//     setCurrentPage('profile');
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header 
//         handleRegisterClick={handleRegisterClick} 
//         handleLoginClick={handleLoginClick} 
//         onHomeClick={handleHomeClick}
//         onProfileClick={handleProfileClick}
//         isLoggedIn={isLoggedIn}
//         handleLogoutClick={handleLogoutClick}
//       />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
//       {currentPage === 'home' && <Home />}
//       {currentPage === 'profile' && <Profile />}
//     </div>
//   );
// };

// export default Main;



// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import Profile from './Profile';
// import './Main.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleRegisterClick = () => {
//     setCurrentPage('register');
//   };

//   const handleLoginClick = () => {
//     setCurrentPage('login');
//   };

//   const handleHomeClick = () => {
//     setCurrentPage('home');
//   };

//   const handleCreateResumeClick = () => {
//     setCurrentPage('profile'); // Change to profile for now, as we don't have a CreateResume component yet
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header
//         handleRegisterClick={handleRegisterClick}
//         handleLoginClick={handleLoginClick}
//         onHomeClick={handleHomeClick}
//         onCreateResumeClick={handleCreateResumeClick}
//         isLoggedIn={isLoggedIn}
//       />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
//       {currentPage === 'home' && <Home />}
//       {currentPage === 'profile' && <Profile />}
//     </div>
//   );
// };

// export default Main;









// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import Profile from './Profile';
// import CreateResume from './CreateResume';
// import Home from './Home';
// import './Main.css';
// import './Home.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleRegisterClick = () => setCurrentPage('register');
//   const handleLoginClick = () => setCurrentPage('login');
//   const handleHomeClick = () => setCurrentPage('home');
//   const handleProfileClick = () => setCurrentPage('profile');
//   const handleCreateResumeClick = () => setCurrentPage('createResume');
//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('home');
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       <Header
//         handleRegisterClick={handleRegisterClick}
//         handleLoginClick={handleLoginClick}
//         onHomeClick={handleHomeClick}
//         onProfileClick={handleProfileClick}
//         onCreateResumeClick={handleCreateResumeClick}
//         isLoggedIn={isLoggedIn}
//         handleLogoutClick={handleLogoutClick}
//       />
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
//       {currentPage === 'home' && <Home />}
//       {currentPage === 'profile' && <Profile />}
//       {currentPage === 'createResume' && <CreateResume />}
//     </div>
//   );
// };

// export default Main;





// import React, { useState } from 'react';
// import Header from './Header';
// import RegistrationForm from './RegistrationForm';
// import LoginForm from './LoginForm';
// import Profile from './Profile';
// import CreateResume from './CreateResume';
// import Home from './Home';
// import './Main.css';
// import './Home.css';

// const Main = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleRegisterClick = () => setCurrentPage('register');
//   const handleLoginClick = () => setCurrentPage('login');
//   const handleHomeClick = () => setCurrentPage('home');
//   const handleProfileClick = () => setCurrentPage('profile');
//   const handleCreateResumeClick = () => setCurrentPage('createResume');
//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('home');
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   return (
//     <div className="main-container">
//       {currentPage !== 'profile' && (
//         <Header
//           handleRegisterClick={handleRegisterClick}
//           handleLoginClick={handleLoginClick}
//           onHomeClick={handleHomeClick}
//           onProfileClick={handleProfileClick}
//           onCreateResumeClick={handleCreateResumeClick}
//           isLoggedIn={isLoggedIn}
//           handleLogoutClick={handleLogoutClick}
//         />
//       )}
//       {currentPage === 'register' && <RegistrationForm />}
//       {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
//       {currentPage === 'home' && <Home />}
//       {currentPage === 'profile' && (
//         <Profile
//           onHomeClick={handleHomeClick}
//           onCreateResumeClick={handleCreateResumeClick}
//           onLogoutClick={handleLogoutClick}
//         />
//       )}
//       {currentPage === 'createResume' && (
//         <CreateResume
//           onHomeClick={handleHomeClick}
//           onLogoutClick={handleLogoutClick}
//         />
//       )}
//     </div>
//   );
// };

// export default Main;



import React, { useState } from 'react';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Profile from './Profile';
import CreateResume from './CreateResume';
import Home from './Home';
import './Main.css';
import './Home.css';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegisterClick = () => setCurrentPage('register');
  const handleLoginClick = () => setCurrentPage('login');
  const handleHomeClick = () => setCurrentPage('home');
  const handleProfileClick = () => setCurrentPage('profile');
  const handleCreateResumeClick = () => setCurrentPage('createResume');
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div className="main-container">
      {(currentPage !== 'profile' && currentPage !== 'createResume') && (
        <Header
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
          onHomeClick={handleHomeClick}
          onProfileClick={handleProfileClick}
          onCreateResumeClick={handleCreateResumeClick}
          isLoggedIn={isLoggedIn}
          handleLogoutClick={handleLogoutClick}
        />
      )}
      {currentPage === 'register' && <RegistrationForm />}
      {currentPage === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'home' && <Home />}
      {currentPage === 'profile' && (
        <Profile
          onHomeClick={handleHomeClick}
          onCreateResumeClick={handleCreateResumeClick}
          onLogoutClick={handleLogoutClick}
        />
      )}
      {currentPage === 'createResume' && (
        <CreateResume
          onHomeClick={handleHomeClick}
          onProfileClick={handleProfileClick}
          onLogoutClick={handleLogoutClick}
        />
      )}
    </div>
  );
};

export default Main;

