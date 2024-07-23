import { useEffect, useRef, useState } from 'react';

const Trial = () => {
    const [isVisible, setIsVisible] = useState([false, false, false, false, false]);
    const elementRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index, 10);
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    } else {
                        setIsVisible((prev) => {
                            const newState = [...prev];
                            newState[index] = false;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
    }, []);

    const animationStyles = (isVisible, index) => {
        const baseStyle = {
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        };
        switch (index) {
            case 0:
                return { ...baseStyle, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' };
            case 1:
                return { ...baseStyle, transform: isVisible ? 'translateY(0)' : 'translateY(-10px)' };
            case 2:
                return { ...baseStyle, transform: isVisible ? 'translateX(0)' : 'translateX(-10px)' };
            case 3:
                return { ...baseStyle, transform: isVisible ? 'translateX(0)' : 'translateX(10px)' };
            case 4:
                return { ...baseStyle, transform: isVisible ? 'scale(1)' : 'scale(0.9)' };
            default:
                return baseStyle;
        }
    };

    return (
        <div className="bg-[#043873] py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1
                    className="text-[36px] md:text-6xl md:mb-14 font-bold lg:text-center text-white mb-8 lg:mb-10"
                    ref={(el) => (elementRefs.current[0] = el)}
                    data-index={0}
                    style={animationStyles(isVisible[0], 0)}
                >
                    Try Whitepace today
                </h1>
                <p
                    className="text-[18px] w-[58%] md:text-2xl lg:text-lg lg:px-20 lg:text-center text-white md:mb-7 lg:mb-10"
                    ref={(el) => (elementRefs.current[1] = el)}
                    data-index={1}
                    style={animationStyles(isVisible[1], 1)}
                >
                    Get started for free. Add your whole team as your needs grow.
                </p>
                <div
                    className="flex lg:justify-center mb-5 md:mb-7 lg:mb-10"
                    ref={(el) => (elementRefs.current[2] = el)}
                    data-index={2}
                    style={animationStyles(isVisible[2], 2)}
                >
                    <button className="px-[40px] flex items-center text-[18px] lg:px-4 lg:py-2 py-[20px] mb-7 font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Try taskey free
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                    </button>
                </div>
                <p
                    className="text-[18px] md:text-2xl lg:text-lg lg:px-20 lg:text-center text-white mb-7 lg:mb-10"
                    ref={(el) => (elementRefs.current[3] = el)}
                    data-index={3}
                    style={animationStyles(isVisible[3], 3)}
                >
                    On a big team? Contact sales
                </p>
                <div
                    className="w-full flex flex-wrap lg:justify-center lg:items-center"
                    ref={(el) => (elementRefs.current[4] = el)}
                    data-index={4}
                    style={animationStyles(isVisible[4], 4)}
                >
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="">
                            <img src="public/assets/saaS-landingpages/trial1.svg" className="w-[35px] h-[36px] md:w-28 lg:w-20 mx-auto" alt="Apple" />
                        </div>
                    </div>
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="px-10">
                            <img src="public/assets/saaS-landingpages/trial2.svg" className="w-[35px] h-[36px] md:w-28 lg:w-20 mx-auto" alt="Microsoft" />
                        </div>
                    </div>
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="">
                            <img src="public/assets/saaS-landingpages/trial3.svg" className="w-[35px] h-[36px] md:w-28 lg:w-20 mx-auto" alt="Slack" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trial;
