// src/components/HeroInwood.jsx
import React from 'react';

const HeroInwood = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/assets/Inwood/hero.jpg)' }}>
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Exclusive Deals of Furniture Collection</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore different categories. Find the best deals.
          </p>
          <a href="#shop" className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-900">
            Shop Now
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
        </div>
      </div>
    </section>
  );
}

export default HeroInwood;