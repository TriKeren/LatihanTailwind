import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return ( 
        <div className="bg-white absolute top-0 left-0 w-full flex items-center z-18 mt-3 shadow-xl">
            <div className="w-full">
                <div className="flex items-center justify-between relative w-full">
                    <div className="px-4">
                        <img src="/public/assets/ZebbDigitalAgency/Logo.svg" alt="" />
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" onClick={toogleMenu} className="block absolute right-4">
                            
                            <div className="relative w-[30px] h-[23px]">
                            <span className={`absolute left-0 h-[2px] w-full bg-black transition-transform duration-300  ${isMenuOpen ? `rotate-45 top-1/2 transform -translate-y-1/2` : `top-0`}`}></span>
                            <span className={`absolute left-0 h-[2px] w-full bg-black transition-opacity duration-300  ${isMenuOpen ? `opacity-0` : `top-1/2 transform -translate-y-1/2`}`}></span>
                            <span className={`absolute left-0 h-[2px] w-full bg-black transition-transform duration-300  ${isMenuOpen ? `-rotate-45 top-1/2 transform -translate-y-1/2` : `bottom-0`}`}></span>
                            </div>

                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className={`${isMenuOpen ? `block` : `hidden`} bg-white absolute top-[42px] right-0 w-20 z-10 px-24 rounded-lg shadow-sm shadow-black`}>
                <ul className="flex flex-col items-center py-4">
                    <li className="py-2"><a href="" className="text-black" onClick={close}>Home</a></li>    
                    <li className="py-2"><a href="" className="text-black" onClick={close}>About</a></li>    
                    <li className="py-2"><a href="" className="text-black" onClick={close}>Service</a></li>    
                    <li className="py-2"><a href="" className="text-black" onClick={close}>Our Work</a></li>    
                </ul>             
            </div>
        </div>
     );
};
 
export default Navbar;