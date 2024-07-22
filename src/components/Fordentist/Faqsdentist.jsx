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
  ];

  return (
    <div className=" flex flex-col items-center bg-gradient-to-b from-white to-blue-100 p-4">
      <div className="text-center mt-10">
        <h2 className="text-blue-500">Sacate las dudas</h2>
        <h1 className="text-3xl font-bold text-blue-900 mt-2">
          Preguntas Frecuentes
        </h1>
      </div>
      <div className="mt-10 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex justify-between items-center bg-white text-left p-4 rounded-lg shadow-md focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
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
                <p>
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
