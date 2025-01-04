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
import Industries from "../component/CWS/industry"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <AboutUs/>
      <Services />
      <Industries/>
      <div className="con">
        <Text content="Explore our latest technologies!" />
        <Card />
      </div>
      <Achievements/>
      <div className="stact">
        <Stact />
      </div>
      <div className="con">
        <Text content="Hear from our happy clients!" />
        <Testimonial />
      </div>
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
