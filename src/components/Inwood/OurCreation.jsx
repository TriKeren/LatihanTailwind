import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    name: 'Product 1',
    description: 'Description 1',
    price: '$100',
    // image: '../../public/assets/Inwood/.png',
  },
  {
    name: 'Product 2',
    description: 'Description 2',
    price: '$200',
    // image: '../../public/assets/Inwood/.png',
  },
  {
    name: 'Product 3',
    description: 'Description 3',
    price: '$200',
    // image: '../../public/assets/Inwood/.png',
  },
  // Tambahkan produk lain di sini
];

const OurCreation = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-100 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="bg-[#70908B] text-white p-8 rounded-lg flex-shrink-0 w-full lg:w-80 h-96">
            <h2 className="text-4xl font-bold font-serif mb-4">Our Own Creation</h2>
            <p className="text-lg mb-4">Designed in our studio</p>
            <div className="flex items-center">
              <a href="#" className="text-white underline mr-4">More</a>
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-300 rounded-full mr-2"></span>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <button 
              onClick={scrollLeft} 
              className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-800 focus:outline-none z-10"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div 
              className="overflow-x-auto whitespace-nowrap scroll-smooth" 
              ref={scrollRef}
            >
              <div className="flex space-x-4 pb-4">
                {products.map((product, index) => (
                  <div key={index} className="flex-shrink-0 w-72 h-80 lg:w-80 lg:h-96 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-center">
                      <img src={product.image} alt={product.name} className="h-40 max-w-40 object-cover mb-4 rounded" />
                      <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                      <p className="text-gray-600 mt-2">{product.description}</p>
                      <p className="text-green-700 font-bold mt-4">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={scrollRight} 
              className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-800 focus:outline-none z-10"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCreation;
