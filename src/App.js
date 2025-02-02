import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NetflixPage from './pages/NetflixPage';
import AmazonPrimePage from './pages/AmazonPrimePage';
import Loginsignup from './pages/Loginsignup';

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/netflix" element={<NetflixPage />} /> 
        <Route path="/amazon-prime" element={<AmazonPrimePage />} /> 
        <Route path="/loginsignup" element={<Loginsignup />} /> 
      </Routes>
      </>
  );
}

export default App;
