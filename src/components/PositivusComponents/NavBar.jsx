import React, { useState, useEffect } from 'react';

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
    <nav className={`px-4 md:px-24 py-2 lg:mt-3 ${isSticky ? 'sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md' : ''}`}>
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
            <div className={`flex flex-col justify-between h-4 w-6 transition duration-300 ease-in-out ${isOpen ? 'open' : ''}`}>
              <span className={`block w-full h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
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
  );
};

export default Navbar;
