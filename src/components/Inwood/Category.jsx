import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Bedroom', image: '../../public/assets/Inwood/bedroom.jpg' },
  { name: 'Dinning Room', image: '../../public/assets/Inwood/dinningroom.jpg' },
  { name: 'Meeting Room', image: '../../public/assets/Inwood/meetingroom.jpg' },
  { name: 'Workspace', image: '../../public/assets/Inwood/workspace.jpg' },
  { name: 'Living Room', image: '../../public/assets/Inwood/livingroom.jpg' },
  { name: 'Kitchen', image: '../../public/assets/Inwood/kitchen.jpg' },
];

const Category = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Explore by Category</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-2 right-3 text-gray-500"
              />
            </div>
            <ul className="flex-grow space-y-4">
              {categories.map((category, index) => (
                <li key={index} className="font-medium text-green-700 hover:text-green-900 cursor-pointer">
                  {category.name}
                </li>
              ))}
            </ul>
            <button className="flex items-center justify-between px-4 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800">
              All Categories
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="lg:w-3/4 lg:pl-16 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200 h-48 rounded-lg shadow-sm flex items-center justify-center"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
                  />
                  <h3 className="text-2xl font-bold text-white relative">{category.name}</h3>
                  <button className="px-4 py-2 bg-white text-green-700 font-medium rounded shadow hover:bg-gray-100 absolute bottom-4">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
