// import React from 'react';
// import './LoginForm.css';

// const LoginForm = () => {
//   return (
//     <div className="login-form">
//       <h2>Login </h2>
//       <form>
//         <label>
//           Email:
//           <input type="email" name="email" required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" required />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;




// import React, { useState } from 'react';
// import './LoginForm.css';

// const LoginForm = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call onLoginSuccess directly to simulate successful login
//     onLoginSuccess();
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input 
//             type="email" 
//             name="email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input 
//             type="password" 
//             name="password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;




// import React, { useState } from 'react';
// import './LoginForm.css';

// const LoginForm = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLoginSuccess();
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input 
//             type="email" 
//             name="email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input 
//             type="password" 
//             name="password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;





import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a> {/* Add this line */}
    </div>
  );
};

export default LoginForm;
