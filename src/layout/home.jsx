import React from "react";
import "./home.css";
import Navbar from "../component/navbar/navbar";
import HomeContent from "../component/header/header";
import Services from "../component/ourServices/services";
import Card from "../component/TechCard/card";
import Text from "../component/text/text";
import Testimonial from "../component/Testimonial/Testimonial";
import Footer from "../component/Footer/footer";
import Stact from "../component/stact/stact";
import Contact from "../component/contactUS/contact";
import CTA from "../component/CTA/CTA";
import AboutUs from "../component/AboutUS/about";
import Achievements from "../component/Achievements/Achievements";
import Industries from "../component/CWS/industry";
import GridTemplate from '../component/ourWork/workdone';
import BusinessSolutionsTab from "../component/BusinessSolutionsTab/BusinessSolutionsTab";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <AboutUs />
      <Services />
      <div className="con">
        <Text content="Services we can help you with 🚀" info="WHAT WE CAN DO FOR YOU" />
        <Card />
      </div>
      <Industries />
      <div className="con">
        <Text content="Work that drives client satisfaction and success." info="OUR WORK WELL DONE" />
        <GridTemplate />
        </div>
        <Achievements />
      <div className="stact">
        <Stact />
      </div>
      <div className="con">
        <Text content="Hear from our happy clients!" info="Our happy Clients"/>
        <Testimonial />
      </div>
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
