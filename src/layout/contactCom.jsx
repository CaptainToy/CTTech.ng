import Navbar from "../component/navbar/navbar"
import Contact from "../component/contact/contact"
import Breadcrumb from "../component/Breadcrumb/Breadcrumb"
import Footer from "../component/Footer/footer";
const ContactCom = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
      ];
    return (
        <>
            <Navbar/>
            <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs}   /></div>
        <Contact/>
        <Footer/>
        </>
       
    )
}
export default ContactCom