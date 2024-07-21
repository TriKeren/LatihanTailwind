import Case from "../components/PositivusComponents/Case";
import Contact from "../components/PositivusComponents/Contact";
import Footer from "../components/PositivusComponents/Footer";
import Hero from "../components/PositivusComponents/Hero";
import NavBar from "../components/PositivusComponents/NavBar";
import Partner from "../components/PositivusComponents/Partner";
import Proposal from "../components/PositivusComponents/Proposal";
import ServiceList from "../components/PositivusComponents/ServiceList";
import Team from "../components/PositivusComponents/Team";
import Testimoni from "../components/PositivusComponents/Testimoni";
import WorkProcess from "../components/PositivusComponents/WorkProcess";

const Positivus = () => {
    return ( 
        <>
        <NavBar />
        <Hero />
        <Partner />
        <ServiceList />
        <Proposal />
        <Case />
        <WorkProcess />
        <Team/>
        <Testimoni />
        <Contact />
        <Footer />
        </>
     );
}
 
export default Positivus;