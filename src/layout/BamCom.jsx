import Bam from "../component/BookAmeating/BAM"
import Navbar from "../component/navbar/navbar"
import Footer from "../component/Footer/footer"
import "./home.css"
import Breadcrumb from "../component/Breadcrumb/Breadcrumb"

const BamCom =()=>{
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Book a Meeting", path: "/about" },
      ];
    return(
        <>
            <Navbar/>
            <div className="con"><Breadcrumb pageName="About Us" breadcrumbs={breadcrumbs} /></div>
            <div className="constant101"><Bam/></div>
            <Footer/>
        </>
    )
}
export default BamCom