import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-10 max-sm:px-0 lg:px-[80px] md:px-[40px] px-[30px] lg:max-w-screen-xl mx-auto ">
      <div className="bg-[#191A23] rounded-t-[30px] flex-col max-md:p-[25px] h-full p-[50px]">
        <div className="flex flex-wrap flex-row max-md:flex-col justify-between items-center w-full">
          <div>
            <img src="/public/assets/positivus/l.svg" alt="logo" />
          </div>
          <nav className="flex items-center max-md:w-full max-md:mt-3">
            <ul className="flex flex-col md:flex-row lg:justify-around w-full gap-5 max-md:gap-3 items-center">
              <li>
                <a href="#" className="text-white font-light text-[18px] underline hover:text-green duration-110">
                  About-us
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-light text-[18px] underline hover:text-green duration-110">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-light text-[18px] underline hover:text-green duration-110">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-light text-[18px] underline hover:text-green duration-110">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-light text-[18px] underline hover:text-green duration-110">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:flex hidden gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-[#191A23] rounded-full text-[20px] origin-center hover:-rotate-90 duration-150 cursor-pointer">
              <img src="/public/assets/positivus/i1.svg" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-[#191A23] rounded-full text-[20px] origin-center hover:-rotate-90 duration-150 cursor-pointer">
              <img src="/public/assets/positivus/i2.svg" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-[#191A23] rounded-full text-[20px] origin-center hover:-rotate-90 duration-150 cursor-pointer">
              <img src="/public/assets/positivus/i3.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-10 gap-4">
          <div className="flex flex-col w-full max-sm:items-center">
            <div className="bg-[#B9FF66] w-[180px] rounded-[10px] flex justify-center">
              <h1 className="text-[30px] max-sm:text-[28px] font-grotesk font-bold">
                Contact Us
              </h1>
            </div>
            <div className="text-white font-extralight mt-3">
              <span>Email: info@positivus.com</span>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Startbust State 123456</p>
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <input
              className="bg-transparent font-light py-[20px] px-4 w-full border border-white text-white rounded-[10px]"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-[#B9FF66] text-white mt-3 lg:mt-0 w-full lg:w-full lg:h-[68px] py-[12px] px-4 rounded-[10px] hover:bg-black hover:text-white font-light text-[18px] duration-150">
              Subscribe to News
            </button>
          </div>
        </div>
        <div className="mt-10 flex border-t-2 border-white">
          <div className="text-white font-extralight gap-5 mt-5 flex max-sm:text-[14px]">
            <h4>© 2023 Positivus. All Rights Reserved.</h4>
            <span>
              <a href="#">Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
