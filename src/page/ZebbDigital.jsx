import AboutZebb from "../components/ZebbComponent/AboutZebb";
import ContactZebb from "../components/ZebbComponent/ContactZebb";
import Enjoy from "../components/ZebbComponent/Enjoy";
import ExperienceZebb from "../components/ZebbComponent/ExperienceZebb";
import FooterZebb from "../components/ZebbComponent/FooterZebb";
import HeroZebb from "../components/ZebbComponent/HeroZebb";
import JoinZebb from "../components/ZebbComponent/JoinZebb";
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
        <JoinZebb/>
        <FooterZebb/>
        </>
     );
}
 
export default ZebbDigital;