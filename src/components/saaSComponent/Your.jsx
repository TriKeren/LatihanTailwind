import { useEffect, useRef, useState } from 'react';

const Your = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);

    // Inline animation styles
    const animationStyles = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    };

    return (
        <div className="relative bg-[#043873] py-20 md:py-16 lg:py-20">
            <div className="absolute hidden lg:block bottom-[-60px] right-[90px] w-full h-[130%]">
                <img src="public/assets/saaS-landingpages/bg-your.png" alt="" className="h-full object-cover" />
            </div>
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8 relative z-10 flex flex-col items-start lg:items-center">
                <div className="w-full lg:w-[100%] lg:flex lg:justify-center">
                    <div className="text-left lg:text-center">
                        <h1
                            ref={ref}
                            style={animationStyles}
                            className="relative text-[36px] md:text-6xl lg:text-[72px] md:mb-14 font-bold text-white mb-7 lg:mb-10"
                        >
                            <span className="relative z-10">Your work, everywhere you are</span>
                            <img
                                src="public/assets/saaS-landingpages/bg2-text.svg"
                                alt=""
                                className="absolute inset-0 mt-[140px] lg:mt-[50px] ml-0 lg:ml-[860px] w-[90%] lg:w-[25%] h-auto object-cover opacity-100 z-0"
                            />
                        </h1>
                        <p
                            style={animationStyles}
                            className="text-[18px] lg:w-full md:text-xl lg:text-[18px] lg:px-20 text-white mb-10"
                        >
                            Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
                        </p>
                        <div className="flex justify-start lg:justify-center">
                            <button className="px-[40px] flex items-center text-[18px] lg:px-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                                Try Taskey
                                <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Your;
