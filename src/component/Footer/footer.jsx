import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="dark:text-black-500">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-black-300">
          {/* Navigation Links */}
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center pt-6 space-y-4 sm:flex-col sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center lg:pt-0">

            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com"
              title="Instagram"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10"
              style={{ background: "#E1306C", color: "white" }}
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.twitter.com"
              title="Twitter"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10"
              style={{ background: "#1DA1F2", color: "white" }}
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com"
              title="Facebook"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10"
              style={{ background: "#1877F2", color: "white" }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:example@example.com"
              title="Gmail"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10"
              style={{ background: "#D44638", color: "white" }}
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
