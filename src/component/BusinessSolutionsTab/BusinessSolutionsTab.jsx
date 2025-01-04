import React, { useState } from 'react';
import './BusinessSolutionTab.css';
import sellImage from '../../assets/img/web.png';
import uiuxImage from '../../assets/img/App.svg'; 
import growImage from '../../assets/img/UI.svg';

const BusinessSolutionsTab = () => {
  const [activeTab, setActiveTab] = useState('Web');

  // Tab content mapping
  const tabContent = {
    Web: {
      title: "Web Development",
      description: "Increase your orders by reaching more customers through an online marketplace and a network of couriers. At CTTech, with over 8 years of industry experience and a commitment to excellence, we specialize in crafting dynamic and functional web solutions tailored to your unique business needs. Our skilled web architects leverage cutting-edge technologies and best-fit strategies to deliver secure and seamless web solutions, including PWAs, e-commerce platforms, and dynamic web applications, optimized for all devices.",
      links: [
        { text: "Web Application Development Services", href: "#" },
        { text: "Frontend Development Services", href: "#" },
      ],
    },
    Mobile: {
      title: "Mobile Development",
      description: "Creating value-adding, engaging UIs, our comprehensive mobile app development lets you take over the mobile world with feature-rich, high-end hybrid mobile apps for iOS and Android. Our mobile app developers for hire integrate IoT, AI, Cloud, AR/VR, and more, to design distinct mobile apps that will increase your user engagement and client loyalty.",
      links: [
        { text: "Android App Development Services", href: "#" },
        { text: "React Native App Development Services", href: "#" },
        { text: "iOS App Development Services", href: "#" },
      ],
    },
    "UI/UX": {
      title: "UI/UX Design",
      description: "Our UI/UX is a perfect blend of tech trends & creativity that empowers your business image. We combine specific user behavior & preferences to create highly intuitive customer journeys for our clients, meeting their individual needs. So you can have interactive UIs, immersive front-ends, easy-to-navigate dashboards, and more that escalate your UX to the next level.",
      links: [
        { text: "User Interface (UI) Design", href: "#" },
        { text: "Responsive Web App Design", href: "#" },
        { text: "Ecommerce Website Design", href: "#" },
        { text: "Software-as-a-Service UI Design", href: "#" },
      ],
    },
  };

  // Tab images mapping
  const tabImages = {
    Web: sellImage,
    Mobile: uiuxImage,
    "UI/UX": growImage,
  };

  const renderContent = () => {
    const { title, description, links } = tabContent[activeTab] || {};
    return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {links?.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <i className="bi bi-check-square"></i> {link.text}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="business-container">
      <div className="business-tabs">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`business-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            aria-selected={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content-wrapper">
        <div className="business-content">{renderContent()}</div>
        <div className="image-area">
          <img
            src={tabImages[activeTab]}
            alt={`${activeTab} - ${tabContent[activeTab]?.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutionsTab;
