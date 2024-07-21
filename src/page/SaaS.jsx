import Client from "../components/saaSComponent/Client";
import Custumes from "../components/saaSComponent/Custumes";
import Data from "../components/saaSComponent/Data";
import Extension from "../components/saaSComponent/Extension";
import FavApp from "../components/saaSComponent/FavApp";
import Footer from "../components/saaSComponent/Footer";
import Hero from "../components/saaSComponent/Hero";
import Management from "../components/saaSComponent/Management";
import Navbar from "../components/saaSComponent/Navbar";
import Plan from "../components/saaSComponent/Plan";
import Sponsor from "../components/saaSComponent/Sponsor";
import Trial from "../components/saaSComponent/Trial";
import Work from "../components/saaSComponent/Work";
import Your from "../components/saaSComponent/Your";

const SaaS = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <Management />
        <Work />
        <Extension />
        <Custumes />
        <Plan />
        <Your />
        <Data />
        <Sponsor />
        <FavApp />
        <Client />
        <Trial />
        <Footer />
        </>
      );
}
 
export default SaaS;