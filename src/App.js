// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure the correct path
import HomePage from './components/homepage'; // Capitalize 'HomePage.js'
import ScrappedData from './components/ScrappedData';
import AboutPage from './components/AboutPage';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ScrappedData />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
