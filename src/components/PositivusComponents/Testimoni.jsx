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
    <div className="mt-[30px] px-4 md:px-12 lg:px-24 py-2 lg:mt-[30px] lg:max-w-screen-xl mx-auto">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5">
        <h1 className="lg:text-[40px] text-[36px] bg-[#B9FF66] px-4 text-kanit">Testimonials</h1>
        <p className="text-xl mt-[30px] lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className="mt-[30px] flex items-center justify-center h-auto lg:h-[500px] bg-gray-900 text-white rounded-[20px]">
        <div className="w-full max-w-5xl px-10 flex flex-col">
          <div className="bg-gray-800 mt-5 p-8 rounded-xl relative flex-1 border border-[#B9FF66] quote-container">
            <div className="mb-2">
              <p className="text-[12px] lg:text-xl">{testimonials[currentIndex].quote}</p>
            </div>
          </div>
          <div className="flex flex-col items-start md: mt-6">
            <p className="font-bold text-[#B9FF66]">{testimonials[currentIndex].name}</p>
            <p>{testimonials[currentIndex].title}</p>
          </div>
          <div className="flex justify-between items-center mt-2 mb-5 space-x-2">
            <button
              onClick={prevTestimonial}
              className="text-5xl p-2"
            >
              &larr;
            </button>
            <div className="flex flex-1 justify-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#B9FF66]' : 'bg-gray-500'}`}
                  ></span>
                ))}
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="text-5xl p-2"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .quote-container {
          position: relative;
        }

        .quote-container::after {
          content: '';
          position: absolute;
          bottom: -20px; 
          left: 20px; 
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-top: 20px solid #B9FF66;
          background-color: transparent;
        }

        .quote-container {
          border: 2px solid #B9FF66;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
