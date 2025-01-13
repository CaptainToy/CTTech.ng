import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';  // Ensure this imports the correct FAQ component
import './home.css';
import Footer from '../component/Footer/footer';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';

const FAQContainer = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "FAQ", path: "/FAQ" },
  ];
  return (
    <>
      <Navbar />
      <div className="con"><Breadcrumb pageName="FAQ" breadcrumbs={breadcrumbs} /></div>
      <div className="con"><FAQ /></div>
      <Footer />
    </>
  );
};

export default FAQContainer;
