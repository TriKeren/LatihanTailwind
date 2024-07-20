import AboutZebb from "../components/ZebbComponent/AboutZebb";
import ContactZebb from "../components/ZebbComponent/ContactZebb";
import Enjoy from "../components/ZebbComponent/Enjoy";
import ExperienceZebb from "../components/ZebbComponent/ExperienceZebb";
import HeroZebb from "../components/ZebbComponent/HeroZebb";
import Navbar from "../components/ZebbComponent/Navbar";
import TeamZebb from "../components/ZebbComponent/TeamZebb";
import TestimonialZebb from "../components/ZebbComponent/TestimonialZebb";
import WorkZebb from "../components/ZebbComponent/WorkZebb";

const ZebbDigital = () => {
    return ( 
        <>
        <Navbar/>
        <HeroZebb/>
        <AboutZebb/>
        <Enjoy/>
        <ExperienceZebb/>
        <TeamZebb/>
        <WorkZebb/>
        <TestimonialZebb/>
        <ContactZebb/>
        </>
     );
}
 
export default ZebbDigital;