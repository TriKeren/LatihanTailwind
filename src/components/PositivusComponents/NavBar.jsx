import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>
      <nav className={`font-space-grotesk px-4 md:px-24 lg:max-w-screen-xl mx-auto ${isSticky ? 'sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md' : ''}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/public/assets/positivus/logo.svg" alt="Logo" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-4 gap-10 font-semibold">
            <a href="#about" className="hover:text-[#191A23]">About Us</a>
            <a href="#service" className="hover:text-[#191A23]">Service</a>
            <a href="#price" className="hover:text-[#191A23]">Use Cases</a>
            <a href="#price" className="hover:text-[#191A23]">Pricing</a>
            <a href="#price" className="hover:text-[#191A23]">Blog</a>
            <button className="border border-gray-500 hover:bg-[#191A23] hover:text-white px-4 py-2 rounded-[14px]">Request a quote</button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About Us</a>
            <a href="#service" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Service</a>
            <a href="#price" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Use Cases</a>
            <a href="#price" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Pricing</a>
            <a href="#price" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Blog</a>
            <button className="block w-full text-left bg-[#191A23] hover:bg-[#101116] text-white px-4 py-2 rounded mt-2">Request a quote</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
