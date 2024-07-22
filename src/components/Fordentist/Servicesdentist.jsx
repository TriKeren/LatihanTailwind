import React from "react";

const services = [
  {
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    link: "#",
    icon: "/assets/Fordentist/gigi1.svg",
  },
  {
    title: "Ortodoncia",
    description:
      "La ortodoncia con brackets de cerámica ofrece una estética más cuidada, en comparación a la ortodoncia metálica. Los resultados en cuanto a alineación dentaria son similares a la alternativa mencionada. Opción ideal para quienes buscan cuidar la estética y el bolsillo.",
    link: "#",
    icon: "/assets/Fordentist/gigi2.svg",
  },
  {
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    link: "#",
    icon: "/assets/Fordentist/gigi3.svg",
  },
  {
    title: "Blanqueamiento",
    description:
      "El blanqueamiento dental es un procedimiento estético que ayuda a eliminar manchas y decoloración en los dientes, logrando una sonrisa más brillante y blanca.",
    link: "#",
    icon: "/assets/Fordentist/gigi4.svg",
  },
  {
    title: "Limpieza",
    description:
      "La limpieza dental profesional ayuda a mantener una buena salud bucal, eliminando la placa y el sarro acumulado que no se puede eliminar con el cepillado diario.",
    link: "#",
    icon: "/assets/Fordentist/gigi5.svg",
  },
  {
    title: "Carillas",
    description:
      "Las carillas dentales son láminas delgadas que se adhieren a la superficie frontal de los dientes para mejorar su apariencia. Son ideales para corregir dientes desgastados, desalineados o descoloridos.",
    link: "#",
    icon: "/assets/Fordentist/gigi6.svg",
  },
];

const Servicesdentist = () => {
  return (
    <div
      className="container mx-auto px-4 py-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/Fordentist/bgservicios.png)",
        backgroundSize: "80%",
        backgroundPosition: "right", // Adjust this value to change the position of the background image
      }}
    >
      <h2 className="text-xl text-blue-500 mb-8">Especialidades</h2>
      <h3 className="text-2xl font-semibold text-blue-800 mb-6">
        Nuestros Servicios
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg shadow-blue-300"
          >
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 mb-2"
                />
                <h4 className="text-xl font-medium text-blue-500 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-blue-500 hover:underline"
                >
                  Ver Más &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesdentist;
