import { useNavigate } from "react-router-dom";

const Navbardentist = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white">
      <div className="relative flex h-10 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="../../../public/assets/Fordentist/vectorgigi.svg"
            alt="Vektorgigi"
          />
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="rounded-md px-2 py-2 text-lg font-bold hover:text-black text-center"
            >
              Odontologia Integral
            </a>
            <span className="text-xs text-center">Salud & Estetica Dental</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center space-x-5">
          <a href="#" className="rounded-md px-2 py-2 text-xs hover:text-black">
            Inicio
          </a>
          <a href="#" className="rounded-md px-2 py-2 text-xs hover:text-black">
            Servicios
          </a>
          <a href="#" className="rounded-md px-2 py-2 text-xs hover:text-black">
            Nosotros
          </a>
          <a href="#" className="rounded-md px-2 py-2 text-xs hover:text-black">
            Contacto
          </a>
        </div>
        <div>
          <button
            href="#"
            className="rounded-md px-2 py-2 text-xs hover:text-black border border-black"
          >
            Saca tu turno
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbardentist;
