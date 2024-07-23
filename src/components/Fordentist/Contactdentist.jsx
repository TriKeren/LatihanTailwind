import React from "react";

const Contactdentist = () => {
  return (
    <>
      <div className="bg-white relative lg:h-screen w-screen-lg bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="flex gap-2 relative w-full md:w-auto flex-col mb-6 "></div>
        <div className="flex gap-6 lg:max-w-full">
          <div className="flex flex-col px-5 gap-4 w-full items-end pb-8">
            <h2 className="text-cyan-400 lg:text-4xl font-source">
              Saca un turno
            </h2>
            <p className="text-blue-800 font-bold text-4xl drop-shadow-[5px_5px_0px_rgba(212,228,244,1)]">
              Contacto
            </p>
          </div>
        </div>
        <form className="p-8 bg-gradient-to-br text-white from-[rgba(37,37,37,0.21)] to-[rgba(68,198,233,0.35)] w-full max-w-md">
          <h1 className="text-2xl mb-6">
            Ponete en contacto para coordinar un turno
          </h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 font-source border-b border-white bg-transparent placeholder-white outline-none"
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
            className="w-full py-3 bg-white text-black  rounded-lg"
          >
            Enviar
          </button>
        </form>

        <div>
          <div className="lg:text-right flex flex-col px-12 py-5 gap-10 bg-gradient-to-b from-blue-50 to-blue-400 ">
            <div className="flex gap-3 border-b-2 border-white pb-10 ">
              <div className="lg:justify-normal">
                <img
                  src="/assets/Fordentist/chat.svg"
                  alt="Email Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className=" lg:text-left flex flex-col gap-6 ">
                <h2 className="text-black font-light text-[20px]">
                  Escribinos al Mail
                </h2>
                <p className="text-gray-600 font-raleway text-[13px]">
                  info@tudentista.com.ar
                </p>
              </div>
            </div>

            <div className="flex gap-3 border-b-2 border-white pb-10 ">
              <div className="lg:justify-normal">
                <img
                  src="/assets/Fordentist/whatshapp.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="lg:text-left flex flex-col gap-6">
                <h2 className="text-black font-light text-[20px">
                  Chatea con Nosotros
                </h2>
                <p className="text-gray-600">+54 35176085XX</p>
              </div>
            </div>

            <div className="flex gap-3 border-b-2 border-white pb-10 ">
              <div className="lg:justify-normal">
                <img
                  src="/assets/Fordentist/telefon1.svg"
                  alt="Phone Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="lg:text-left flex flex-col gap-6">
                <h2 className="text-black font-light text-[20px]">Llamanos</h2>
                <p className="text-gray-600 font-raleway text-[13px]">
                  0810 888 90XX
                </p>
              </div>
            </div>

            <div className="flex gap-3 pb-10 ">
              <div className=" lg:justify-normal">
                <img
                  src="/assets/Fordentist/location1.svg"
                  alt="Location Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="lg:text-left flex flex-col gap-6">
                <h2 className="text-black font-light text-[20px]">Visitanos</h2>
                <p className="text-gray-600">Av. Color 1338, Barrio Alberdi</p>
                <p className="text-gray-600">Lunes a Viernes 8 a 18</p>
              </div>
            </div>

            <div className="flex gap-10 justify-center">
              <img
                src="../../../public/assets/Fordentist/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
              />
              <img
                src="../../../public/assets/Fordentist/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
              <img
                src="../../../public/assets/Fordentist/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactdentist;
