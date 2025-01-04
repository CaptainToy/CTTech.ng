import React from 'react';
import './about.css';
// 
// import img1 from "https://placehold.co/400";

const AboutUs = () => {
  const challenges = [
    { icon: "fas fa-users", title: "Skill Gaps", description: "Companies lacked diverse IT teams, missing roles like designers and architects." },
    { icon: "fas fa-cogs", title: "Static Teams", description: "Teams couldn't adapt to changing project needs." },
    { icon: "fas fa-users-cog", title: "Outdated Solutions", description: "Companies struggled to keep up with tech advances." },
    { icon: "fas fa-globe", title: "Global Talent", description: "They couldn't tap into global talent effectively." },
  ];

  return (
    <div className="about-company-container">
      <section className="about-company">
        <div className="about-content">
          <div className="about-company-content">
            <div className="title-text">ABOUT COMPANY</div>
          </div>
          <h1 className="story-title">Our Story</h1>
          <p className="story-description">
          Sunil Jagani, a Software Engineering graduate from Elizade University, with expertise in cybersecurity and penetration testing, is a key member of CTTech.
          </p>
          <p className="journey-description">
            From Tech Specialist to CTO, Sunil Jagani’s journey to tech innovation is quite impressive. He founded AllianceTek to address corporate challenges:
          </p>

          <div className="challenges">
            {challenges.map((challenge, index) => (
              <div className="challenge-item" key={index}>
                <i className={`${challenge.icon} challenge-icon`}></i>
                <p>
                  <strong>{challenge.title}</strong>
                  <br />
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://i.imgur.com/WbQnbas.png"
            alt="Team collaboration"
            className="main-img"
            onError={(e) => (e.target.src = 'fallback-image.webp')}
          />
          <div className="highlight-container">
            <p className="highlight">
              <strong>
                AllianceTek Now Thrives, Employing 100+ Experts Globally, Serving Clients Worldwide.
              </strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
