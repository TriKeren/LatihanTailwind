import React from "react";

const Fasilitydentist = () => {
  return (
    <div className="bg-white relative lg:h-screen mt-10 px-5 w-screen-lg">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-blue-300 font-medium text-xl lg:text-4xl">
          Las Instalaciones
        </h2>
        <p className="text-blue-800 font-bold text-4xl drop-shadow-[5px_5px_0px_rgba(212,228,244,1)]">
          Nuestra Clinica
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          <div className="relative w-full h-[404px] flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="../../../public/assets/Fordentist/bgfasility1.png"
              alt="Fasilitas1"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 my-8">
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="block w-4 h-4 bg-gray-600 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Fasilitydentist;
