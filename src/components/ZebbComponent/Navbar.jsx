import { useEffect, useState, useRef } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const navbarRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !navbarRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolled(currentScrollPos > 50);
            setNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        if (navbarRef.current) {
            navbarRef.current.style.transform = navbarVisible ? 'translateY(0)' : 'translateY(-100%)';
            navbarRef.current.style.transition = 'transform 0.3s ease-in-out';
        }
    }, [navbarVisible]);

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
                .font-merriweather {
                    font-family: 'Merriweather', sans-serif;
                }
                `}
            </style>
            <div
                ref={navbarRef}
                className={`lg:max-w-screen-xl mx-auto bg-white top-0 left-0 w-full flex sticky items-center z-18 py-2 shadow-xl z-50 transition-all duration-300 ${isScrolled ? `bg-white backdrop-blur-md` : `bg-white`}`}
            >
                <div className="w-full font-merriweather">
                    <div className="flex items-center justify-between relative w-full lg:px-10">
                        <div className="px-4 flex items-center gap-3">
                            <img src="/public/assets/ZebbDigitalAgency/Logo.svg" alt="Zebb Logo" />
                            <p className="font-semibold text-2xl text-[#FF5678]">Zebb</p>
                        </div>
                        <div className="flex items-center px-4">
                            <button id="hamburger" name="hamburger" type="button" onClick={toggleMenu} className="block absolute right-4 lg:hidden">
                                <div className="relative w-[30px] h-[23px]">
                                    <span className={`absolute left-0 h-[2px] w-full bg-[#FF5678] transition-transform duration-300 ${isMenuOpen ? `rotate-45 top-1/2 transform -translate-y-1/2` : `top-2`}`}></span>
                                    <span className={`absolute left-0 h-[2px] w-full bg-[#FF5678] transition-transform duration-300 ${isMenuOpen ? `-rotate-45 top-1/2 transform -translate-y-1/2` : `top-4`}`}></span>
                                </div>
                            </button>

                            {/* Desktop menu */}
                            <ul className="hidden lg:flex space-x-4 xl:space-x-12 items-center">
                                <li><a href="" className="group text-[#020E35] font-medium" onClick={closeMenu}>Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FF5678]"></span></a></li>
                                <li><a href="" className="group text-[#020E35] font-medium" onClick={closeMenu}>About<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FF5678]"></span></a></li>
                                <li><a href="" className="group text-[#020E35] font-medium" onClick={closeMenu}>Service<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FF5678]"></span></a></li>
                                <li><a href="" className="group text-[#020E35] font-medium" onClick={closeMenu}>Our Work<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#FF5678]"></span></a></li>
                                <li><button className="p-3 px-5 bg-[#020E35] text-white font-medium">Contact us</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div ref={menuRef} className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white absolute top-[58px] right-0 w-full z-10 rounded-lg shadow-sm shadow-black`}>
                    <ul className="flex flex-col items-start py-4 px-4">
                        <li className="py-2"><a href="" className="text-[#020E35] font-medium" onClick={closeMenu}>Home</a></li>
                        <li className="py-2"><a href="" className="text-[#020E35] font-medium" onClick={closeMenu}>About</a></li>
                        <li className="py-2"><a href="" className="text-[#020E35] font-medium" onClick={closeMenu}>Service</a></li>
                        <li className="py-2"><a href="" className="text-[#020E35] font-medium" onClick={closeMenu}>Our Work</a></li>
                        <button className="p-2 w-full bg-[#020E35] text-white rounded-md mt-2 font-medium">Contact us</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
