import { useEffect, useRef, useState } from 'react';

const Sponsor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        refs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
    }, []);

    // Inline animation styles
    const animationStyles = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    });

    return (
        <section className="partner mt-10 lg:mt-24">
            <div className="container mx-auto text-center">
                <h2 className="text-[#212529] text-[36px] lg:text-6xl md:text-6xl font-bold mb-8 lg:mb-8 md:mb-14">
                    Our Sponsors
                </h2>
                <div className="w-full lg:flex lg:flex-wrap justify-center items-center lg:w-10/12 lg:mx-auto">
                    {['Apple', 'Microsoft', 'Slack', 'Google'].map((name, index) => (
                        <div
                            key={name}
                            className="mb-12 px-4 lg:w-1/4 flex justify-center"
                            ref={el => (refs.current[index] = el)}
                            style={animationStyles(isVisible)}
                        >
                            <div className="p-5">
                                <img
                                    src={`public/assets/saaS-landingpages/${name}.svg`}
                                    className={`w-12 md:w-16 lg:w-20 mx-auto ${name === 'Microsoft' || name === 'Slack' || name === 'Google' ? 'w-24 md:w-32 lg:w-40' : ''}`}
                                    alt={name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
