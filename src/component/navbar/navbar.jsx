import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "../../assets/logo/newlogo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const linksRef = useRef([]);
  const MySwal = withReactContent(Swal);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleBookMeeting = () => {
    MySwal.fire({
      title: "Confirm Booking",
      text: "Please book a meeting only if you are certain you will attend. This helps ensure availability for others who are serious about scheduling. Thank you for respecting our time.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/BamCom");
      }
    });
  };

  // Animate links when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      gsap.killTweensOf(linksRef.current);
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

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
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["Home", "About", "Our Work", "FAQ", "Contact", "Services"].map(
            (text, index) => (
              <li key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link to={`/${text === "Home" ? "" : text}`}>{text}</Link>
              </li>
            )
          )}
          <li ref={(el) => (linksRef.current[5] = el)}>
            <a href="#" onClick={(e) => e.preventDefault(handleBookMeeting())} className="Book">
              Book a Meeting
            </a>
          </li>
        </ul>

        <div className="appearance">
          <div className={`color-icon`}>
            <div className="get-btn">
              <button onClick={handleBookMeeting}>Book a Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
