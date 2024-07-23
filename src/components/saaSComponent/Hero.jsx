import { useEffect, useState, useRef } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);

    const handleScroll = () => {
        const heroElement = heroRef.current;
        const rect = heroElement.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on component mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animationStyles = (delay) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
    });

    return (
        <div
            ref={heroRef}
            id="hero-section"
            className={`bg-[#043873] bg-[url('public/assets/saaS-landingpages/bg-hero.png')] bg-no-repeat bg-cover py-20 md:py-20 lg:py-32 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="container w-[86%] lg:w-full mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div
                    ref={headingRef}
                    style={animationStyles(0)}
                    className="w-full md:w-full flex flex-col items-start space-y-4 lg:space-x-0"
                >
                    <h1 className="text-[36px] lg:text-[50px] lg:leading-[70px] md:text-6xl font-bold text-white mb-[24px] md:mb-5 lg:mb-7 text-center lg:text-start">
                        Get More Done with whitepace
                    </h1>
                    <p
                        ref={textRef}
                        style={animationStyles(0.2)}
                        className="text-[18px] lg:text-[18px] md:text-lg text-white text-center lg:text-start"
                    >
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                    <div
                        ref={buttonRef}
                        style={animationStyles(0.4)}
                        className="w-full flex justify-center lg:justify-start"
                    >
                        <button className="px-[40px] flex items-center text-[18px] lg:px[20px] lg:py-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Try TasKey Free 
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div
                    ref={imageRef}
                    style={animationStyles(0.3)}
                    className="w-full md:w-full mt-[100px] lg:mt-0 flex justify-center lg:justify-end lg:ml-auto"
                >
                    <img src="public/assets/saaS-landingpages/hero.png" className="w-[95%] md:w-3/4 lg:w-[90%] h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
