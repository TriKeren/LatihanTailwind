import React from "react";

const Contactdentist = () => {
  return (
    <>
      <div className="bg-white relative lg:h-screen mt-10 px-5 w-screen-lg">
        <div className="flex gap-2 relative w-full md:w-auto flex-col mb-6 "></div>
        <div className="flex gap-6 lg:max-w-full">
          <div className="flex flex-col gap-4 w-full items-end pb-8">
            <h2 className="text-blue-300 font-medium text-xl lg:text-4xl">
              Saca un turno
            </h2>
            <p className="text-blue-800 font-bold text-4xl">Contacto</p>
          </div>
        </div>
        <form className="p-8 bg-gradient-to-br text-white from-[rgba(37,37,37,0.21)] to-[rgba(68,198,233,0.35)] rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">
            Ponete en contacto para coordinar un turno
          </h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border-b border-white bg-transparent placeholder-white outline-none"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border-b border-white bg-transparent placeholder-white outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="w-full p-2 border-b border-white bg-transparent placeholder-white outline-none"
              placeholder="Telefono"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-2 border-b border-white bg-transparent placeholder-white outline-none"
              placeholder="Problema"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Contactdentist;
