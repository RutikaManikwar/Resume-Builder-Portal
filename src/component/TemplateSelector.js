import React from 'react';
import './TemplateSelector.css';

const TemplateSelector = ({ onSelectTemplate }) => {
  return (
    <div className="template-selector">
      <h2>Select a Resume Template</h2>
      <div className="template-list">
        <div className="template-item" onClick={() => onSelectTemplate(1)}>
          Template 1
        </div>
        <div className="template-item" onClick={() => onSelectTemplate(2)}>
          Template 2
        </div>
        {/* Add more templates as needed */}
      </div>
    </div>
  );
};

export default TemplateSelector;
