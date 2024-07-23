import React from "react";

const ServicesPaws = () => {
  return (
    <div className="bg-white relative h-screen mt-10 px-5 w-screen-lg">
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
            Services
          </a>
        </div>
        <div className="w-full border border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row h-fit">
      <div className="grid grid-cols-2 gap-2 w-full lg:grow">
        <div className="w-full relative h-[200px] flex items-center justify-center rounded-lg overflow-hidden lg:h-[300px]">
          <img
            src="../../../public/assets/ecommercePaws/services1.png"
            alt="grooming"
            className="object-cover h-[100%] w-[100%] absolute"
          />
          <span className="absolute z-10 text-white font-semibold text-2xl lg:text-5xl">
            Grooming
          </span>
        </div>
        <div className="w-full relative h-[200px] flex items-center justify-center rounded-lg overflow-hidden lg:h-[300px]">
          <img
            src="../../../public/assets/ecommercePaws/services2.png"
            alt="boarding"
            className="object-cover h-[100%] w-[100%] absolute"
          />
          <span className="absolute z-10 text-white font-semibold text-2xl lg:text-5xl">
            Boarding
          </span>
        </div>
        <div className="w-full relative h-[200px] flex items-center justify-center rounded-lg overflow-hidden lg:h-[300px]">
          <img
            src="../../../public/assets/ecommercePaws/services3.png"
            alt="veterinary"
            className="object-cover h-[100%] w-[100%] absolute"
          />
          <span className="absolute z-10 text-white font-semibold text-2xl lg:text-5xl">
            Veterinary
          </span>
        </div>
        <div className="w-full relative h-[200px] flex items-center justify-center rounded-lg overflow-hidden lg:h-[300px]">
          <img
            src="../../../public/assets/ecommercePaws/services4.png"
            alt="training"
            className="object-cover h-[100%] w-[100%] absolute"
          />
          <span className="absolute z-10 text-white font-semibold text-2xl lg:text-5xl">
            Training
          </span>
        </div>
      </div>
      <div className="w-full relative h-[200px] flex items-center justify-center rounded-lg overflow-hidden lg:h-auto lg:w-[600px] lg:grow-0">
        <img
          src="../../../public/assets/ecommercePaws/services5.png"
          alt="adoption"
          className="object-contain h-[100%] w-[100%] absolute lg:object-cover"
        />
        <span className="absolute z-10 text-white font-semibold text-2xl lg:text-5xl">
          Adoption
        </span>
      </div>
    </div>
    </div>
  );
};

export default ServicesPaws;
