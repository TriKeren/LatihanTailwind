import React from "react";

const Contact = () => {
  return (
    <div className="px-4 md:px-24 py-2 lg:mt-3 lg:max-w-screen-xl mx-auto overflow-x-hidden font-space-grotesk">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          
          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 mr-auto">
        <h1 className="mt-[30px] lg:text-[40px] text-[36px] bg-[#B9FF66] rounded-[7px] px-4">
          Contact-Us
        </h1>
        <p className="mt-[30px] text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </header>

      <div className="flex flex-col mt-10 lg:justify-between lg:flex-row bg-slate-100 md:p-[20px] p-[12px] lg:p-[30px] h-auto relative rounded-[30px]">
        <div className="flex flex-col w-full lg:w-auto lg:mr-auto">
          <div className="flex gap-[30px] w-full text-[24px] max-sm:text-[20px] font-light">
            <div className="flex gap-2">
              <input type="radio" name="option" className="w-[20px]" />
              <label>Say Hi</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="option" className="w-[20px]" />
              <label>Get a Quote</label>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-[10px] mt-3">
              <label className="text-slate-800 font-light">Name*</label>
              <input
                placeholder="Name"
                type="text"
                className="rounded-[14px] pl-5 w-[300px] h-[60px] font-light lg:w-[560px] border border-[#000000]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-slate-800 font-light">Email*</label>
              <input
                placeholder="Email"
                type="email"
                className="rounded-[14px] pl-5 w-[300px] h-[60px] font-light lg:w-[560px] border border-[#000000]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-slate-800 font-light">Message*</label>
              <textarea
                placeholder="Message"
                className="rounded-[14px] max-sm:h-[180px] pl-5 pt-5 lg:h-[220px] font-light lg:w-[560px] border border-[#000000]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-10">
              <button className="text-white bg-[#191A23] py-5 rounded-[10px] font-light hover:bg-black duration-150">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:ml-auto lg:flex-shrink-0">
          <img src="/public/assets/positivus/contact.png" alt="banner" className="w-[600px] object-right object-contain mx-40" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
