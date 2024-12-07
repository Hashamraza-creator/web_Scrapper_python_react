import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Hasham's Store</h2>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navLinks ${isMenuOpen ? 'active' : ''}`}>
        <li className="navItem">
          <Link to="/" className="navLink">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/about" className="navLink">About</Link>
        </li>
        <li className="navItem">
          <Link to="/products" className="navLink">Products</Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="navLink">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
