import React from 'react';
import Header from './Header';

const SuccessPage = () => {
  return (
    <div>
      <Header />
      <div className="success-page">
        <h2>Success!</h2>
        <p>Registration successful!</p>
      </div>
    </div>
  );
};

export default SuccessPage;
