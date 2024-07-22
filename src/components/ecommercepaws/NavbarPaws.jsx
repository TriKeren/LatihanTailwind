import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarPaws = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-opacity-30 bg-black" : "bg-transparent"} ${isOpen ? "backdrop-blur-none bg-transparent" : ""}`}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-5">
          <div className="flex items-center gap-2 min-w-fit mr-10">
            <img
              src="../../../public/assets/ecommercePaws/vectorkaki.svg"
              alt="iconkaki"
              width={30}
              height={30}
            />
            <a href="#" className="text-white text-xl font-bold">
              Paws n'Play
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex w-full items-center justify-between">
            <div className="flex gap-5">
              <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-1">
                Shop <img src="../../../public/assets/ecommercePaws/chevronDown.svg" alt="ikonDropdownShop" className="w-5 h-5"></img>
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-1">
                Services <img src="../../../public/assets/ecommercePaws/chevronDown.svg" alt="ikonDropdownService" className="w-5 h-5"></img>
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
            <button className="px-5 py-2 text-black bg-white font-semibold rounded-full">
              Get Started
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden my-4 px-2">
            <Link to="/" className="block text-gray-300 hover:text-white mb-2">
              Shop
            </Link>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">
              Service
            </a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">
              About Us
            </a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">
              Blog
            </a>
            <a href="#" className="block text-gray-300 hover:text-white mb-2">
              Contact
            </a>
            <button className="px-5 py-2 text-black bg-white font-semibold rounded-full ">
              Get Started
            </button>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur z-30"></div>
      )}
    </>
  );
};

export default NavbarPaws;
