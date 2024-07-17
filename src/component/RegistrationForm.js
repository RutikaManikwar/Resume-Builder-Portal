// import React from 'react';

// import './RegistrationForm.css';

// const RegistrationForm = () => {
//   return (
//     <div className="registration-form">
//       <h2>Registration Form</h2>
//       <form>
//         <label>
//           First Name:
//           <input type="text" name="firstName" required />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" required />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" name="address" required />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" required />
//         </label>
//         <br />
//         <label>
//           Education:
//           <input type="text" name="education" required />
//         </label>
//         <br />
//         <label>
//           Mobile No:
//           <input type="tel" name="mobile" required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" required />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;






// import React, { useState } from 'react';
// import './RegistrationForm.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     email: '',
//     education: '',
//     mobile: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add validation logic here
//     // For example, check the length of firstName and lastName
//     if (formData.firstName.length > 20) {
//       alert('First name should be maximum 20 characters long.');
//       return;
//     }
//     if (formData.lastName.length > 20) {
//       alert('Last name should be maximum 20 characters long.');
//       return;
//     }
//     // Similarly, implement validation for other fields
//     // For email validation, you can use a regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//     // For password validation, you can check if it meets certain criteria
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
//     if (!passwordRegex.test(formData.password)) {
//       alert('Password should contain at least one uppercase letter, one lowercase letter, one number, one special symbol, and be at least 8 characters long.');
//       return;
//     }
//     // If all validations pass, you can proceed with form submission
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="registration-form">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Education:
//           <input
//             type="text"
//             name="education"
//             value={formData.education}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Mobile No:
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;



import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    education: '',
    mobile: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here

    // Assuming registration is successful
    setSuccessMessage('Registration successful!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      education: '',
      mobile: '',
      password: ''
    });
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Mobile No:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;




