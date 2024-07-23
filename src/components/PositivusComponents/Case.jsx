import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Case = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      icon: "/public/assets/positivus/arrow.svg",
      btnLabel: "learn more",
    },
    {
      title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      icon: "/public/assets/positivus/arrow.svg",
      btnLabel: "learn more",
    },
    {
      title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      icon: "/public/assets/positivus/arrow.svg",
      btnLabel: "learn more",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>
      <div className="font-space-grotesk px-4 md:px-24 py-2 lg:mt-[30px] lg:max-w-screen-xl mx-auto" id="Case">
        <header className="flex w-full lg:flex-row flex-col items-center gap-5">
          <h1 className="lg:text-[40px] text-[36px] bg-[#B9FF66] rounded-[7px] px-4">
            Case Studies
          </h1>
          <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </header>

        <div className="relative mt-10 bg-[#191A23] rounded-[30px] overflow-hidden" {...handlers}>
          <div className="flex flex-row transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {caseStudies.map((items, index) => (
              <div key={index} className="flex-shrink-0 w-full lg:w-1/3 px-10 py-6">
                <div className="text-white cursor-pointer flex items-center">
                  <h1 className="font-light w-[70%] leading-6">{items.title}</h1>
                  <div className="lg:h-48 lg:border-r-2 border-white ml-4"></div>
                </div>
                <div className="flex gap-5 items-center mt-8 hover:scale-110 duration-150">
                  <a href="#" className="text-[#B9FF66] font-light">{items.btnLabel}</a>
                  <img src={items.icon} alt={items.btnLabel} />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            style={{ transform: 'translateX(-50%)' }}
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            style={{ transform: 'translateX(50%)' }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default Case;
