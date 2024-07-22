import React, { useState } from 'react';

const testimonials = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote: "This company transformed our online presence and increased our revenue significantly. Their strategic approach and dedication are unmatched.",
    name: "Alice Johnson",
    title: "Marketing Director at ABC Corp",
  },
  {
    quote: "The team's expertise in digital marketing and their ability to deliver measurable results have been a game-changer for our business.",
    name: "David Wilson",
    title: "CEO of XYZ Ltd",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mt-[30px] px-4 md:px-24 py-2 lg:mt-[30px] lg:max-w-screen-xl mx-auto">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5">
        <h1 className="lg:text-[40px] text-[36px] bg-[#B9FF66] px-4 text-kanit">Testimonials</h1>
        <p className="text-xl mt-[30px] lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className="mt-[30px] flex items-center justify-center h-auto lg:h-[625px] bg-gray-900 text-white rounded-[20px]">
        <div className="w-full max-w-5xl px-4">
          <div className="flex justify-between items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="text-2xl p-2 bg-gray-800 rounded-full hover:bg-gray-700 border border-green-500"
            >
              &larr;
            </button>
            <div className="bg-gray-800 p-8 rounded-xl relative flex-1 border border-green-500">
              <p className="text-lg mb-4">{testimonials[currentIndex].quote}</p>
              <p className="font-bold text-green-500">{testimonials[currentIndex].name}</p>
              <p>{testimonials[currentIndex].title}</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex space-x-1">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-500'}`}
                  ></span>
                ))}
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="text-2xl p-2 bg-gray-800 rounded-full hover:bg-gray-700 border border-green-500"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
