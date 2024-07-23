// src/components/Faqsdentist.jsx
import React, { useState } from "react";

const Faqsdentist = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "¿Que Obras sociales aceptan?",
    "¿Que Obras sociales aceptan?",
    "¿Que Obras sociales aceptan?",
    "¿Que Obras sociales aceptan?",
    "¿Que Obras sociales aceptan?",
    "¿Que Obras sociales aceptan?",
  ];

  return (
    <div className=" flex flex-col items-center bg-gradient-to-b from-white to-blue-50 p-4">
      <div className="text-center mt-10">
        <h2 className="text-cyan-400">Sacate las dudas</h2>
        <h1 className="text-3xl font-bold text-blue-800 mt-2 drop-shadow-[5px_5px_0px_rgba(212,228,244,1)]">
          Preguntas Frecuentes
        </h1>
      </div>
      <div className="mt-10 w-full max-w-2xl text-blue-950 drop-shadow-[6px_6px_0px_rgba(212,228,244,1)]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex justify-between items-center bg-white text-left p-4 rounded-lg shadow-md focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq}</span>
              <svg
                className={`w-6 h-6 transform transition-transform  ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none "
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-2 bg-white p-4 rounded-lg shadow-md">
                <p className="text-[13px] font-source">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  conubia, massa facilisi lectus ullamcorper ridiculus potenti
                  iaculis nibh, interdum faucibus ad diam vivamus vehicula
                  fames. Convallis ornare praesent mollis at habitasse morbi eu
                  ridiculus, tristique proin venenatis dictum nisl volutpat
                  interdum, eleifend velit erat mi penatibus nibh curabitur.
                  Vestibulum augue condimentum luctus auctor nullam imperdiet
                  magna, mattis scelerisque erat odio aliquam risus nam morbi,
                  accumsan dapibus montes facilisis suspendisse rhoncus.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqsdentist;
