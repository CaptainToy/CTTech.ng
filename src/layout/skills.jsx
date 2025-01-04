import Workdone from '../component/ourWork/workdone'
import Navbar from '../component/navbar/navbar';
import FAQ from '../component/FAQ/FAQ';
import './home.css'
import Footer from '../component/Footer/footer';
const About = () => {
  return (
    <>
      <Navbar/>
     <div className='constant'> <Workdone/></div>
     <FAQ/>
     <Footer/>
    </>
  );
};

export default About;
