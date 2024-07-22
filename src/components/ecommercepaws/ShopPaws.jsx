import React from "react";
import { Link } from "react-router-dom";

const ShopPaws = () => {
  return (
    <div className="bg-white relative lg:h-screen mt-10 px-5 w-screen-lg">
      <div className="flex gap-2 relative w-full md:w-auto flex-col mb-6">
        <div className="flex gap-4 items-center">
          <img
            src="../../../public/assets/ecommercePaws/Vectorkakiblack.svg"
            alt="iconkaki"
            width={24}
            height={24}
          />
          <a
            href="#"
            className="text-black text-2xl font-semibold border-collapse"
          >
            Shop
          </a>
        </div>
        <div className="w-full border border-gray-300"></div>
      </div>
      <div className="max-w-screen-xl flex justify-between items-center gap-10">
        <h2 className="text-base min-w-fit px-3 font-semibold inline-block lg:text-2xl">
          Featured Product
        </h2>
        <div className="flex py-2 px-3 rounded-full font-semibold bg-gray-100 items-center gap-4">
          <img
            src="../../../public/assets/ecommercePaws/search.svg"
            alt="iconsearch"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full border-none outline-none"
          />
        </div>
      </div>
      <div className="flex justify-between my-5 w-full items-center lg:justify-center lg:gap-4">
        <Link
          to="/"
          className="hover:text-white py-2 px-5 bg-gradient-to-r from-[#101828] to-[#233250] text-white rounded-lg"
        >
          Random
        </Link>
        <Link to="/" className="text-gray-700 font-semibold hover:text-white">
          Cat
        </Link>
        <Link to="/" className="text-gray-700 font-semibold hover:text-white">
          Dogs
        </Link>
        <Link to="/" className="text-gray-700 font-semibold hover:text-white">
          Fish
        </Link>
        <Link to="/" className="text-gray-700 font-semibold hover:text-white">
          Birds
        </Link>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:max-w-full">
      <img
        src="../../../public/assets/ecommercePaws/shop1.png"
        alt="photoShop1"
        className="w-full"
      />
      <img
        src="../../../public/assets/ecommercePaws/shop2.png"
        alt="photoShop2"
        className="w-full"
      />
      <img
        src="../../../public/assets/ecommercePaws/shop3.png"
        alt="photoShop3"
        className="w-full"
      />
      </div>
      <div className="flex justify-end mt-4 font-semibold">
      <Link to="/" className="text-black">
          View More &gt;&gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default ShopPaws;
