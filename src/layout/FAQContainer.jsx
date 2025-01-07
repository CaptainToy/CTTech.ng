import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';  // Ensure this imports the correct FAQ component
import './home.css';
import Footer from '../component/Footer/footer';

const FAQContainer = () => {
  return (
    <>
      <Navbar />
      <div className="con"><FAQ /></div>
      <Footer />
    </>
  );
};

export default FAQContainer;
