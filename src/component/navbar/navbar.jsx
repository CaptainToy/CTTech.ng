import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/logo/newlogo.png';
import "./navbar.css";

const Navbar = () => {
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const display = () => {
    navigate("/Bam");
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          {/* <li>
            <Link to="/services">Services</Link>
          </li> */}
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <a herf="#contact">Contact</a>
          </li>
          <li>
            <a href="#" onClick={display} className="Book">Book a Meeting</a>
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
