import { useNavigate } from "react-router-dom";

const Navbardentist = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-10 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold mr-2">Logo</span>
              <div className="flex flex-col items-center">
                <a
                  href="#"
                  className="rounded-md px-2 py-2 text-lg font-bold hover:text-black text-center"
                  onClick={() => navigate("/halaman-2")}
                >
                  Odontologia Integral
                </a>
                <span className="text-xs text-center">
                  Salud & Estetica Dental
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-center space-x-5">
              <a
                href="#"
                className="rounded-md px-2 py-2 text-xs hover:text-black"
              >
                Inicio
              </a>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-xs hover:text-black"
              >
                Servicios
              </a>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-xs hover:text-black"
              >
                Nosotros
              </a>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-xs hover:text-black"
              >
                Contacto
              </a>
            </div>
            <div>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-xs hover:text-black border border-black"
              >
                Saca Tu Turmo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbardentist;
