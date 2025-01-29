import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/Home">Business Project</Link>
      </div>

      {/* Desktop and Mobile Menu */}
      <ul className={`desktop-menu ${menuOpen ? 'mobile-menu' : ''}`}>
        <li>
          <Link to="/">Home</Link>
          <ul className="dropdown">
            <li><Link to="/ValueProposition"> ValueProposition </Link></li>
            <li><Link to="/CompanyOverview"> CompanyOverview</Link></li>
            <li><Link to="/HighlightingServices"> HighlightingServices</Link></li>
          </ul>
        </li>
        <li><Link to="/services">Services</Link>
        <ul className="dropdown">
            <li><Link to="/3DAnimation"> 3DAnimation </Link></li>
            <li><Link to="/ContentWriting"> ContentWriting</Link></li>
            <li><Link to="/WebsiteSolutions"> WebsiteSolutions</Link></li>
          </ul>
        </li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/ContactForm">Contact Us</Link></li>
        {/* <li><Link to="/blog">Blog</Link></li> */}
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;
