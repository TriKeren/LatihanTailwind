import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [animationState, setAnimationState] = useState({
    opacity: 0,
    transform: 'translateY(20px)',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState({
        opacity: 1,
        transform: 'translateY(0)',
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const animationStyles = {
    opacity: animationState.opacity,
    transform: animationState.transform,
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

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
      <section className="font-space-grotesk px-4 md:px-24 lg:max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div
            className="mt-1 order-2 md:order-1 md:w-1/2 px-0 lg:px-5 flex flex-col"
            style={animationStyles}
          >
            <h1
              className="text-[39px] md:text-[60px] font-bold mb-4 md:mb-[35px] w-full md:w-[531px] h-auto md:h-[231px]"
              style={animationStyles}
            >
              Navigating the digital landscape for success
            </h1>
            <img
              src="/public/assets/positivus/hero.png"
              alt="Hero Image"
              className="w-full md:hidden mb-6"
              style={animationStyles}
            />
            <p
              className="text-[19px] mt-1 md:mt-5 mb-6 md:mb-[35px]"
              style={animationStyles}
            >
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <div
              className="flex flex-col md:flex-row gap-2 lg:gap-3 mt-[40px]"
              style={animationStyles}
            >
              <button className="py-3 px-6 bg-[#191A23] text-white font-bold rounded-lg hover:bg-[#B9FF66] transition duration-300">
                Book a consultation
              </button>
            </div>
          </div>
          <div
            className="order-1 md:order-2 md:w-1/2 mt-6 md:mt-12 flex justify-center md:mb-12"
            style={animationStyles}
          >
            <img
              src="/public/assets/positivus/hero.png"
              alt="Hero Image"
              className="hidden md:block w-full md:max-w-lg md:ml-24 md:mt-[20px]"
              style={animationStyles}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
