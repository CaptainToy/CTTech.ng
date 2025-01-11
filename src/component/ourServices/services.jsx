import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef([]);

  const services = [
    {
      id: <i className="bi bi-gear"></i>,
      title: "Business Process Automation",
      description:
        "Enhance your operations and increase efficiency with our Business Process Automation solutions.",
    },
    {
      id: <i className="bi bi-bar-chart"></i>,
      title: "Business Intelligence Solutions",
      description:
        "Leverage data insights to make informed decisions and gain a competitive edge with our Business Intelligence Solutions.",
    },
    {
      id: <i className="bi bi-basket"></i>,
      title: "eCommerce Development",
      description:
        "Boost your online business with our eCommerce Development services, offering seamless shopping experiences",
    },
    {
      id: <i className="bi bi-person-check"></i>,
      title: "Customer Relationship Management",
      description:
        "Improve customer interactions and streamline sales processes with our Customer Relationship Management solutions.",
    },
    {
      id: <i className="bi bi-cloud-upload"></i>,
      title: "Enterprise Content Management",
      description:
        "Streamline, manage, and secure your business-critical content efficiently with our Enterprise Content Management services.",
    },
    {
      id: <i className="bi bi-lightbulb"></i>,
      title: "Legacy App Modernization",
      description:
        "Modernize legacy applications to enhance performance, security, and compatibility, while reducing maintenance costs.",
    },
  ];

  useEffect(() => {
    servicesRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="transformative-container">
      <header className="transformative-header">
        <div className="development-process-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h2 className="subtitle">WHAT WE PROVIDE</h2>
        <h1 className="title">Our Transformative Business Solutions</h1>
        <p className="description">
          CTTech provides customized strategies that boost efficiency, empower
          data-driven decision-making, and elevate customer experiences.
        </p>
      </header>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
          >
            <h3 className="service-id">{service.id}</h3>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
