const Herodentist = () => {
  return (
    <>
      <div className=" bg-white w-full py-10 mt-0 lg:mt-0 shadow-sm">
        <div className="max-w-screen-xl flex flex-col lg:flex-row ">
          <div className="w-full flex justify-center lg:order-2 mb-5 mt-4 lg:mb-0 lg:w-1/2 relative">
            <img
              src="../../../public/assets/Fordentist/hero1.png"
              alt="Dentist"
              className="w-full lg:w-auto h-auto max-w-lg object-contain"
            />
            <img
              src="../../../public/assets/Fordentist/Hero.png"
              alt="Dentist"
              className="w-4/5 lg:w-auto h-auto max-w-lg absolute "
            />
          </div>
          <div className="text-black w-full lg:w-1/2 lg:order-1 px-5">
            <p className="text-lg lg:text-xl text-blue-500 mb-5">
              En Cordoba Capital
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-800 mb-3">
              Una excelente experiencia
            </h1>
            <p className="text-3xl lg:text-5xl font-bold text-cyan-400 mb-3">
              Odontología
            </p>
            <p className="text-sm lg:text-xl mb-6 font-source">
              Lorem ipsum dolor sit amet consectetur adipiscing elit molestie,
              rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient
              quam purus magna pretium luctus.
            </p>
            <div className="flex justify-between">
              <button className="px-7 py-4 text-sm text-white bg-cyan-400 font-semibold rounded-lg drop-shadow-[4px_4px_0px_rgba(41,119,213,1)]">
                Saca Tu Turno
              </button>
              <button className="p-4 text-sm text-gray-500 bg-white font-semibold rounded-lg border border-gray-700">
                Nuestro Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herodentist;
