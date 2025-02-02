import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>Welcome to Streaming Hub</h1>
      <p>Choose your platform:</p>
      <div className="home-links">
        <Link to="/netflix" className="link">Go to Netflix</Link>
        <Link to="/amazon-prime" className="link">Go to Amazon Prime</Link>
      </div>
    </div>
  );
};

export default HomePage;