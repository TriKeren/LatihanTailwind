import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src="/public/assets/positivus/logo.svg" alt="Logo" className="h-8" />
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-4 font-semibold">
          <a href="#about" className="hover:text-[#B9FF66]">About Us</a>
          <a href="#service" className="hover:text-[#B9FF66]">Service</a>
          <a href="#price" className="hover:text-[#B9FF66]">Use Cases</a>
          <a href="#price" className="hover:text-[#B9FF66]">Pricing</a>
          <a href="#price" className="hover:text-[#B9FF66]">Blog</a>
          <button className="border border-black hover:bg-[#B9FF66] hover:text-white px-4 py-2 rounded-[14px]">Request a quote</button>
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
          <button className="block w-full text-left bg-[#B9FF66] text-white px-4 py-2 rounded mt-2">Request a quote</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
