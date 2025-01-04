import Hero from "../component/AboutHero/hero";
import Navbar from "../component/navbar/navbar";
import AboutUS from '../component/AboutUS/about'; 
import OurStory from "../component/about/about";
import BusinessSolutionsTab from '../component/BusinessSolutionsTab/BusinessSolutionsTab'
import Achievement from '../component/Achievements/Achievements'
import Footer from '../component/Footer/footer'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurStory/>
      <AboutUS />
      <BusinessSolutionsTab/>
      <Achievement/>
      <Footer/>
    </>
  );
};

export default About;
