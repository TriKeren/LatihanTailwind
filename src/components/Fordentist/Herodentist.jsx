const Herodentist = () => {
  return (
    <>
      <div className="relative bg-white w-full py-10 mt-0 lg:mt-0 shadow-sm">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
          <div className="w-full flex justify-center lg:order-2 mb-5 mt-4 lg:mb-0 lg:w-1/2">
            <img
              src="../../../public/assets/Fordentist/fotobg.png"
              alt="Dentist"
              className="w-full lg:w-auto h-auto mt-7 max-w-lg"
            />
          </div>
          <div className="text-black w-full lg:w-1/2 lg:order-1">
            <p className="text-lg lg:text-xl text-blue-500 mb-5">
              En Cordoba Capital
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-800 mb-3">
              Una excelente experiencia
            </h1>
            <p className="text-3xl lg:text-5xl font-bold text-blue-500 mb-3">
              Odontología
            </p>
            <p className="text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit molestie,
              rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient
              quam purus magna pretium luctus.
            </p>
            <div className="flex space-x-2">
              <div className="relative inline-block">
                <button className="px-4 py-4 text-sm text-white bg-blue-500 font-semibold rounded-[20px] shadow-lg">
                  Saca Tu Turno
                </button>
              </div>
              <button className="px-4 py-4 text-sm text-gray-500 bg-white font-semibold rounded-[20px] shadow-lg border border-gray-700">
                Nuestro Servicios
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 shadow-md"></div>
      </div>
    </>
  );
};

export default Herodentist;
