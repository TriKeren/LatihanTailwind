import React, { useState } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <nav className="bg-[#043873] shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl px-4 md:px-0">
        <div className="flex items-center space-x-4 md:space-x-0">
          <img
            src="public/assets/saaS-landingpages/Logo.svg"
            className="h-10 w-auto"
          />
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMobile}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <button className="px-4 py-2 bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492]">
              Login
            </button>
            <button className="px-4 py-2 bg-[#4F9CF9] text-[#FFE492] flex items-center rounded hover:bg-[#FFE492] hover:text-[#043873]">
              Try Whitepace free
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6 font-[DM Sans] text-white font-medium">
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center">
              <a href="" className="hover:text-[#4F9CF9]">
                Product
              </a>{" "}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center">
              <a href="" className="hover:text-[#4F9CF9]">
                Solution
              </a>{" "}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center">
              <a href="" className="hover:text-[#4F9CF9]">
                Resource
              </a>{" "}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center">
              <a href="" className="hover:text-[#4F9CF9]">
                Pricing
              </a>{" "}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </li>
          </ul>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492]">
              Login
            </button>
            <button className="px-4 py-2 bg-[#4F9CF9] text-[#FFE492] flex items-center rounded hover:bg-[#FFE492] hover:text-[#043873]">
              Try Whitepace free
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden px-4">
          <ul className="space-y-2 pt-2 pb-4">
            <li>
              <a href="" className="block text-[#FFE492] hover:text-[#4F9CF9]">
                Product
              </a>
            </li>
            <li>
              <a href="" className="block text-[#FFE492] hover:text-[#4F9CF9]">
                Solution
              </a>
            </li>
            <li>
              <a href="" className="block text-[#FFE492] hover:text-[#4F9CF9]">
                Resource
              </a>
            </li>
            <li>
              <a href="" className="block text-[#FFE492] hover:text-[#4F9CF9]">
                Pricing
              </a>
            </li>
          </ul>
          <div className="space-y-2 pb-4">
            <button className="w-full px-4 py-2 bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492]">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#4F9CF9] text-[#FFE492] flex items-center justify-center rounded hover:bg-[#FFE492] hover:text-[#043873]">
              Try Whitepace free
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
