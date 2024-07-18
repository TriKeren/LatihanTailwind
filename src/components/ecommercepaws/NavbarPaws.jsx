import { Link } from "react-router-dom";

const NavbarPaws = () => {
    return (
        <div>
            <div className="w-full flex flex-col gap-16">
            <div className="w-full max-w-screen-xl mx-auto flex justify-between py-5 bg-yellow-400">
            <a href="#" className="text-black text-xl font-bold">Paws n'Play</a>
                <div className="inline-flex justify-between gap-5">
                    <Link to='/' className="text-black-300 hover:text-white">Shop</Link>
                    <a href="" className="text-black-300 hover:text-white">Service</a>
                    <a href="" className="text-black-300 hover:text-white">About Us</a>
                    <a href="" className="text-black-300 hover:text-white">Contact</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NavbarPaws;