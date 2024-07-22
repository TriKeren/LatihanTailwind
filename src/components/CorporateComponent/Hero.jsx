import { useState, useEffect } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            const { top, bottom } = heroSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="hero" className="mt-10 lg:mt-0 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full lg:flex items-center lg:px-24">
                        <div className={`self-center w-full px-4 lg:w-1/2 transition-transform duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <h1 className="font-semibold text-4xl text-[#141C24] md:text-5xl lg:text-4xl">
                                Everything you need to scale a <span className="underline underline-offset-[10px] decoration-[#1A75FF]">global team</span>
                            </h1>
                            <p className="font-normal mt-4 text-[#344051] md:text-xl lg:text-base">
                                Check out our proven methods, guides, and exercises that help make work better, and people happier.
                            </p>
                            <div className="mt-8 flex gap-4 flex-col md:flex-row md:mt-14">
                                <button className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-8 py-3 text-base rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF]">
                                    Learn More
                                </button>
                                <button className="bg-transparent md:w-fit w-full text-center flex flex-row items-center text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-3 text-base rounded-lg border-2 border-[#344051] transition-colors duration-300 ease-in-out hover:bg-[#344051] hover:text-white">
                                    <img className="text-[#344051] mr-1 mt-1" src="/public/assets/corporate/play.svg" width={20} alt="" /> Watch Demo
                                </button>
                            </div>
                            <p className="font-normal mt-5 text-[#344051]">
                                Trusted by over than 1M customers
                            </p>
                            <div className="flex mt-2 gap-1">
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                            </div>
                        </div>
                        <div className="self-end flex justify-center w-full px-4 mt-12 md:mt-16 lg:mt-10 lg:w-1/2">
                            <img className="w-[100%] lg:w-[90%] md:w-[70%]" src="/public/assets/corporate/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;