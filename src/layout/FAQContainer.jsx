import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';  
import './home.css';
import Footer from '../component/Footer/footer';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Img1 from "../assets/2.jpg"; 


const FAQContainer = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "FAQ", path: "/FAQ" },
  ];
  return (
    <>
      <Navbar />
      <div className="con"><Breadcrumb pageName="FAQ" breadcrumbs={breadcrumbs} backgroundImage={Img1}/></div>
      <div className="con"><FAQ /></div>
      <Footer />
    </>
  );
};

export default FAQContainer;
