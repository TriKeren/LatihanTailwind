import NavbarInwood from "../components/Inwood/NavbarInwood";
import HeroInwood from "../components/Inwood/HeroInwood";
import Category from "../components/Inwood/Category";
import ProdukInwood from "../components/Inwood/ProdukInwood";
import CartInwood from "../components/Inwood/CartInwood";
import OurCreation from "../components/Inwood/OurCreation";
import Benefits from "../components/Inwood/Benefits";
import Testimonials from "../components/Inwood/Testimonials";
import FooterInwood from "../components/Inwood/FooterInwood";

const Inwood = () => {
    return ( 
        <div className="text-center">
            <NavbarInwood/>
            <HeroInwood/>
            <Category/>
            <ProdukInwood/>
            <CartInwood/>
            <OurCreation/>
            <Benefits/>
            <Testimonials/>
            <FooterInwood/>

        </div>
     );
}
 
export default Inwood;