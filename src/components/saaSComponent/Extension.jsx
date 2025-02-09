import { useEffect, useState } from 'react';

const Extension = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleScroll = () => {
        const titleElement = document.getElementById('extension-title');
        const textElement = document.getElementById('extension-text');
        const buttonElement = document.getElementById('extension-button');
        const imageElement = document.getElementById('extension-image');

        const titleInView = titleElement.getBoundingClientRect().top <= window.innerHeight && titleElement.getBoundingClientRect().bottom >= 0;
        const textInView = textElement.getBoundingClientRect().top <= window.innerHeight && textElement.getBoundingClientRect().bottom >= 0;
        const buttonInView = buttonElement.getBoundingClientRect().top <= window.innerHeight && buttonElement.getBoundingClientRect().bottom >= 0;
        const imageInView = imageElement.getBoundingClientRect().top <= window.innerHeight && imageElement.getBoundingClientRect().bottom >= 0;

        setTimeout(() => {
            setIsTitleVisible(titleInView);
        }, 100); // Delay for title

        setTimeout(() => {
            setIsTextVisible(textInView);
        }, 100); // Delay for text

        setTimeout(() => {
            setIsButtonVisible(buttonInView);
        }, 300); // Delay for button

        setTimeout(() => {
            setIsImageVisible(imageInView);
        }, 300); // Delay for image
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on component mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#043873] mt-5 py-14 md:py-10 md:mt-16 lg:py-20 overflow-x-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-1">
                <div className={`w-[75%] md:w-3/4 flex flex-col items-start lg:items-start space-y-4 transition-all duration-1000 transform ${isTitleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <h1
                        id="extension-title"
                        className={`relative text-[36px] md:text-7xl lg:text-6xl font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start`}
                    >
                        <span className="relative z-10">Use as Extension</span>
                        <img
                            src="public/assets/saaS-landingpages/bg-text.svg"
                            alt=""
                            className="absolute inset-0 mt-[88px] ml-20 w-[60%] h-auto object-cover opacity-100 z-0"
                        />
                    </h1>
                    <p
                        id="extension-text"
                        className={`text-[16px] md:font-medium md:text-2xl lg:text-lg text-white text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTextVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <div
                        id="extension-button"
                        className={`w-full flex justify-center lg:justify-start transition-all duration-1000 transform ${isButtonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                        <button className="px-[40px] flex items-center text-[18px] lg:px-4 lg:py-2 py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Let’s Go 
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div
                    id="extension-image"
                    className={`w-full md:w-full mt-20 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto transition-all duration-1000 transform ${isImageVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-0 scale-95'}`}
                >
                    <img src="public/assets/saaS-landingpages/Social biography-amico.png" className="w-5/6 md:w-9/12 lg:w-3/5 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Extension;
