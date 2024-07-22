import { useEffect, useRef, useState } from 'react';

const Client = () => {
    const [isVisible, setIsVisible] = useState([false, false, false]);
    const cardRefs = useRef([]);

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

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
    }, []);

    const animationStyles = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    });

    return (
        <div className="bg-white py-12 md:py-16 lg:py-12">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1 className="text-5xl md:text-6xl font-bold text-center text-[#212529] mb-10">What Our Clients Say</h1>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex overflow-x-auto space-x-4 md:space-x-8 w-full md:w-auto">
                        {['Avater1', 'Avater2', 'Avater3'].map((avatar, index) => (
                            <div
                                key={avatar}
                                ref={(el) => (cardRefs.current[index] = el)}
                                data-index={index}
                                style={animationStyles(isVisible[index])}
                                className="bg-white rounded-lg shadow-md p-6 transform transition-colors duration-600 min-w-[280px] md:min-w-[300px] hover:bg-[#4F9CF9] group"
                            >
                                <img className="mb-7" src="public/assets/saaS-landingpages/Quote.svg" alt="Quote" />
                                <p className="text-base text-[#212529] font-medium mb-7 group-hover:text-white">
                                    Whitepace is designed as a collaboration tool for businesses that is a full project management solution.
                                </p>
                                <hr className="border-[#212529] group-hover:border-white mb-8" />
                                <div className="flex gap-4 items-center group-hover:text-white">
                                    <img className="w-20 h-auto" src={`public/assets/saaS-landingpages/${avatar}.svg`} alt="User" />
                                    <div>
                                        <p className="text-lg font-bold text-[#212529] group-hover:text-[#043873]">Oberon Shaw, MCH</p>
                                        <p className="text-base font-medium text-[#212529] group-hover:text-white">Head of Talent Acquisition, North America</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
