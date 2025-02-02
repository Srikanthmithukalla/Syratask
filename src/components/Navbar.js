import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Streaming Hub</Link>
      <div className="nav-links">
        <Link to="/netflix">Netflix</Link>
        <Link to="/amazon-prime">AmazonPrime</Link>
        <Link to="/loginsignup">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;