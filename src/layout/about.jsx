import Hero from "../component/AboutHero/hero";
import Navbar from "../component/navbar/navbar";
import AboutUS from "../component/AboutUS/about";
import OurStory from "../component/about/about";
import BusinessSolutionsTab from "../component/BusinessSolutionsTab/BusinessSolutionsTab";
import Achievement from "../component/Achievements/Achievements";
import Footer from "../component/Footer/footer";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";

const About = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      <Navbar />
      <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs} /></div>
      {/* <Hero /> */}
      <OurStory />
      <AboutUS />
      <BusinessSolutionsTab />
      <Achievement />
      <Footer />
    </>
  );
};

export default About;
