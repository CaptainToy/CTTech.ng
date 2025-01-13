import Footer from '../component/Footer/footer'
import Navbar from '../component/navbar/navbar'
import ServicesSkill from '../component/Services/services'
import Ourservices from '../component/ourServices/services'
import CTA from '../component/CTA/CTA'
import Industries from '../component/CWS/industry'
import './home.css'
import Hero from '../component/hero/hero'
import UI from '../component/UI/UI'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb'
const Services =()=>{
        const breadcrumbs = [
          { label: "Home", path: "/" },
          { label: "Services", path: "/Services" },
        ];
    return(
       <>
            <Navbar/>
            <div className="con"><Breadcrumb pageName="Services" breadcrumbs={breadcrumbs} /></div>
            <UI/>
           {/* <Industries/> */}
            {/* <Ourservices/> */}
            <Footer/>
       </>
    )
}
export default Services