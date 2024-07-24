import { useEffect, useRef, useState } from 'react';

const Data = () => {
    // State to track visibility of each section
    const [isVisibleText, setIsVisibleText] = useState(false);
    const [isVisibleImage, setIsVisibleImage] = useState(false);

    // Refs for each section
    const refText = useRef(null);
    const refButton = useRef(null);
    const refImage = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.target === refText.current) {
                    setIsVisibleText(entry.isIntersecting);
                }  else if (entry.target === refImage.current) {
                    setIsVisibleImage(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );

        if (refText.current) observer.observe(refText.current);
        if (refButton.current) observer.observe(refButton.current);
        if (refImage.current) observer.observe(refImage.current);
    }, []);

    // Inline animation styles
    const animationStyles = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    });

    return (
        <div className="bg-white py-12 md:py-10 mt-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div
                    ref={refImage}
                    style={animationStyles(isVisibleImage)}
                    className="w-full md:w-full mb-12
                     lg:mt-0 flex justify-center lg:justify-end order-1 lg:order-2 lg:ml-auto"
                >
                    <img
                        src="public/assets/saaS-landingpages/data.png"
                        className="w-5/6 md:w-[70%] lg:w-3/4 h-auto"
                        alt="Visual Element"
                    />
                </div>
                <div
                    ref={refText}
                    style={animationStyles(isVisibleText)}
                    className="w-full md:w-3/4 flex flex-col order-2 lg:order-1 items-start lg:items-start space-y-4"
                >
                    <h1
                        className="relative text-[36px] md:ml-[15%] ml-7 lg:ml-0 md:text-[54px] lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center lg:text-start"
                    >
                        <span className="block lg:inline">
                            100% your data
                        </span>
                        <img
                            src="public/assets/saaS-landingpages/bg-text.svg"
                            alt=""
                            className="absolute inset-0 w-[80%] md:w-[80%] md:mt-[45px] md:ml-[150px] ml-24 lg:ml-[160px] mt-8 h-auto object-cover opacity-100 z-[-1]"
                        />
                    </h1>
                    <p className="text-[18px] md:w-[130%] md:ml-[-15%] lg:ml-0 lg:w-full md:font-medium md:text-[18px] lg:text-lg text-[#212529] text-center md:text-center lg:text-start">
                        The app is open source and your notes are saved to an open format, so you ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button
                            className="px-[40px] flex items-center text-[18px] lg:px-[20px] lg:py-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300"
                        >
                            Read more
                            <img
                                className="w-4 ml-2"
                                src="public/assets/saaS-landingpages/arrowright.svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;
