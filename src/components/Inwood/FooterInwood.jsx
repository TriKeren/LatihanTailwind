import React from 'react';

const FooterInwood = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto mb-5 mt-10 px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/2 p-8 bg-gray-300 h-80 mb-6 lg:mb-0"></div>
          <div className="w-full lg:w-1/2 p-8 bg-green-100 h-80">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-4">Receive exclusive deals, discounts and many offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-between items-center text-green-800 gap-0">
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <div className="flex items-center mb-4">
              <img src="/assets/Inwood/inwood-logo.svg" alt="Inwood Logo" className="w-28 h-8 mr-2" />
              <span className="text-green-700 font-bold"></span>
            </div>
            <div className="flex gap-8 items-start justify-start">
              <img
                src="../../../public/assets/Inwood/fb-icons.svg"
                alt="iconFacebook"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/Inwood/ig-icons.svg"
                alt="iconInstagram"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/Inwood/linkdn-icons.svg"
                alt="iconLinkIdn"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/Inwood/dribble-icons.svg"
                alt="iconDribble"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/Inwood/twitter-icons.svg"
                alt="iconTwitter"
                width={20}
                height={20}
              />
            </div>
            <p className="mt-4 mb-2 font-bold">Address</p>
            <p className="text-sm">+123 654 987</p>
            <p className="text-sm">877 The Bronx, NY 14568, USA</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="font-bold mb-2">My Account</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:underline">Sign in</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Register</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Order status</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:underline">Shipping</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Returns</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Sizing</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="font-bold mb-2">Shop</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:underline">All Products</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Bedroom</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Dining Room</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="font-bold mb-2">Legal Stuff</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy & Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterInwood;
