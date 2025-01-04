import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const display = () => {
    navigate("/Bam");
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Work">Our Work</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="appearance">
          <div className={`color-icon ${isColorBoxOpen ? "open" : ""}`}>
            <div className="get-btn">
              <button onClick={display}>Book a Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
