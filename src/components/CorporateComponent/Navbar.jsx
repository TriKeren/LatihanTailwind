import { useState, useEffect } from "react";

const Navbar = () => {
    const [view, setView] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setView(!view);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`sticky top-0 left-0 w-full z-10 py-4 lg:py-0 lg:px-24 lg:max-w-screen-xl lg:mx-auto transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent shadow-none'}`}>
                <div className="container">
                    <div className={`flex items-center justify-between ${view ? 'relative' : ''}`}>
                        <div className="px-4">
                            <img className="h-6 md:h-8" src="/public/assets/corporate/logo.svg" alt="Logo" />
                        </div>
                        <div className="flex items-center px-4">
                            <button
                                id="hamburger"
                                name="hamburger"
                                type="button"
                                className={`block absolute border border-[#CED2DA] right-4 py-3 px-3 rounded-lg lg:hidden ${view ? 'active' : ''}`}
                                onClick={toggleMenu}
                            >
                                <span
                                    className={`w-[25px] h-[2px] block bg-[#344051] transition-transform duration-300 ease-in-out transform ${view ? 'rotate-45 translate-y-[6.5px]' : 'rotate-0 translate-y-0'}`}
                                />
                                <span
                                    className={`w-[15px] h-[2px] block bg-[#344051] transition-all duration-300 ease-in-out my-1 ${view ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <span
                                    className={`w-[25px] h-[2px] block bg-[#344051] transition-transform duration-300 ease-in-out transform ${view ? '-rotate-45 -translate-y-[5.5px]' : 'rotate-0 translate-y-0'}`}
                                />
                            </button>
                            <di
                                id="nav-menu"
                                className={`mt-4 lg:mt-0 absolute py-5 inset-x-0 bg-white shadow-lg rounded-lg px-4 w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:flex ${view ? 'block' : 'hidden'}`}
                            >
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <a href="/" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">Home</a>
                                    </li>
                                    <li className="group">
                                        <a href="/" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">Features</a>
                                    </li>
                                    <li className="group">
                                        <a href="/" className="text-base text-dark py-2 flex md:mx-4 mx-8 group-hover:text-primary">About us</a>
                                    </li>
                                    <li className="group">
                                        <a href="/" className="text-base text-dark py-2 flex md:mx-4 mx-8 group-hover:text-primary">News</a>
                                    </li>
                                    <li className="group">
                                        <a href="/" className="text-base text-dark py-2 flex md:mx-4 mx-8 group-hover:text-primary">Contact</a>
                                    </li>
                                </ul>
                            </di>
                            <button className="bg-[#1A75FF] text-white whitespace-nowrap px-4 py-2 text-sm rounded-lg mr-16 lg:mr-4">Start Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
