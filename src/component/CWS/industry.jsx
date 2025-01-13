import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./industry.css";
// img
import healthcare from '../../assets/img/healthCare/healthcare.jpeg'; 
import Education from '../../assets/img/edu.jpeg'
import finance from '../../assets/img/fin.jpeg'
import realestate from '../../assets/img/mogage.jpeg'
import morgage from '../../assets/img/What Is the Mortgage Accelerator Program_.jpeg'
import retail from '../../assets/img/retail.jpeg'
import canabis from '../../assets/img/canabis.jpeg'
import Travel from '../../assets/img/transpo.jpeg'
// icon 
import bell from '../../assets/img/healthCare/bell.png';
import morgage21 from '../../assets/img/mogage.jpeg' 
import Educationna from '../../assets/img/mortarboard.png' 
import Travels from '../../assets/img/airplane.png' 
import Finance from '../../assets/img/dollar.png' 
import Real_Estate from '../../assets/img/house.png' 
import Cannabis from '../../assets/img/nature.png' 
import Retail from '../../assets/img/shopping-cart.png' 

const industries = [
  { name: "Healthcare", icon: bell, img: healthcare },
  { name: "Education", icon: Educationna, img: Education },
  { name: "Travel", icon: Travels, img: Travel },
  { name: "Finance", icon: Finance, img: finance },
  { name: "Real Estate", icon: Real_Estate, img: realestate },
  { name: "Mortgage", icon: morgage21, img: morgage },
  { name: "Retail", icon: Retail, img:  retail},
  { name: "Cannabis", icon: Cannabis, img: canabis },
];

const Industries = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-up animation for cards
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Header animation
    gsap.fromTo(
      sectionRef.current.querySelector(".section-header"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="industries-section" ref={sectionRef}>
      <div className="content">
        <div className="section-header">
          <div className="about-company-title">
            <div className="line-short"></div>
            <div className="line-long"></div>
          </div>
          <p className="focus-sectors">FOCUS SECTORS</p>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description">
            CTTech serves a wide array of industries, utilizing our expertise to deliver tailored solutions that tackle the unique challenges within each sector.
          </p>
        </div>
      </div>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="industry-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div
              className="industry-img"
              style={{ backgroundImage: `url(${industry.img})` }}
            >
              <div className="icon-overlay">
                <span><img src={industry.icon} alt="" /></span><br />
                <h6 className="industry-name">{industry.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
