import Navbar from "../components/CorporateComponent/Navbar";
import Hero from "../components/CorporateComponent/Hero";
import Features from "../components/CorporateComponent/Features";
import Cta from "../components/CorporateComponent/Cta";
import Faq from "../components/CorporateComponent/Faq";
import Blog from "../components/CorporateComponent/Blog";
import NewsLetter from "../components/CorporateComponent/NewsLetter";
import Client from "../components/CorporateComponent/Client";
import Footer from "../components/CorporateComponent/Footer";

const Corporate = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <Cta/>
        <Faq/>
        <Blog/>
        <NewsLetter/>
        <Client/>
        <Footer/>
        </>
     );
}
 
export default Corporate;