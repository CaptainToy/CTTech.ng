import Footer from '../component/Footer/footer'
import Navbar from '../component/navbar/navbar'
import ServicesSkill from '../component/Services/services'
import Ourservices from '../component/ourServices/services'
import CTA from '../component/CTA/CTA'
import Industries from '../component/CWS/industry'
import './home.css'
import Hero from '../component/hero/hero'
const Services =()=>{
    return(
       <>
            <Navbar/>
           <div className='constant101'><Hero/></div>
           <ServicesSkill/>
           <Industries/>
            <Ourservices/>
            {/* <CTA/> */}
            <Footer/>
       </>
    )
}
export default Services