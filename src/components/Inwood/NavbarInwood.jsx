// src/components/NavbarInwood.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarInwood = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="../../public/assets/Inwood/inwood-logo.svg" alt="Logo" className="h-20 w-20 mr-2" />
          <h1 className="text-2xl font-bold"></h1>
        </div>
        <nav className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
          <a href="#home" className="font-bold font-family-playfair-display text-green-700 hover:text-green-900">Home</a>
          <a href="#products" className="font-family-playfair-display text-green-700 hover:text-green-900">Products</a>
          <a href="#categories" className="font-family-playfair-display text-green-700 hover:text-green-900">Categories</a>
          <a href="#about" className="font-family-playfair-display text-green-700 hover:text-green-900">About</a>
          <a href="#contact" className="font-family-playfair-display text-green-700 hover:text-green-900">Contact Us</a>
        </nav>
        <div className="flex space-x-10 justify-between">
          <button className="text-green-700 hover:text-green-900">
          <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
          </button>
          <button className="text-green-700 hover:text-green-900">
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
          </button>
          <button className="text-green-700 hover:text-green-900">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-700 hover:text-green-900 lg:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </button>
        </div>
      </div>
      {isOpen && (
        <nav className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900">Home</a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900">Products</a>
            <a href="#categories" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900">Categories</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900">Contact Us</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavbarInwood;