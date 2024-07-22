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
            <section id="hero" className="mt-10 lg:mt-0 lg:max-w-screen-xl lg:mx-auto overflow-x-hidden">
                <div className="container">
                    <div className="w-full lg:flex items-center md:px-8 lg:px-24">
                        <div className={`self-center w-full px-4 lg:w-1/2 transition-transform duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <h1 className="font-semibold text-4xl text-[#141C24] md:text-5xl">
                                Everything you need to scale a
                                <span className='relative inline-block'>
                                    <span className='relative z-10 bottom-0 lg:left-3'> global team</span>
                                    <span className="absolute rounded -bottom-1.5 lg:left-2 lg:-right-3 -left-1 -right-1 h-1.5 bg-[#1A75FF] z-0"></span>
                                </span>
                            </h1>
                            <p className="font-normal mt-4 text-[#344051] md:text-xl lg:text-base">
                                Check out our proven methods, guides, and exercises that help make work better, and people happier.
                            </p>
                            <div className="mt-8 flex gap-4 flex-col md:flex-row md:mt-10">
                                <button className="bg-[#1A75FF] md:w-fit w-full text-white px-8 py-2 text-base rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF]">
                                    Learn More
                                </button>
                                <button className="bg-transparent md:w-fit w-full text-center flex flex-row items-center text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-2 text-base rounded-lg border-2 border-[#344051] transition-colors duration-300 ease-in-out hover:bg-[#344051] hover:text-white group">
                                    <svg width="23px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-[#344051] group-hover:text-white mr-0.5 mt-[1px]">
                                        <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" />
                                    </svg>
                                    Watch Demo
                                </button>
                            </div>
                            <p className="font-normal mt-6 text-[#344051]">
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