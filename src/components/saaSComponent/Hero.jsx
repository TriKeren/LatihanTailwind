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
            className={`bg-[#043873] py-12 md:py-20 lg:py-32 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div
                    ref={headingRef}
                    style={animationStyles(0)}
                    className="w-full md:w-full flex flex-col items-start space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center lg:text-start">
                        Get More Done with whitepace
                    </h1>
                    <p
                        ref={textRef}
                        style={animationStyles(0.2)}
                        className="text-lg text-white text-center lg:text-start"
                    >
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                    <div
                        ref={buttonRef}
                        style={animationStyles(0.4)}
                        className="w-full flex justify-center lg:justify-start"
                    >
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Try TasKey Free
                        </button>
                    </div>
                </div>
                <div
                    ref={imageRef}
                    style={animationStyles(0.3)}
                    className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto"
                >
                    <img src="public/assets/saaS-landingpages/hero.png" className="w-5/6 md:w-3/4 lg:w-2/3 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
