import Breadcrumb from "../component/Breadcrumb/Breadcrumb"
import Navbar from "../component/navbar/navbar"
import UI from '../component/UI/UI'
import UIart from "../component/UI/UIart"
import UIDev from "../component/UI/uidev"
import Footer from "../component/Footer/footer"

const UIComponent =()=>{
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: " Web Application Development Services", path: "/UI" },
      ];
    return(
        <div>
            <Navbar/>
            <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs} /></div>
            <UIart/>
            {/* <UIDev/> */}
            <UI/>
            <Footer/>
      </div>
    )
}
export default UIComponent