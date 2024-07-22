import React from "react";

const Testimonialdentist = () => {
  const reviews = [
    {
      name: "Matias Gomez",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    },
    {
      name: "Maria Paz",
      rating: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    },
    {
      name: "Silvia Rios",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-cyan-400">Testimonios</p>
        <h2 className="text-3xl font-bold text-blue-900">
          Lo que opinan nuestros Pacientes
        </h2>
      </div>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg md:text-xl">Maria Paz</h3>
          <div className="flex">
            <span className="text-cyan-400 text-xl">★</span>
            <span className="text-cyan-400 text-xl">★</span>
            <span className="text-cyan-400 text-xl">★</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa
          facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum
          faucibus ad diam vivamus vehicula fames.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 my-8">
        <span className="block w-3 h-3 bg-blue-800 rounded-full"></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>

      <div className="text-center">
        <button className="border border-blue-800 text-blue-800 py-2 px-6 rounded-lg">
          Ver Mas Reviews
        </button>
      </div>
    </div>
  );
};

export default Testimonialdentist;
