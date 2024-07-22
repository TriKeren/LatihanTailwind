import { useState, useEffect } from "react";

const Navbar = () => {
    const [view, setView] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleMenu = () => {
        setView(!view);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    const handleItemClick = (index, sectionId) => {
        setActiveIndex(index);

        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        window.history.pushState(null, '', window.location.pathname);
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
                            <div
                                id="nav-menu"
                                className={`mt-4 lg:mt-0 absolute py-5 inset-x-0 bg-white shadow-lg rounded-lg px-4 w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:flex ${view ? 'block' : 'hidden'}`}
                            >
                                <ul className="block lg:flex">
                                    <li className="group relative">
                                        <a
                                            href="#"
                                            className={`text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary transition-all duration-500 ease-in-out ${activeIndex === 0 ? 'text-blue-500' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleItemClick(0, 'top'); }}
                                        >
                                            <div className={`transition-all duration-500 ease-in-out ${activeIndex === 0 ? 'transform scale-110' : ''}`}>Home</div>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#1A75FF]"></span>
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#"
                                            className={`text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary transition-all duration-500 ease-in-out ${activeIndex === 1 ? 'text-blue-500' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleItemClick(1, 'features'); }}
                                        >
                                            <div className={`transition-all duration-500 ease-in-out ${activeIndex === 1 ? 'transform scale-110' : ''}`}>Features</div>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#1A75FF]"></span>
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#"
                                            className={`text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary transition-all duration-500 ease-in-out ${activeIndex === 2 ? 'text-blue-500' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleItemClick(2, 'faq'); }}
                                        >
                                            <div className={`transition-all duration-500 ease-in-out ${activeIndex === 2 ? 'transform scale-110' : ''}`}>About us</div>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#1A75FF]"></span>
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#"
                                            className={`text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary transition-all duration-500 ease-in-out ${activeIndex === 3 ? 'text-blue-500' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleItemClick(3, 'blog'); }}
                                        >
                                            <div className={`transition-all duration-500 ease-in-out ${activeIndex === 3 ? 'transform scale-110' : ''}`}>News</div>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#1A75FF]"></span>
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#"
                                            className={`text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary transition-all duration-500 ease-in-out ${activeIndex === 4 ? 'text-blue-500' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleItemClick(4, 'newsLetter'); }}
                                        >
                                            <div className={`transition-all duration-500 ease-in-out ${activeIndex === 4 ? 'transform scale-110' : ''}`}>Contact</div>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#1A75FF]"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-4 py-2 mr-14 lg:mr-0 text-sm rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF]">
                                Start now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;