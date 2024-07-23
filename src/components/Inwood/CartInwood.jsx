import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartInwood = () => {
  return (
    <section className="bg-gray-100">
    <h2 className="text-4xl font-bold font-serif text-center mb-4 text-green-600">Special Package</h2>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="flex flex-wrap -mx-4">
        {/* Card Larkin Wood Full Set yang lebih besar */}
        <div className="w-full md:w-full xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Larkin Wood Full Set</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <p className="text-gray-600 text-sm ml-2">4.5/5</p>
              </div>
              <p className="text-lg font-bold mb-4">$729.99</p>
            </div>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-auto">
              <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-6" />
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-full md:w-full xl:w-2/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h2 className="text-1xl font-bold mb-4 text-green-600">Description</h2>
            <p className="text-gray-600 mb-4">
              Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to
              your outdoor space, this cast Aluminum Chaise Lounge combines the
              appearance, function and quality all together, offering you with the best
              experience.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              See More
            </a>
            <div className="flex flex-wrap -mx-4 mt-4">
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4 h-full">
                  <h3 className="text-lg font-bold mb-2">Living Room Family Set</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <p className="text-gray-600 text-sm ml-2">4.5/5</p>
                  </div>
                  <p className="text-lg font-bold mb-4">$229.99</p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat elit et nunc faucibus, ac commodo nulla facilisis.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    See Details
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4 h-full">
                  <h3 className="text-lg font-bold mb-2">Living Room Special Set</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <p className="text-gray-600 text-sm ml-2">4.5/5</p>
                  </div>
                  <p className="text-lg font-bold mb-4">$329.99</p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    See More
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4 h-full">
                  <h3 className="text-lg font-bold mb-2">Living Room Special Set</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <p className="text-gray-600 text-sm ml-2">4.5/5</p>
                  </div>
                  <p className="text-lg font-bold mb-4">$587.99</p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CartInwood;
