// import React from 'react';
// import './DefaultResume.css';

// const DefaultResume = ({ resumeInfo }) => {
//   return (
//     <div className="default-resume">
//       <div className="header">
//         <h2>Default Resume</h2>
//         <img src="path_to_your_photo.jpg" alt="Profile Photo" className="profile-photo" />
//       </div>
//       <section>
//         <h3>Personal Details</h3>
//         <p><strong>Name:</strong> {resumeInfo.personalDetails.name}</p>
//         <p><strong>Address:</strong> {resumeInfo.personalDetails.address}</p>
//         <p><strong>Phone:</strong> {resumeInfo.personalDetails.phone}</p>
//         <p><strong>Email:</strong> {resumeInfo.personalDetails.email}</p>
//       </section>
//       <section>
//         <h3>Education Details</h3>
//         <p><strong>Institute:</strong> {resumeInfo.educationDetails.institute}</p>
//         <p><strong>Degree:</strong> {resumeInfo.educationDetails.degree}</p>
//         <p><strong>Graduation Year:</strong> {resumeInfo.educationDetails.graduationYear}</p>
//       </section>
//       <section>
//         <h3>Project Details</h3>
//         {resumeInfo.projectDetails.map((project, index) => (
//           <div key={index}>
//             <p><strong>Title:</strong> {project.title}</p>
//             <p><strong>Description:</strong> {project.description}</p>
//           </div>
//         ))}
//       </section>
//       <section>
//         <h3>Achievements</h3>
//         {resumeInfo.achievements.map((achievement, index) => (
//           <p key={index}>{achievement}</p>
//         ))}
//       </section>
//       <section>
//         <h3>Skills</h3>
//         {resumeInfo.skills.map((skill, index) => (
//           <p key={index}>{skill}</p>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default DefaultResume;





// DefaultResume.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DefaultResume = () => {
  const location = useLocation();
  const { resumeInfo } = location.state || { resumeInfo: {} };

  return (
    <div className="resume-display">
      <h2>Generated Resume</h2>
      <section>
        <h3>Personal Details</h3>
        <p>Name: {resumeInfo?.personalDetails?.name}</p>
        <p>Address: {resumeInfo?.personalDetails?.address}</p>
        <p>Phone: {resumeInfo?.personalDetails?.phone}</p>
        <p>Email: {resumeInfo?.personalDetails?.email}</p>
      </section>
      <section>
        <h3>Education Details</h3>
        <p>Institute: {resumeInfo?.educationDetails?.institute}</p>
        <p>Degree: {resumeInfo?.educationDetails?.degree}</p>
        <p>Graduation Year: {resumeInfo?.educationDetails?.graduationYear}</p>
        <p>Percentage/CGPA: {resumeInfo?.educationDetails?.percentageCgpa}</p>
      </section>
      <section>
        <h3>Project Details</h3>
        {resumeInfo?.projectDetails?.map((project, index) => (
          <div key={index}>
            <p>Title: {project.title}</p>
            <p>Description: {project.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Achievements</h3>
        {resumeInfo?.achievements?.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </section>
      <section>
        <h3>Skills</h3>
        {resumeInfo?.skills?.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </section>
    </div>
  );
};

export default DefaultResume;
