import React, { useEffect, useRef } from "react";
import "./Achievements.css";
import CountUp from 'react-countup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Achievements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the container when it enters and leaves the viewport
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%", // When the top of the container reaches 80% of the viewport height
      end: "bottom 20%", // When the bottom of the container is at 20% of the viewport height
      onEnter: () => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          }
        );
      },
      onLeave: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          }
        );
      },
      onLeaveBack: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -50,
          duration: 1.5,
          ease: "power3.in",
        });
      },
    });
  }, []);

  return (
    <section className="achievements-section" ref={containerRef}>
      <div className="achievements-container">
        {/* Left Image Section */}
        <div className="achievements-image-wrapper">
          <img
            src="https://i.pinimg.com/736x/7d/08/63/7d086325224560fe68dc4f3850a68f98.jpg"
            alt="Team collaboration"
            className="main-image"
          />
          <img
            src="https://i.pinimg.com/736x/d0/86/c8/d086c8996e029b8cafe10dfa78a66ae9.jpg"
            alt="Graphs and data"
            className="highlight-image"
          />
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
                  enableScrollSpy
                  scrollSpyDelay={0}
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
                  enableScrollSpy
                  scrollSpyDelay={0}
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
                  enableScrollSpy
                  scrollSpyDelay={0}
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
                  enableScrollSpy
                  scrollSpyDelay={0}
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
