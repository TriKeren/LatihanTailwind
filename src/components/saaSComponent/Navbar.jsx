import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav
      className={`bg-[#043873] shadow-md py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-500"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl px-4 md:px-8">
        <div className="flex items-center">
          <img
            src="public/assets/saaS-landingpages/Logo.svg"
            className="h-10 w-2/4 md:w-2/3"
          />
        </div>
        <div className="hidden lg:flex space-x-6 items-center gap-10 font-[DM Sans] text-white font-medium">
          <ul className="flex space-x-6 gap-8">
            <li>
              <a href="" className="hover:text-[#4F9CF9]">
                Product
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#4F9CF9]">
                Solution
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#4F9CF9]">
                Resource
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#4F9CF9]">
                Pricing
              </a>
            </li>
          </ul>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492]">
              Login
            </button>
            <button className="px-4 py-2 bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873]">
              Try Whitepace free
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobile}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
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
        </div>
      </div>

      {mobile && (
        <div className="lg:hidden px-4 text-center">
          <ul className="space-y-2 px-2 pt-2 pb-4">
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
          <div className="px-2 space-y-2 pb-4">
            <button className="w-full px-4 py-2 bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492]">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873]">
              Try Whitepace free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
