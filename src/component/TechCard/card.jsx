import "./card.css";
import React, { useEffect, useRef } from "react";
import Back from '../../assets/img/backend.png';
import Figma from '../../assets/img/figma.png';
import Front from '../../assets/img/front-end-programming.png';
import SEO from '../../assets/img/search-engine.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const cardref = useRef([]);

  const services = [
    {
      icon: <i className="bi bi-phone"></i>,
      title: "Mobile App",
      description: "From pure native to cross-platform, we’ll help you select the best choice for your app.",
      link: "/mobile-app", // Add the link for each service
    },
    {
      icon: Front,
      title: "Web Dev",
      description: "We offer custom web development solutions for startup companies and larger enterprises.",
      link: "/web-dev",
    },
    {
      icon: Back,
      title: "Backend",
      description: "We build scalable back-end solutions for mobile, web, and desktop systems, adaptable on-premises or in the cloud to meet your evolving needs.",
      link: "/backend",
    },
    {
      icon: Figma,
      title: "UI/UX",
      description: "We bring expertise in all stages of design, from research to polished prototypes.",
      link: "/ui-ux",
    },
    {
      icon: SEO,
      title: "SEO",
      description: "Quisque neque mus id dapibus egestas platea sagittis fames nunc.",
      link: "/seo",
    },
  ];

  useEffect(() => {
    cardref.current.forEach((el, index) => {
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
    <div className="services-section">
      {services.map((service, index) => (
        <a
          href={service.link} // Add the link to each card
          className="service-card"
          key={index}
          ref={(el) => (cardref.current[index] = el)}
        >
          <div className="icon">
            {typeof service.icon === "string" && service.icon.endsWith(".png") ? (
              <img src={service.icon} alt={service.title} />
            ) : (
              service.icon
            )}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Card;
