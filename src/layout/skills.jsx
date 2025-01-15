import Workdone from '../component/ourWork/workdone';
import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';
import './home.css';
import Footer from '../component/Footer/footer';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb'; 
import Img1 from "../assets/4.jpg"; 
import Text from '../component/text/text';


const About = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
  ];

  return (
    <>
      <Navbar />
      <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs}  backgroundImage={Img1}/></div>
      <div className="consts">
        <Text content="Hear from our happy clients!" info="Our happy Clients"/>
        <Workdone />
      </div>
      {/* <Button/> */}
      <Footer />
    </>
  );
};

export default About;
