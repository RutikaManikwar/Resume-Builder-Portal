import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResumeDisplay.css';

const ResumeDisplay = () => {
  const location = useLocation();
  const { resumeInfo } = location.state;

  return (
    <div className="resume-display">
      <h2>Generated Resume</h2>
      <section>
        <h3>Personal Details</h3>
        <p>Name: {resumeInfo.personalDetails.name}</p>
        <p>Address: {resumeInfo.personalDetails.address}</p>
        <p>Phone: {resumeInfo.personalDetails.phone}</p>
        <p>Email: {resumeInfo.personalDetails.email}</p>
      </section>
      <section>
        <h3>Education Details</h3>
        <p>Institute: {resumeInfo.educationDetails.institute}</p>
        <p>Degree: {resumeInfo.educationDetails.degree}</p>
        <p>Graduation Year: {resumeInfo.educationDetails.graduationYear}</p>
      </section>
      <section>
        <h3>Project Details</h3>
        {resumeInfo.projectDetails.map((project, index) => (
          <div key={index}>
            <p>Title: {project.title}</p>
            <p>Description: {project.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Achievements</h3>
        {resumeInfo.achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </section>
      <section>
        <h3>Skills</h3>
        {resumeInfo.skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </section>
    </div>
  );
};

export default ResumeDisplay;
