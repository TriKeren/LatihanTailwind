import React from 'react';

const testimonials = [
  {
    quote: "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.",
    name: "Leona Paul",
    title: "CEO of Floatcom",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-green-700 mb-4 text-center">Testimonials</h2>
        <p className="text-center text-gray-600 mb-8">Over 15,000 happy customers.</p>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md relative">
          <div className="absolute left-0 top-0 -ml-16 -mt-16 text-blue-100 hidden lg:block" style={{ fontSize: '8rem', zIndex: -1 }}>
            &ldquo;
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-48 h-48 lg:w-80 lg:h-80 bg-gray-300 rounded-lg flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
            <img className="mb-5 -mt-9" src="public/assets/Inwood/quote.svg" alt="Quote" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-700 text-lg italic">{testimonials[0].quote}</p>
              <p className="text-green-900 font-semibold mt-4">{testimonials[0].name}</p>
              <p className="text-gray-500">{testimonials[0].title}</p>
              <hr className="border-[#07484A] group-hover:border-white mb-5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
