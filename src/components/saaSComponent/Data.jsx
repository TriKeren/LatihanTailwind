import { useEffect, useRef, useState } from 'react';

const Data = () => {
    // State to track visibility of each section
    const [isVisibleText, setIsVisibleText] = useState(false);
    const [isVisibleButton, setIsVisibleButton] = useState(false);
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
                } else if (entry.target === refButton.current) {
                    setIsVisibleButton(entry.isIntersecting);
                } else if (entry.target === refImage.current) {
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
        <div className="bg-white py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div
                    ref={refText}
                    style={animationStyles(isVisibleText)}
                    className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start">
                        100% your data
                    </h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg text-[#212529] text-center md:text-center lg:text-start">
                        The app is open source and your notes are saved to an open format, so you ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button
                            ref={refButton}
                            style={animationStyles(isVisibleButton)}
                            className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300"
                        >
                            Read More
                        </button>
                    </div>
                </div>
                <div
                    ref={refImage}
                    style={animationStyles(isVisibleImage)}
                    className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto"
                >
                    <img
                        src="public/assets/saaS-landingpages/Element.png"
                        className="w-5/6 md:w-4/5 lg:w-3/4 h-auto"
                        alt="Visual Element"
                    />
                </div>
            </div>
        </div>
    );
};

export default Data;
