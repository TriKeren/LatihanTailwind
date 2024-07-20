import Custumes from "../components/saaSComponent/Custumes";
import Data from "../components/saaSComponent/Data";
import Extension from "../components/saaSComponent/Extension";
import Hero from "../components/saaSComponent/Hero";
import Management from "../components/saaSComponent/Management";
import Navbar from "../components/saaSComponent/Navbar";
import Plan from "../components/saaSComponent/Plan";
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
        </>
      );
}
 
export default SaaS;