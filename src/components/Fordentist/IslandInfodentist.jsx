import React from "react";

const IslanInfodentist = () => {
  const section3 = [
    {
      icon: "/assets/Fordentist/location.svg",
      label: "Dirección",
      details: ["Av. Coler 1560", "Cordoba, Cordoba Capital"],
    },
    {
      icon: "/assets/Fordentist/email.svg",
      label: "Email",
      details: ["Info@tudentista.com.ar", "Info@tudentista.com.ar"],
    },
    {
      icon: "/assets/Fordentist/telefon.svg",
      label: "Telefonos",
      details: ["351 7608XXX", "3541 7825XXX"],
    },
  ];

  return (
    <div className="flex justify-center items-center py-4 sm:py-8 bg-white sm:bg-blue-200 border">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 sm:p-4">
        {section3.map((val, index) => (
          <div
            key={index}
            className="flex sm:flex-row items-center sm:items-start justify-between px-3 sm:space-x-4 py-2 text-center sm:text-left"
          >
            <div className="flex-shrink-0 sm:mb-0 mr-4">
              <img
                src={val.icon}
                alt={val.label}
                className="h-12 w-12 text-blue-500"
              />
            </div>
            <h3 className="text-xl text-start font-semibold text-gray-800 w-full">
              {val.label}
            </h3>
            <div className="text-start text-gray-500 ">
              <p className="w-[166px]">{val.details[0]}</p>
              <p className="w-[166px]">{val.details[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslanInfodentist;
