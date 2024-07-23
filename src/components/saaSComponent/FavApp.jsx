import { useEffect, useRef, useState } from 'react';

const FavApp = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isParagraphVisible, setIsParagraphVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const imageRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imageRef.current) {
                        setIsImageVisible(entry.isIntersecting);
                    } else if (entry.target === headingRef.current) {
                        setIsHeadingVisible(entry.isIntersecting);
                    } else if (entry.target === paragraphRef.current) {
                        setIsParagraphVisible(entry.isIntersecting);
                    } else if (entry.target === buttonRef.current) {
                        setIsButtonVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) observer.observe(imageRef.current);
        if (headingRef.current) observer.observe(headingRef.current);
        if (paragraphRef.current) observer.observe(paragraphRef.current);
        if (buttonRef.current) observer.observe(buttonRef.current);
    }, []);

    const animationStyles = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    });

    return (
        <div className="bg-[#043873] bg-[url('public/assets/saaS-landingpages/bg-hero.png')] bg-no-repeat bg-cover py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-2">
                <div
                    ref={imageRef}
                    style={animationStyles(isImageVisible)}
                    className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto lg:order-1 order-1"
                >
                    <img
                        src="public/assets/saaS-landingpages/Apps.png"
                        className="w-[73%] md:w-1/2 lg:w-2/3 h-auto"
                        alt="Apps"
                    />
                </div>
                <div className="w-full mt-3 md:w-full flex flex-col items-start lg:items-start space-y-4 lg:order-2 order-2">
                    <h1
                        ref={headingRef}
                        style={animationStyles(isHeadingVisible)}
                        className="text-[36px] md:text-6xl lg:text-[62px] font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center mt-10 md:text-center lg:text-start"
                    >
                        Work with Your Favorite Apps Using whitepace
                    </h1>
                    <p
                        ref={paragraphRef}
                        style={animationStyles(isParagraphVisible)}
                        className="text-[18px] w-[77%] lg:w-full ml-[35px] lg:ml-0 md:font-medium md:text-2xl lg:text-[14.5px] lg:font-medium text-white text-center md:text-center lg:text-start"
                    >
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                    <div
                        ref={buttonRef}
                        style={animationStyles(isButtonVisible)}
                        className="w-full flex justify-center lg:justify-start"
                    >
                        <button className="px-[40px] flex items-center text-[18px] lg:px[20px] lg:py-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Read more
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavApp;
