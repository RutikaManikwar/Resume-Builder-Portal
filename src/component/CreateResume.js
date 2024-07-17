





// import React, { useState } from 'react';
// import Header from './Header';
// import './CreateResume.css';

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState({
//     personalDetails: {
//       name: '',
//       address: '',
//       phone: '',
//       email: '',
//     },
//     educationDetails: {
//       institute: '',
//       degree: '',
//       graduationYear: '',
//     },
//     projectDetails: [
//       { title: '', description: '' } // Initial project
//     ],
//     achievements: [''], // Initial achievement
//     skills: [''], // Initial skill
//   });

//   const [showResume, setShowResume] = useState(false);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails') {
//       const projects = [...resumeInfo.projectDetails];
//       projects[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: projects,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   return (
//     <div className="create-resume">
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={true} // Indicate that this is the profile page
//       />
//       <h2>Create Resume</h2>
//       <form className="resume-form" onSubmit={handleSubmit}>
//         <section>
//           <h3>Personal Details</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={resumeInfo.personalDetails.name}
//             onChange={(e) => handleChange(e, 'personalDetails')}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={resumeInfo.personalDetails.address}
//             onChange={(e) => handleChange(e, 'personalDetails')}
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={resumeInfo.personalDetails.phone}
//             onChange={(e) => handleChange(e, 'personalDetails')}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={resumeInfo.personalDetails.email}
//             onChange={(e) => handleChange(e, 'personalDetails')}
//           />
//         </section>
//         <section>
//           <h3>Education Details</h3>
//           <input
//             type="text"
//             name="institute"
//             placeholder="Institute"
//             value={resumeInfo.educationDetails.institute}
//             onChange={(e) => handleChange(e, 'educationDetails')}
//           />
//           <input
//             type="text"
//             name="degree"
//             placeholder="Degree"
//             value={resumeInfo.educationDetails.degree}
//             onChange={(e) => handleChange(e, 'educationDetails')}
//           />
//           <input
//             type="text"
//             name="graduationYear"
//             placeholder="Graduation Year"
//             value={resumeInfo.educationDetails.graduationYear}
//             onChange={(e) => handleChange(e, 'educationDetails')}
//           />
//         </section>
//         <section>
//           <h3>Project Details</h3>
//           {resumeInfo.projectDetails.map((project, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Project Title"
//                 value={project.title}
//                 onChange={(e) => handleChange(e, 'projectDetails', index)}
//               />
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Project Description"
//                 value={project.description}
//                 onChange={(e) => handleChange(e, 'projectDetails', index)}
//               />
//               {index > 0 && (
//                 <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//               )}
//             </div>
//           ))}
//           <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//         </section>
//         <section>
//           <h3>Achievements</h3>
//           {resumeInfo.achievements.map((achievement, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="achievement"
//                 placeholder="Achievement"
//                 value={achievement}
//                 onChange={(e) => handleChange(e, 'achievements', index)}
//               />
//               {index > 0 && (
//                 <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//               )}
//             </div>
//           ))}
//           <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//         </section>
//         <section>
//           <h3>Skills</h3>
//           {resumeInfo.skills.map((skill, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="skill"
//                 placeholder="Skill"
//                 value={skill}
//                 onChange={(e) => handleChange(e, 'skills', index)}
//               />
//               {index > 0 && (
//                 <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//               )}
//             </div>
//           ))}
//           <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//         </section>
//         <button type="submit">Submit</button>
//       </form>
      
//       {showResume && (
//         <div className="resume-display">
//           <h2>Generated Resume</h2>
//           <section className="resume-section">
//             <h3 className="resume-section-title">Personal Details</h3>
//             <p><span className="resume-field">Name:</span> {resumeInfo.personalDetails.name}</p>
//             <p><span className="resume-field">Address:</span> {resumeInfo.personalDetails.address}</p>
//             <p><span className="resume-field">Phone:</span> {resumeInfo.personalDetails.phone}</p>
//             <p><span className="resume-field">Email:</span> {resumeInfo.personalDetails.email}</p>
//           </section>
//           <section className="resume-section">
//             <h3 className="resume-section-title">Education Details</h3>
//             <p><span className="resume-field">Institute:</span> {resumeInfo.educationDetails.institute}</p>
//             <p><span className="resume-field">Degree:</span> {resumeInfo.educationDetails.degree}</p>
//             <p><span className="resume-field">Graduation Year:</span> {resumeInfo.educationDetails.graduationYear}</p>
//           </section>
//           <section className="resume-section">
//             <h3 className="resume-section-title">Project Details</h3>
//             {resumeInfo.projectDetails.map((project, index) => (
//               <div key={index}>
//                 <p><span className="resume-field">Title:</span> {project.title}</p>
//                 <p><span className="resume-field">Description:</span> {project.description}</p>
//               </div>
//             ))}
//           </section>
//           <section className="resume-section">
//             <h3 className="resume-section-title">Achievements</h3>
//             {resumeInfo.achievements.map((achievement, index) => (
//               <p key={index}><span className="resume-field">Achievement:</span> {achievement}</p>
//             ))}
//           </section>
//           <section className="resume-section">
//             <h3 className="resume-section-title">Skills</h3>
//             {resumeInfo.skills.map((skill, index) => (
//               <p key={index}><span className="resume-field">Skill:</span> {skill}</p>
//             ))}
//           </section>
//         </div>
//       )} 
//     </div>
//   );
// };

// export default CreateResume;







// import React, { useState } from 'react';
// import Header from './Header';
// import './CreateResume.css';

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState({
//     personalDetails: {
//       name: '',
//       address: '',
//       phone: '',
//       email: '',
//       photo: '',
//     },
//     educationDetails: {
//       institute: '',
//       degree: '',
//       graduationYear: '',
//     },
//     projectDetails: [
//       { title: '', description: '' }
//     ],
//     achievements: [''],
//     skills: [''],
//   });

//   const [showResume, setShowResume] = useState(false);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails') {
//       const projects = [...resumeInfo.projectDetails];
//       projects[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: projects,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         personalDetails: {
//           ...prevState.personalDetails,
//           photo: reader.result,
//         },
//       }));
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   return (
//     <div>
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={true}
//       />
//       <div className="create-resume">
//         <h2>Create Resume</h2>
//         <form className="resume-form" onSubmit={handleSubmit}>
//           <section>
//             <h3>Personal Details</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={resumeInfo.personalDetails.name}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={resumeInfo.personalDetails.address}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={resumeInfo.personalDetails.phone}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={resumeInfo.personalDetails.email}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//             />
//           </section>
//           <section>
//             <h3>Education Details</h3>
//             <input
//               type="text"
//               name="institute"
//               placeholder="Institute"
//               value={resumeInfo.educationDetails.institute}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="degree"
//               placeholder="Degree"
//               value={resumeInfo.educationDetails.degree}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="graduationYear"
//               placeholder="Graduation Year"
//               value={resumeInfo.educationDetails.graduationYear}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//           </section>
//           <section>
//             <h3>Projects</h3>
//             {resumeInfo.projectDetails.map((project, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Project Title"
//                   value={project.title}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   placeholder="Project Description"
//                   value={project.description}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//           </section>
//           <section>
//             <h3>Achievements</h3>
//             {resumeInfo.achievements.map((achievement, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="achievement"
//                   placeholder="Achievement"
//                   value={achievement}
//                   onChange={(e) => handleChange(e, 'achievements', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//           </section>
//           <section>
//             <h3>Skills</h3>
//             {resumeInfo.skills.map((skill, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="skill"
//                   placeholder="Skill"
//                   value={skill}
//                   onChange={(e) => handleChange(e, 'skills', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//           </section>
//           <button type="submit">Create Resume</button>
//         </form>
//         {showResume && (
//   <div className="resume">
//     <div className="resume_left">
//       {resumeInfo.personalDetails.photo && (
//         <div className="resume_profile">
//           <img
//             src={resumeInfo.personalDetails.photo}
//             alt="Profile"
//           />
//         </div>
//       )}
//       <div className="resume_content">
//         <div className="resume_item resume_info">
//           <div className="title">
//             <p className="bold">{resumeInfo.personalDetails.name}</p>
//           </div>
//           <ul>
//             <li>
//               <div className="icon">
//                 <i className="fas fa-map-marker-alt"></i>
//               </div>
//               <div className="data">{resumeInfo.personalDetails.address}</div>
//             </li>
//             <li>
//               <div className="icon">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="data">{resumeInfo.personalDetails.phone}</div>
//             </li>
//             <li>
//               <div className="icon">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="data">{resumeInfo.personalDetails.email}</div>
//             </li>
//           </ul>
//         </div>
//         <div className="resume_item resume_skills">
//           <div className="title">
//             <p className="bold">Skills</p>
//           </div>
//           <ul>
//             {resumeInfo.skills.map((skill, index) => (
//               <li key={index}>
//                 <div className="skill_name">{skill}</div>
//                 <div className="skill_progress">
//                   <span style={{ width: '80%' }}></span>
//                 </div>
//                 <div className="skill_per">80%</div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="resume_item resume_social">
//           <div className="title">
//             <p className="bold">Social</p>
//           </div>
//           <ul>
//             <li>
//               <div className="icon">
//                 <i className="fab fa-linkedin"></i>
//               </div>
//               <div className="data">linkedin.com/in/name</div>
//             </li>
//             <li>
//               <div className="icon">
//                 <i className="fab fa-github"></i>
//               </div>
//               <div className="data">github.com/name</div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="resume_right">
//       <div className="resume_item resume_about">
//         <div className="title">
//           <p className="bold">About Me</p>
//         </div>
//         <p>
//           I am a web developer with a passion for creating beautiful and functional websites.
//         </p>
//       </div>
//       <div className="resume_item resume_work">
//         <div className="title">
//           <p className="bold">Work Experience</p>
//         </div>
//         <ul>
//           <li>
//             <div className="date">2018 - Present</div>
//             <div className="info">
//               <p className="semi-bold">Web Developer</p>
//               <p>Company Name</p>
//               <p>
//                 Responsibilities include creating websites and web applications, ensuring
//                 responsive design, and collaborating with designers and other developers.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="resume_item resume_education">
//         <div className="title">
//           <p className="bold">Education</p>
//         </div>
//         <ul>
//           <li>
//             <div className="date">{resumeInfo.educationDetails.graduationYear}</div>
//             <div className="info">
//               <p className="semi-bold">{resumeInfo.educationDetails.degree}</p>
//               <p>{resumeInfo.educationDetails.institute}</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="resume_item resume_projects">
//         <div className="title">
//           <p className="bold">Projects</p>
//         </div>
//         {resumeInfo.projectDetails.map((project, index) => (
//           <div className="info" key={index}>
//             <p className="semi-bold">{project.title}</p>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="resume_item resume_achievements">
//         <div className="title">
//           <p className="bold">Achievements</p>
//         </div>
//         <ul>
//           {resumeInfo.achievements.map((achievement, index) => (
//             <li key={index}>{achievement}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default CreateResume;





// import React, { useState } from 'react';
// import Header from './Header';
// import './CreateResume.css';

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState({
//     personalDetails: {
//       name: '',
//       address: '',
//       phone: '',
//       email: '',
//       photo: '',
//     },
//     educationDetails: {
//       institute: '',
//       degree: '',
//       graduationYear: '',
//     },
//     projectDetails: [
//       { title: '', description: '' }
//     ],
//     achievements: [''],
//     skills: [''],
//   });

//   const [showResume, setShowResume] = useState(false);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails') {
//       const projects = [...resumeInfo.projectDetails];
//       projects[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: projects,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         personalDetails: {
//           ...prevState.personalDetails,
//           photo: reader.result,
//         },
//       }));
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   return (
//     <div>
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={true}
//       />
//       <div className="create-resume">
//         <h2>Create Resume</h2>
//         <form className="resume-form" onSubmit={handleSubmit}>
//           <section>
//             <h3>Personal Details</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={resumeInfo.personalDetails.name}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={resumeInfo.personalDetails.address}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={resumeInfo.personalDetails.phone}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={resumeInfo.personalDetails.email}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//             />
//           </section>
//           <section>
//             <h3>Education Details</h3>
//             <input
//               type="text"
//               name="institute"
//               placeholder="Institute"
//               value={resumeInfo.educationDetails.institute}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="degree"
//               placeholder="Degree"
//               value={resumeInfo.educationDetails.degree}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="graduationYear"
//               placeholder="Graduation Year"
//               value={resumeInfo.educationDetails.graduationYear}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//           </section>
//           <section>
//             <h3>Projects</h3>
//             {resumeInfo.projectDetails.map((project, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Project Title"
//                   value={project.title}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   placeholder="Project Description"
//                   value={project.description}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//           </section>
//           <section>
//             <h3>Achievements</h3>
//             {resumeInfo.achievements.map((achievement, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="achievement"
//                   placeholder="Achievement"
//                   value={achievement}
//                   onChange={(e) => handleChange(e, 'achievements', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//           </section>
//           <section>
//             <h3>Skills</h3>
//             {resumeInfo.skills.map((skill, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="skill"
//                   placeholder="Skill"
//                   value={skill}
//                   onChange={(e) => handleChange(e, 'skills', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//           </section>
//           <button type="submit">Create Resume</button>
//         </form>
//         {showResume && (
//           <div className="resume">
//             <div className="resume_left">
//               {resumeInfo.personalDetails.photo && (
//                 <div className="resume_profile">
//                   <img
//                     src={resumeInfo.personalDetails.photo}
//                     alt="Profile"
//                   />
//                 </div>
//               )}
//               <div className="resume_content">
//                 <div className="resume_item resume_info">
//                   <div className="title">
//                     <p className="bold">{resumeInfo.personalDetails.name}</p>
//                   </div>
//                   <ul>
//                     <li>
//                       <div className="icon">
//                         <i className="fas fa-map-marker-alt"></i>
//                       </div>
//                       <div className="data">{resumeInfo.personalDetails.address}</div>
//                     </li>
//                     <li>
//                       <div className="icon">
//                         <i className="fas fa-phone"></i>
//                       </div>
//                       <div className="data">{resumeInfo.personalDetails.phone}</div>
//                     </li>
//                     <li>
//                       <div className="icon">
//                         <i className="fas fa-envelope"></i>
//                       </div>
//                       <div className="data">{resumeInfo.personalDetails.email}</div>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="resume_item resume_skills">
//                   <div className="title">
//                     <p className="bold">Skills</p>
//                   </div>
//                   <ul>
//                     {resumeInfo.skills.map((skill, index) => (
//                       <li key={index}>
//                         <div className="skill_name">{skill}</div>
//                         <div className="skill_progress">
//                           <span style={{ width: '80%' }}></span>
//                         </div>
//                         <div className="skill_per">80%</div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="resume_item resume_social">
//                   <div className="title">
//                     <p className="bold">Social</p>
//                   </div>
//                   <ul>
//                     <li>
//                       <div className="icon">
//                         <i className="fab fa-linkedin"></i>
//                       </div>
//                       <div className="data">linkedin.com/in/name</div>
//                     </li>
//                     <li>
//                       <div className="icon">
//                         <i className="fab fa-github"></i>
//                       </div>
//                       <div className="data">github.com/name</div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="resume_right">
//               <div className="resume_item resume_about">
//                 <div className="title">
//                   <p className="bold">About Me</p>
//                 </div>
//                 <p>
//                   I am a web developer with a passion for creating beautiful and functional websites.
//                 </p>
//               </div>
//               <div className="resume_item resume_work">
//                 <div className="title">
//                   <p className="bold">Work Experience</p>
//                 </div>
//                 <ul>
//                   <li>
//                     <div className="date">2018 - Present</div>
//                     <div className="info">
//                       <p className="semi-bold">Web Developer</p>
//                       <p>Company Name</p>
//                       <p>
//                         Responsibilities include creating websites and web applications, ensuring
//                         responsive design, and collaborating with designers and other developers.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//               <div className="resume_item resume_education">
//                 <div className="title">
//                   <p className="bold">Education</p>
//                 </div>
//                 <ul>
//                   <li>
//                     <div className="date">{resumeInfo.educationDetails.graduationYear}</div>
//                     <div className="info">
//                       <p className="semi-bold">{resumeInfo.educationDetails.degree}</p>
//                       <p>{resumeInfo.educationDetails.institute}</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//               <div className="resume_item resume_projects">
//                 <div className="title">
//                   <p className="bold">Projects</p>
//                 </div>
//                 {resumeInfo.projectDetails.map((project, index) => (
//                   <div className="info" key={index}>
//                     <p className="semi-bold">{project.title}</p>
//                     <p>{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_item resume_achievements">
//                 <div className="title">
//                   <p className="bold">Achievements</p>
//                 </div>
//                 <ul>
//                   {resumeInfo.achievements.map((achievement, index) => (
//                     <li key={index}>{achievement}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateResume;



// import React, { useState } from 'react';
// import Header from './Header';
// import TemplateSelector from './TemplateSelector'; // Ensure correct import path
// import './CreateResume.css';

// const templates = {
//   1: {
//     personalDetails: {
//       name: '',
//       address: '',
//       phone: '',
//       email: '',
//       photo: '',
//     },
//     educationDetails: {
//       institute: '',
//       degree: '',
//       graduationYear: '',
//     },
//     projectDetails: [
//       { title: '', description: '' }
//     ],
//     achievements: [''],
//     skills: [''],
//   },
//   2: {
//     // Define the structure for other templates
//   },
//   // Add more templates as needed
// };

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState(null);
//   const [showResume, setShowResume] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails') {
//       const projects = [...resumeInfo.projectDetails];
//       projects[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: projects,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         personalDetails: {
//           ...prevState.personalDetails,
//           photo: reader.result,
//         },
//       }));
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   const handleSelectTemplate = (templateId) => {
//     setResumeInfo(templates[templateId]);
//     setSelectedTemplate(templateId);
//   };

//   if (!selectedTemplate) {
//     return (
//       <div>
//         <Header
//           onHomeClick={onHomeClick}
//           handleLogoutClick={onLogoutClick}
//           isLoggedIn={true}
//           isProfilePage={false}
//           isCreateResumePage={true}
//           onCreateResumeClick={() => {}}
//         />
//         <TemplateSelector onSelectTemplate={handleSelectTemplate} />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={false}
//         isCreateResumePage={true}
//         onCreateResumeClick={() => {}}
//       />
//       <div className="create-resume">
//         <h2>Create Resume</h2>
//         <form className="resume-form" onSubmit={handleSubmit}>
//           <section>
//             <h3>Personal Details</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={resumeInfo.personalDetails.name}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={resumeInfo.personalDetails.address}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={resumeInfo.personalDetails.phone}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={resumeInfo.personalDetails.email}
//               onChange={(e) => handleChange(e, 'personalDetails')}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//             />
//           </section>
//           <section>
//             <h3>Education Details</h3>
//             <input
//               type="text"
//               name="institute"
//               placeholder="Institute"
//               value={resumeInfo.educationDetails.institute}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="degree"
//               placeholder="Degree"
//               value={resumeInfo.educationDetails.degree}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//             <input
//               type="text"
//               name="graduationYear"
//               placeholder="Graduation Year"
//               value={resumeInfo.educationDetails.graduationYear}
//               onChange={(e) => handleChange(e, 'educationDetails')}
//             />
//           </section>
//           <section>
//             <h3>Projects</h3>
//             {resumeInfo.projectDetails.map((project, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Project Title"
//                   value={project.title}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   placeholder="Project Description"
//                   value={project.description}
//                   onChange={(e) => handleChange(e, 'projectDetails', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//           </section>
//           <section>
//             <h3>Achievements</h3>
//             {resumeInfo.achievements.map((achievement, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="achievement"
//                   placeholder="Achievement"
//                   value={achievement}
//                   onChange={(e) => handleChange(e, 'achievements', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//           </section>
//           <section>
//             <h3>Skills</h3>
//             {resumeInfo.skills.map((skill, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="skill"
//                   placeholder="Skill"
//                   value={skill}
//                   onChange={(e) => handleChange(e, 'skills', index)}
//                 />
//                 {index > 0 && (
//                   <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//                 )}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//           </section>
//           <button type="submit">Create Resume</button>
//         </form>
//         {showResume && (
//           <div className="resume">
//             <div className="resume_left">
//               {resumeInfo.personalDetails.photo && (
//                 <div className="resume_photo">
//                   <img src={resumeInfo.personalDetails.photo} alt="Profile" />
//                 </div>
//               )}
//               <div className="resume_personal">
//                 <h2>{resumeInfo.personalDetails.name}</h2>
//                 <p>{resumeInfo.personalDetails.address}</p>
//                 <p>{resumeInfo.personalDetails.phone}</p>
//                 <p>{resumeInfo.personalDetails.email}</p>
//               </div>
//             </div>
//             <div className="resume_right">
//               <div className="resume_section">
//                 <h3>Education</h3>
//                 <p>{resumeInfo.educationDetails.institute}</p>
//                 <p>{resumeInfo.educationDetails.degree}</p>
//                 <p>{resumeInfo.educationDetails.graduationYear}</p>
//               </div>
//               <div className="resume_section">
//                 <h3>Projects</h3>
//                 {resumeInfo.projectDetails.map((project, index) => (
//                   <div key={index}>
//                     <h4>{project.title}</h4>
//                     <p>{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Achievements</h3>
//                 {resumeInfo.achievements.map((achievement, index) => (
//                   <div key={index}>
//                     <p>{achievement}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Skills</h3>
//                 {resumeInfo.skills.map((skill, index) => (
//                   <div key={index}>
//                     <p>{skill}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateResume;





// import React, { useState } from 'react';
// import Header from './Header';
// import TemplateSelector from './TemplateSelector'; // Ensure correct import path
// import './CreateResume.css';

// const templates = {
//   1: {
//     personalDetails: {
//       name: '',
//       address: '',
//       phone: '',
//       email: '',
//       photo: '',
//     },
//     educationDetails: {
//       institute: '',
//       degree: '',
//       graduationYear: '',
//     },
//     projectDetails: [
//       { title: '', description: '' }
//     ],
//     achievements: [''],
//     skills: [''],
//   },
//   2: {
//     personalDetails: {
//       name: '',
//       phone: '',
//       email: '',
//     },
//     educationDetails: {
//       school: '',
//       yearCompleted: '',
//     },
//     workExperience: [
//       { company: '', position: '', duration: '', description: '' }
//     ],
//     certifications: [''],
//     hobbies: [''],
//   },
//   // Add more templates as needed
// };

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState(null);
//   const [showResume, setShowResume] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails' || section === 'workExperience') {
//       const items = [...resumeInfo[section]];
//       items[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else if (section === 'workExperience') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         workExperience: [...prevState.workExperience, { company: '', position: '', duration: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         personalDetails: {
//           ...prevState.personalDetails,
//           photo: reader.result,
//         },
//       }));
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   const handleSelectTemplate = (templateId) => {
//     setResumeInfo(templates[templateId]);
//     setSelectedTemplate(templateId);
//   };

//   if (!selectedTemplate) {
//     return (
//       <div>
//         <Header
//           onHomeClick={onHomeClick}
//           handleLogoutClick={onLogoutClick}
//           isLoggedIn={true}
//           isProfilePage={false}
//           isCreateResumePage={true}
//           onCreateResumeClick={() => {}}
//         />
//         <TemplateSelector onSelectTemplate={handleSelectTemplate} />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={false}
//         isCreateResumePage={true}
//         onCreateResumeClick={() => {}}
//       />
//       <div className="create-resume">
//         <h2>Create Resume</h2>
//         <form className="resume-form" onSubmit={handleSubmit}>
//           {selectedTemplate === 1 && (
//             <>
//               <section>
//                 <h3>Personal Details</h3>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={resumeInfo.personalDetails.name}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={resumeInfo.personalDetails.address}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone"
//                   value={resumeInfo.personalDetails.phone}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={resumeInfo.personalDetails.email}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePhotoUpload}
//                 />
//               </section>
//               <section>
//                 <h3>Education Details</h3>
//                 <input
//                   type="text"
//                   name="institute"
//                   placeholder="Institute"
//                   value={resumeInfo.educationDetails.institute}
//                   onChange={(e) => handleChange(e, 'educationDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="degree"
//                   placeholder="Degree"
//                   value={resumeInfo.educationDetails.degree}
//                   onChange={(e) => handleChange(e, 'educationDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="graduationYear"
//                   placeholder="Graduation Year"
//                   value={resumeInfo.educationDetails.graduationYear}
//                   onChange={(e) => handleChange(e, 'educationDetails')}
//                 />
//               </section>
//               <section>
//                 <h3>Projects</h3>
//                 {resumeInfo.projectDetails.map((project, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="title"
//                       placeholder="Project Title"
//                       value={project.title}
//                       onChange={(e) => handleChange(e, 'projectDetails', index)}
//                     />
//                     <input
//                       type="text"
//                       name="description"
//                       placeholder="Project Description"
//                       value={project.description}
//                       onChange={(e) => handleChange(e, 'projectDetails', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//               </section>
//               <section>
//                 <h3>Achievements</h3>
//                 {resumeInfo.achievements.map((achievement, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="achievement"
//                       placeholder="Achievement"
//                       value={achievement}
//                       onChange={(e) => handleChange(e, 'achievements', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//               </section>
//               <section>
//                 <h3>Skills</h3>
//                 {resumeInfo.skills.map((skill, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="skill"
//                       placeholder="Skill"
//                       value={skill}
//                       onChange={(e) => handleChange(e, 'skills', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//               </section>
//             </>
//           )}
//           {selectedTemplate === 2 && (
//             <>
//               <section>
//                 <h3>Personal Details</h3>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={resumeInfo.personalDetails.name}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone"
//                   value={resumeInfo.personalDetails.phone}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={resumeInfo.personalDetails.email}
//                   onChange={(e) => handleChange(e, 'personalDetails')}
//                 />
//               </section>
//               <section>
//                 <h3>Education Details</h3>
//                 <input
//                   type="text"
//                   name="school"
//                   placeholder="School"
//                   value={resumeInfo.educationDetails.school}
//                   onChange={(e) => handleChange(e, 'educationDetails')}
//                 />
//                 <input
//                   type="text"
//                   name="yearCompleted"
//                   placeholder="Year Completed"
//                   value={resumeInfo.educationDetails.yearCompleted}
//                   onChange={(e) => handleChange(e, 'educationDetails')}
//                 />
//               </section>
//               <section>
//                 <h3>Work Experience</h3>
//                 {resumeInfo.workExperience.map((experience, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="company"
//                       placeholder="Company"
//                       value={experience.company}
//                       onChange={(e) => handleChange(e, 'workExperience', index)}
//                     />
//                     <input
//                       type="text"
//                       name="position"
//                       placeholder="Position"
//                       value={experience.position}
//                       onChange={(e) => handleChange(e, 'workExperience', index)}
//                     />
//                     <input
//                       type="text"
//                       name="duration"
//                       placeholder="Duration"
//                       value={experience.duration}
//                       onChange={(e) => handleChange(e, 'workExperience', index)}
//                     />
//                     <input
//                       type="text"
//                       name="description"
//                       placeholder="Description"
//                       value={experience.description}
//                       onChange={(e) => handleChange(e, 'workExperience', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('workExperience', index)}>Remove Experience</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('workExperience')}>Add Experience</button>
//               </section>
//               <section>
//                 <h3>Certifications</h3>
//                 {resumeInfo.certifications.map((certification, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="certification"
//                       placeholder="Certification"
//                       value={certification}
//                       onChange={(e) => handleChange(e, 'certifications', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('certifications', index)}>Remove Certification</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('certifications')}>Add Certification</button>
//               </section>
//               <section>
//                 <h3>Hobbies</h3>
//                 {resumeInfo.hobbies.map((hobby, index) => (
//                   <div key={index}>
//                     <input
//                       type="text"
//                       name="hobby"
//                       placeholder="Hobby"
//                       value={hobby}
//                       onChange={(e) => handleChange(e, 'hobbies', index)}
//                     />
//                     {index > 0 && (
//                       <button type="button" onClick={() => handleRemoveItem('hobbies', index)}>Remove Hobby</button>
//                     )}
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddItem('hobbies')}>Add Hobby</button>
//               </section>
//             </>
//           )}
//           <button type="submit">Create Resume</button>
//         </form>
//         {showResume && selectedTemplate === 1 && (
//           <div className="resume">
//             <div className="resume_left">
//               {resumeInfo.personalDetails.photo && (
//                 <div className="resume_photo">
//                   <img src={resumeInfo.personalDetails.photo} alt="Profile" />
//                 </div>
//               )}
//               <div className="resume_personal">
//                 <h2>{resumeInfo.personalDetails.name}</h2>
//                 <p>{resumeInfo.personalDetails.address}</p>
//                 <p>{resumeInfo.personalDetails.phone}</p>
//                 <p>{resumeInfo.personalDetails.email}</p>
//               </div>
//             </div>
//             <div className="resume_right">
//               <div className="resume_section">
//                 <h3>Education</h3>
//                 <p>{resumeInfo.educationDetails.institute}</p>
//                 <p>{resumeInfo.educationDetails.degree}</p>
//                 <p>{resumeInfo.educationDetails.graduationYear}</p>
//               </div>
//               <div className="resume_section">
//                 <h3>Projects</h3>
//                 {resumeInfo.projectDetails.map((project, index) => (
//                   <div key={index}>
//                     <h4>{project.title}</h4>
//                     <p>{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Achievements</h3>
//                 {resumeInfo.achievements.map((achievement, index) => (
//                   <div key={index}>
//                     <p>{achievement}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Skills</h3>
//                 {resumeInfo.skills.map((skill, index) => (
//                   <div key={index}>
//                     <p>{skill}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {showResume && selectedTemplate === 2 && (
//           <div className="resume">
//             <div className="resume_left">
//               <div className="resume_personal">
//                 <h2>{resumeInfo.personalDetails.name}</h2>
//                 <p>{resumeInfo.personalDetails.phone}</p>
//                 <p>{resumeInfo.personalDetails.email}</p>
//               </div>
//             </div>
//             <div className="resume_right">
//               <div className="resume_section">
//                 <h3>Education</h3>
//                 <p>{resumeInfo.educationDetails.school}</p>
//                 <p>{resumeInfo.educationDetails.yearCompleted}</p>
//               </div>
//               <div className="resume_section">
//                 <h3>Work Experience</h3>
//                 {resumeInfo.workExperience.map((experience, index) => (
//                   <div key={index}>
//                     <h4>{experience.company}</h4>
//                     <p>{experience.position}</p>
//                     <p>{experience.duration}</p>
//                     <p>{experience.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Certifications</h3>
//                 {resumeInfo.certifications.map((certification, index) => (
//                   <div key={index}>
//                     <p>{certification}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="resume_section">
//                 <h3>Hobbies</h3>
//                 {resumeInfo.hobbies.map((hobby, index) => (
//                   <div key={index}>
//                     <p>{hobby}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateResume;








// import React, { useState } from 'react';
// import Header from './Header';
// import TemplateSelector from './TemplateSelector'; // Ensure correct import path
// import './CreateResume.css';

// const initialResumeInfo = {
//   personalDetails: {
//     name: '',
//     address: '',
//     phone: '',
//     email: '',
//     photo: '',
//   },
//   educationDetails: {
//     institute: '',
//     degree: '',
//     graduationYear: '',
//   },
//   projectDetails: [
//     { title: '', description: '' }
//   ],
//   achievements: [''],
//   skills: [''],
// };

// const CreateResume = ({ onHomeClick, onLogoutClick }) => {
//   const [resumeInfo, setResumeInfo] = useState(initialResumeInfo);
//   const [showResume, setShowResume] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const handleChange = (e, section, index) => {
//     const { name, value } = e.target;

//     if (section === 'personalDetails' || section === 'educationDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [name]: value,
//         },
//       }));
//     } else if (section === 'projectDetails') {
//       const items = [...resumeInfo[section]];
//       items[index][name] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     } else {
//       const items = [...resumeInfo[section]];
//       items[index] = value;
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: items,
//       }));
//     }
//   };

//   const handleAddItem = (section) => {
//     if (section === 'projectDetails') {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
//       }));
//     } else {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         [section]: [...prevState[section], ''],
//       }));
//     }
//   };

//   const handleRemoveItem = (section, index) => {
//     setResumeInfo(prevState => ({
//       ...prevState,
//       [section]: prevState[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResumeInfo(prevState => ({
//         ...prevState,
//         personalDetails: {
//           ...prevState.personalDetails,
//           photo: reader.result,
//         },
//       }));
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   const handleSelectTemplate = (templateId) => {
//     setSelectedTemplate(templateId);
//   };

//   return (
//     <div>
//       <Header
//         onHomeClick={onHomeClick}
//         handleLogoutClick={onLogoutClick}
//         isLoggedIn={true}
//         isProfilePage={false}
//         isCreateResumePage={true}
//         onCreateResumeClick={() => {}}
//       />
//       {!selectedTemplate ? (
//         <TemplateSelector onSelectTemplate={handleSelectTemplate} />
//       ) : (
//         <div className="create-resume">
//           <h2>Create Resume</h2>
//           <form className="resume-form" onSubmit={handleSubmit}>
//             <section>
//               <h3>Personal Details</h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={resumeInfo.personalDetails.name}
//                 onChange={(e) => handleChange(e, 'personalDetails')}
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={resumeInfo.personalDetails.address}
//                 onChange={(e) => handleChange(e, 'personalDetails')}
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 value={resumeInfo.personalDetails.phone}
//                 onChange={(e) => handleChange(e, 'personalDetails')}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={resumeInfo.personalDetails.email}
//                 onChange={(e) => handleChange(e, 'personalDetails')}
//               />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//               />
//             </section>
//             <section>
//               <h3>Education Details</h3>
//               <input
//                 type="text"
//                 name="institute"
//                 placeholder="Institute"
//                 value={resumeInfo.educationDetails.institute}
//                 onChange={(e) => handleChange(e, 'educationDetails')}
//               />
//               <input
//                 type="text"
//                 name="degree"
//                 placeholder="Degree"
//                 value={resumeInfo.educationDetails.degree}
//                 onChange={(e) => handleChange(e, 'educationDetails')}
//               />
//               <input
//                 type="text"
//                 name="graduationYear"
//                 placeholder="Graduation Year"
//                 value={resumeInfo.educationDetails.graduationYear}
//                 onChange={(e) => handleChange(e, 'educationDetails')}
//               />
//             </section>
//             <section>
//               <h3>Projects</h3>
//               {resumeInfo.projectDetails.map((project, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Project Title"
//                     value={project.title}
//                     onChange={(e) => handleChange(e, 'projectDetails', index)}
//                   />
//                   <input
//                     type="text"
//                     name="description"
//                     placeholder="Project Description"
//                     value={project.description}
//                     onChange={(e) => handleChange(e, 'projectDetails', index)}
//                   />
//                   {index > 0 && (
//                     <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
//                   )}
//                 </div>
//               ))}
//               <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
//             </section>
//             <section>
//               <h3>Achievements</h3>
//               {resumeInfo.achievements.map((achievement, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="achievement"
//                     placeholder="Achievement"
//                     value={achievement}
//                     onChange={(e) => handleChange(e, 'achievements', index)}
//                   />
//                   {index > 0 && (
//                     <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
//                   )}
//                 </div>
//               ))}
//               <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
//             </section>
//             <section>
//               <h3>Skills</h3>
//               {resumeInfo.skills.map((skill, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="skill"
//                     placeholder="Skill"
//                     value={skill}
//                     onChange={(e) => handleChange(e, 'skills', index)}
//                   />
//                   {index > 0 && (
//                     <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
//                   )}
//                 </div>
//               ))}
//               <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
//             </section>
//             <button type="submit">Create Resume</button>
//           </form>
//           {showResume && (
//             <div className={`resume template-${selectedTemplate}`}>
//               <div className="resume_left">
//                 {resumeInfo.personalDetails.photo && (
//                   <div className="resume_photo">
//                     <img src={resumeInfo.personalDetails.photo} alt="Profile" />
//                   </div>
//                 )}
//                 <div className="resume_personal">
//                   <h2>{resumeInfo.personalDetails.name}</h2>
//                   <p>{resumeInfo.personalDetails.address}</p>
//                   <p>{resumeInfo.personalDetails.phone}</p>
//                   <p>{resumeInfo.personalDetails.email}</p>
//                 </div>
//               </div>
//               <div className="resume_right">
//                 <div className="resume_section">
//                   <h3>Education</h3>
//                   <p>{resumeInfo.educationDetails.institute}</p>
//                   <p>{resumeInfo.educationDetails.degree}</p>
//                   <p>{resumeInfo.educationDetails.graduationYear}</p>
//                 </div>
//                 <div className="resume_section">
//                   <h3>Projects</h3>
//                   {resumeInfo.projectDetails.map((project, index) => (
//                     <div key={index}>
//                       <h4>{project.title}</h4>
//                       <p>{project.description}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="resume_section">
//                   <h3>Achievements</h3>
//                   {resumeInfo.achievements.map((achievement, index) => (
//                     <div key={index}>
//                       <p>{achievement}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="resume_section">
//                   <h3>Skills</h3>
//                   {resumeInfo.skills.map((skill, index) => (
//                     <div key={index}>
//                       <p>{skill}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateResume;









import React, { useState, useRef } from 'react';
import Header from './Header';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import TemplateSelector from './TemplateSelector'; // Ensure correct import path
import './CreateResume.css';

const initialResumeInfo = {
  personalDetails: {
    name: '',
    address: '',
    phone: '',
    email: '',
    photo: '',
  },
  educationDetails: {
    institute: '',
    degree: '',
    graduationYear: '',
  },
  projectDetails: [
    { title: '', description: '' }
  ],
  achievements: [''],
  skills: [''],
};

const CreateResume = ({ onHomeClick, onLogoutClick }) => {
  const [resumeInfo, setResumeInfo] = useState(initialResumeInfo);
  const [showResume, setShowResume] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const resumeRef = useRef(null);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;

    if (section === 'personalDetails' || section === 'educationDetails') {
      setResumeInfo(prevState => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      }));
    } else if (section === 'projectDetails') {
      const items = [...resumeInfo[section]];
      items[index][name] = value;
      setResumeInfo(prevState => ({
        ...prevState,
        [section]: items,
      }));
    } else {
      const items = [...resumeInfo[section]];
      items[index] = value;
      setResumeInfo(prevState => ({
        ...prevState,
        [section]: items,
      }));
    }
  };

  const handleAddItem = (section) => {
    if (section === 'projectDetails') {
      setResumeInfo(prevState => ({
        ...prevState,
        projectDetails: [...prevState.projectDetails, { title: '', description: '' }],
      }));
    } else {
      setResumeInfo(prevState => ({
        ...prevState,
        [section]: [...prevState[section], ''],
      }));
    }
  };

  const handleRemoveItem = (section, index) => {
    setResumeInfo(prevState => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setResumeInfo(prevState => ({
        ...prevState,
        personalDetails: {
          ...prevState.personalDetails,
          photo: reader.result,
        },
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleDownloadResume = () => {
    const resumeContainer = resumeRef.current;
  
    html2canvas(resumeContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div>
      <Header
        onHomeClick={onHomeClick}
        handleLogoutClick={onLogoutClick}
        isLoggedIn={true}
        isProfilePage={false}
        isCreateResumePage={true}
        onCreateResumeClick={() => {}}
      />
      {!selectedTemplate ? (
        <TemplateSelector onSelectTemplate={handleSelectTemplate} />
      ) : (
        <div className="create-resume">
          <h2>Create Resume</h2>
          <form className="resume-form" onSubmit={handleSubmit}>
            <section>
              <h3>Personal Details</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={resumeInfo.personalDetails.name}
                onChange={(e) => handleChange(e, 'personalDetails')}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={resumeInfo.personalDetails.address}
                onChange={(e) => handleChange(e, 'personalDetails')}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={resumeInfo.personalDetails.phone}
                onChange={(e) => handleChange(e, 'personalDetails')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={resumeInfo.personalDetails.email}
                onChange={(e) => handleChange(e, 'personalDetails')}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </section>
            <section>
              <h3>Education Details</h3>
              <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={resumeInfo.educationDetails.institute}
                onChange={(e) => handleChange(e, 'educationDetails')}
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={resumeInfo.educationDetails.degree}
                onChange={(e) => handleChange(e, 'educationDetails')}
              />
              <input
                type="text"
                name="graduationYear"
                placeholder="Graduation Year"
                value={resumeInfo.educationDetails.graduationYear}
                onChange={(e) => handleChange(e, 'educationDetails')}
              />
            </section>
            <section>
              <h3>Projects</h3>
              {resumeInfo.projectDetails.map((project, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) => handleChange(e, 'projectDetails', index)}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) => handleChange(e, 'projectDetails', index)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => handleRemoveItem('projectDetails', index)}>Remove Project</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('projectDetails')}>Add Project</button>
            </section>
            <section>
              <h3>Achievements</h3>
              {resumeInfo.achievements.map((achievement, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="achievement"
                    placeholder="Achievement"
                    value={achievement}
                    onChange={(e) => handleChange(e, 'achievements', index)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => handleRemoveItem('achievements', index)}>Remove Achievement</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('achievements')}>Add Achievement</button>
            </section>
            <section>
              <h3>Skills</h3>
              {resumeInfo.skills.map((skill, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="skill"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => handleChange(e, 'skills', index)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => handleRemoveItem('skills', index)}>Remove Skill</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('skills')}>Add Skill</button>
            </section>
            <button type="submit">Create Resume</button>
          </form>
          {showResume && (
            <>
              <div className={`resume template-${selectedTemplate}`} ref={resumeRef}>
                <div className="resume_left">
                  {resumeInfo.personalDetails.photo && (
                    <div className="resume_photo">
                      <img src={resumeInfo.personalDetails.photo} alt="Profile" />
                    </div>
                  )}
                  <div className="resume_personal">
                    <h2>{resumeInfo.personalDetails.name}</h2>
                    <p>{resumeInfo.personalDetails.address}</p>
                    <p>{resumeInfo.personalDetails.phone}</p>
                    <p>{resumeInfo.personalDetails.email}</p>
                  </div>
                </div>
                <div className="resume_right">
                  <div className="resume_section">
                    <h3>Education</h3>
                    <p>{resumeInfo.educationDetails.institute}</p>
                    <p>{resumeInfo.educationDetails.degree}</p>
                    <p>{resumeInfo.educationDetails.graduationYear}</p>
                  </div>
                  <div className="resume_section">
                    <h3>Projects</h3>
                    {resumeInfo.projectDetails.map((project, index) => (
                      <div key={index}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="resume_section">
                    <h3>Achievements</h3>
                    {resumeInfo.achievements.map((achievement, index) => (
                      <div key={index}>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                  <div className="resume_section">
                    <h3>Skills</h3>
                    {resumeInfo.skills.map((skill, index) => (
                      <div key={index}>
                        <p>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={handleDownloadResume}>Download Resume</button>

            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateResume;
