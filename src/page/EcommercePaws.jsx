import AboutusPaws from "../components/ecommercepaws/AboutusPaws"
import BlogPaws from "../components/ecommercepaws/BlogPaws"
import ContactUs from "../components/ecommercepaws/ContactUs"
import FooterPaws from "../components/ecommercepaws/FooterPaws"
import HeroPaws from "../components/ecommercepaws/HeroPaws"
import NavbarPaws from "../components/ecommercepaws/NavbarPaws"
import Ourteam from "../components/ecommercepaws/Ourteam"
import ServicesPaws from "../components/ecommercepaws/ServicesPaws"
import ShopPaws from "../components/ecommercepaws/ShopPaws"

const EcommercePaws = () => {
    return (
        <div>
            <NavbarPaws />
            <HeroPaws />
            <ShopPaws />
            <ServicesPaws />
            <AboutusPaws />
            <Ourteam />
            <BlogPaws />
            <ContactUs />
            <FooterPaws />
        </div>
    )
}

export default EcommercePaws