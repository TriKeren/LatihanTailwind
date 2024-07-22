import React from "react";

const AboutUsdentist = () => {
  return (
    <div className="relative w-full py-20 mt-0 lg:mt-0 shadow-sm bg-white flex">
      <div className="max-w-4xl mx-auto p-6">
        <div className="md:flex md:items-center">
          <div className="md:flex-shrink-0 ">
            <img
              className="object-cover lg:h-[500px] w-full"
              src="../../../public/assets/Fordentist/bgaboutus.png"
              alt="Dra. Patricia Nieves Kiriaco"
            />
          </div>
          <div className="mt-4 ml-1 w-full text-start py-2">
            <div className="text-xs text-cyan-400 font-semibold">Sobre Mi</div>
            <div className="px-0">
              <h1 className="font-bold text-blue-800 text-3xl">
                Dra. Patricia Nieves Kiriaco
              </h1>
              <ul className="mt-2 text-black list-disc px-2- pl-4 space-y-1 text-sm">
                <li>
                  Médica Cirujano, graduada en la Universidad Nacional de
                  Córdoba, Argentina.
                </li>
                <li>
                  Odontóloga, graduada en la Universidad de París, Francia.
                </li>
                <li>
                  Docente de la Universidad Nacional de Córdoba desde el año
                  1975.
                </li>
                <li>
                  Miembro de las siguientes Academias:
                  <ul className="list-disc pl-5">
                    <li>
                      A.L.A.O.: Academia Latinoamericana de Oseointegración.
                    </li>
                    <li>
                      A.I.I.O: Academia Internacional de Implantes y
                      Oseointegración. Miembro Fundador.
                    </li>
                    <li>
                      A.V.O.I.O: Academia Venezolana de Oseointegración e
                      Implantología Oral. Miembro Honorario.
                    </li>
                    <li>
                      Pierre Fauchard Academy: Academia de Honor de Odontología
                      de E.E.U.U.
                    </li>
                    <li>
                      A.I.I.P: Academia Internacional de Implantología y
                      Periodoncia – Barcelona. Presidente Internacional.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsdentist;
