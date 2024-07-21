import React, { useState } from "react";

const WorkList = ({ number, title, desc }) => {
  const [toggle, setToggle] = useState(null);

  const handleToggle = (number) => {
    setToggle(toggle === number ? null : number);
  };

  return (
    <div
      className={`w-full h-auto items-center justify-center flex-col border p-[25px] md:p-[30px] lg:p-[50px] rounded-[50px] mt-6 transition-colors duration-300 ${
        toggle === number ? 'bg-[#B9FF66] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="w-full items-center flex gap-5">
        <span className="text-[38px] lg:text-[48px] font-semibold">{number}</span>
        <h1 className="text-[24px] lg:text-[28px] font-light text-grotesk">{title}</h1>
        <div className="ml-auto">
          <button
            className={`w-[42px] h-[42px] rounded-full border-2 text-[28px] flex items-center justify-center hover:bg-[#B9FF66] duration-150 hover:scale-125 origin-center ${
              number === toggle ? 'bg-[#B9FF66] -rotate-45' : 'bg-white -rotate-0'
            }`}
            onClick={() => handleToggle(number)}
          >
            <i className="ri-add-fill"></i>
          </button>
        </div>
      </div>
      <div
        className={`${
          number === toggle ? 'block' : 'hidden'
        } duration-150 leading-6 text-[18px] border-t-2 mt-5`}
      >
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default WorkList;
