import { useState } from "react";

const Navbar = () => {
    const [view, setView] = useState(false);

    const toggleMenu = () => {
        setView(!view);
    }

    return (
        <>
            <header className="bg-transparent top-0 left-0 w-full shadow-md flex items-center z-10 py-4 lg:py-0 lg:px-24 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className={`flex items-center justify-between ${view ? 'relative' : ''}`}>
                        <div className="px-4">
                            <img className="h-6" src="/public/assets/corporate/logo.svg" alt="Logo" />
                        </div>
                        <div className="flex items-center px-4">
                        
                            <button
                                id="hamburger"
                                name="hamburger"
                                type="button"
                                className={`block absolute right-4 px-4 lg:hidden ${view ? 'active' : ''}`}
                                onClick={toggleMenu}
                            >
                                <span className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out ${view ? 'rotate-45' : ''}`} />
                                <span className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out ${view ? 'opacity-0' : ''}`} />
                                <span className={`w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out ${view ? '-rotate-45 absolute left-[25%] top-0' : ''}`} />
                            </button>
                            <nav
                                id="nav-menu"
                                className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] px-4 w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:flex ${view ? 'block' : 'hidden'}`}
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
                            </nav>
                            <button className="bg-[#1A75FF] text-white whitespace-nowrap px-4 py-2 text-sm rounded-lg mr-16">Start Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
