import React, { useRef } from 'react';

const products = [
  {
    name: 'Armchair',
    description: 'Light single chair',
    price: '$145',
    image: '../../public/assets/Inwood/sofa1.png',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Premium Sofa',
    description: 'Comfortable premium sofa',
    price: '$145',
    image: '../../public/assets/Inwood/sofa2.png',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Minimal Sofa',
    description: 'Sleek minimal design sofa',
    price: '$145',
    image: '../../public/assets/Inwood/sofa3.png',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Dining Chair',
    description: 'Elegant dining chair',
    price: '$145',
    image: '../../public/assets/Inwood/sofa4.png',
    bgColor: 'bg-yellow-100'
  }
];

const ProdukInwood = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Popular Products</h2>

        <div className="relative">
          <button 
            onClick={scrollLeft} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-800 focus:outline-none"
          >
            &#9664;
          </button>
          <div 
            className="overflow-x-auto whitespace-nowrap scroll-smooth" 
            ref={scrollRef}
          >
            <div className="flex space-x-4 pb-4">
              {products.map((product, index) => (
                <div key={index} className={`flex-shrink-0 w-80 h-96 p-4 ${product.bgColor} rounded-lg shadow-md`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <img src={product.image} alt={product.name} className="h-40 max-w-40 object-cover mb-4 rounded" />
                    <h3 className="text-xl font-semibold text-green-900">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-green-700 font-bold mt-4">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={scrollRight} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-800 focus:outline-none"
          >
            &#9654;
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800">
            Explore all items
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProdukInwood;
