import Workdone from '../component/ourWork/workdone';
import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';
import './home.css';
import Footer from '../component/Footer/footer';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb'; // Fixed the import name

const About = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
  ];

  return (
    <>
      <Navbar />
      <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs} /></div>
      <div className="co">
        <Workdone />
      </div>
      <Footer />
    </>
  );
};

export default About;
