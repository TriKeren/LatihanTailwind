import { useState } from "react";
import { Link } from "react-router-dom";

const Navbardentist = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-3 px-5">
          <div className="flex items-center gap-2 min-w-fit mr-10">
            <img
              src="../../../public/assets/Fordentist/vectorgigi.svg"
              alt="Vektorgigi"
              className="h-8 w-8"
            />
          </div>
          <div className="flex flex-col text-center items-center lg:text-left">
            <a href="#" className="text-lg   text-center items-center">
            ODONTOLOGIA INTEGRAL
            </a>
            <span className="text-xs">Salud & Estetica Dental</span>
          </div>
          <div className="hidden lg:flex justify-center items-center flex-1">
            <div className="flex gap-5">
              <Link to="/" className="text-black-300 hover:text-black">
                Inicio
              </Link>
              <Link to="/services" className="text-black-300 hover:text-black">
                Servicios
              </Link>
              <Link to="/about" className="text-black-300 hover:text-black">
                Nosotros
              </Link>
              <Link to="/contact" className="text-black-300 hover:text-black">
                Contacto
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <button className="px-5 py-2 text-blue-500 bg-white rounded-full border border-black hover:text-black">
              Saca tu turno
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <img
                src="../../../public/assets/Fordentist/menuNav.svg"
                alt="menuNavbar"
                className="h-8 w-8"
                style={{
                  filter:
                    "invert(33%) sepia(100%) saturate(3600%) hue-rotate(200deg) brightness(80%) contrast(110%)",
                }}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-between px-4 py-5">
            <div className="grid grid-cols-2 gap-5 justify-items-center">
              <img
                src="../../../public/assets/Fordentist/linkedin.png"
                alt="facebook"
                width={30}
                height={30}
              />
              <img
                src="../../../public/assets/Fordentist/gmail.svg"
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
              <img
                src="../../../public/assets/Fordentist/facebook.svg"
                alt="instagram"
                width={30}
                height={30}
              />
              <button className="px-4 py-0 col-span-2 text-gray-500 bg-white font-xs rounded-lg -mt-4 border border-gray-700 ml-2 hover:text-black">
                Saca tu turno
              </button>
            </div>
            <div className="lg:hidden -mt-3 px-1  flex flex-col items-end">
              <Link
                to="/"
                className="flex items-center text-blue-500 hover:text-black mb-6"
              >
                Inicio
              </Link>
              <Link
                to="/services"
                className="flex items-center text-blue-500 hover:text-black mb-6"
              >
                Servicios
              </Link>
              <Link
                to="/about"
                className="flex items-center text-blue-500 hover:text-black mb-6"
              >
                Nosotros
              </Link>
              <Link
                to="/contact"
                className="flex items-center text-blue-500 hover:text-black mb-6"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur z-30"></div>
      )}
    </>
  );
};

export default Navbardentist;
