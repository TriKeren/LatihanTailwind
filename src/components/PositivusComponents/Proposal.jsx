import React from 'react';

const Proposal = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>
      <div className="font-space-grotesk px-4 md:px-24 py-2 lg:mt-3 lg:max-w-screen-xl mx-auto">
        <div className="w-full gap-5 items-center mt-10 md:justify-center flex bg-[#F3F3F3] p-[30px] rounded-[30px] flex-col md:flex-row">
          <div className="flex flex-col justify-center gap-2 text-center md:text-left">
            <h1 className="text-[32px] font-semibold">Let’s make things happen</h1>
            <p className="w-full lg:max-w-[] text-[18px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <div className="mt-5 flex justify-center md:justify-start">
              <button className="w-[290px] h-[68px] lg:w-[288px] lg:h-[68px] text-white bg-black rounded-lg px-3 py-5 hover:bg-green hover:text-dark duration-150 ease">
                Get your free proposal
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/public/assets/positivus/hero2.png" alt="banner" className="w-[494px] h-[394px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposal;
