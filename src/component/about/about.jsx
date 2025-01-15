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
          CTTech’s journey began 8 years ago with a clear goal: to help local and small businesses create their online presence. The company started by developing custom websites designed to meet the unique needs of each business. As the team gained experience, CTTech expanded its services to include digital marketing and SEO optimization, becoming a reliable partner for companies aiming to grow online.
          </p>
          <p className="journey-description">
          Today, CTTech has transformed into a full-service digital agency, offering comprehensive solutions for businesses of all sizes. With a focus on innovation, the team continues to provide state-of-the-art services to help clients stay ahead in the digital landscape. By blending creativity and technical expertise, CTTech helps businesses reach new heights and achieve lasting success.
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
            src="https://i.pinimg.com/736x/f0/81/97/f0819711bf1757b3f72595a36b7035d0.jpg"
            alt="Team collaboration"
            className="main-img"
            onError={(e) => (e.target.src = 'fallback-image.webp')}
          />
          {/* <div className="highlight-container">
            <p className="highlight">
              <strong>
                AllianceTek Now Thrives, Employing 100+ Experts Globally, Serving Clients Worldwide.
              </strong>
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
