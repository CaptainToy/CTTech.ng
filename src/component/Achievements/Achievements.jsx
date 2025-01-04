import React from "react";
import "./Achievements.css";
import CountUp from 'react-countup'; // Ensure this is correctly imported

import img1 from "../../assets/img/service_right_img.webp";
import img2 from "../../assets/img/service_bottom_img.webp";

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        {/* Left Image Section */}
        <div className="achievements-image-wrapper">
          <img src={img1} alt="Team collaboration" className="main-image" />
          <img src={img2} alt="Graphs and data" className="highlight-image" />
        </div>

        {/* Right Text Section */}
        <div className="achievements-content">
          <h4 className="achievements-subtitle">ACHIEVEMENTS</h4>
          <h2 className="achievements-title">Experience Matters</h2>
          <p className="achievements-description">
            We offer software development-infused solutions to varied industries,
            ensuring it aligns with your system, needs, and aids in scaling business.
          </p>
          <div className="achievements-stats">
            <div className="stat-box">
              <h3 className="stat-number"> 
                <CountUp
                  start={0}
                  end={8}
                  separator=","
                  duration={5}
                  className="count-up-text"
                />+
              </h3>
              <p className="stat-label">Years of Trust</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">
                <CountUp
                  start={0}
                  end={500}
                  separator=","
                  duration={2}
                  className="count-up-text"
                />+
              </h3>
              <p className="stat-label">Successful Projects</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number"> 
                <CountUp
                  start={0}
                  end={110}
                  separator=","
                  duration={2}
                  className="count-up-text"
                />+
              </h3>
              <p className="stat-label">IT Professionals</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number"> 
                <CountUp
                  start={0}
                  end={5}
                  separator=","
                  duration={5}
                  className="count-up-text"
                />+
              </h3>
              <p className="stat-label">Global Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
