import { useEffect, useState } from 'react';

const Custumes = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleScroll = () => {
        const imageElement = document.getElementById('custumes-image');
        const titleElement = document.getElementById('custumes-title');
        const textElement = document.getElementById('custumes-text');
        const buttonElement = document.getElementById('custumes-button');

        const imageInView = imageElement.getBoundingClientRect().top <= window.innerHeight && imageElement.getBoundingClientRect().bottom >= 0;
        const titleInView = titleElement.getBoundingClientRect().top <= window.innerHeight && titleElement.getBoundingClientRect().bottom >= 0;
        const textInView = textElement.getBoundingClientRect().top <= window.innerHeight && textElement.getBoundingClientRect().bottom >= 0;
        const buttonInView = buttonElement.getBoundingClientRect().top <= window.innerHeight && buttonElement.getBoundingClientRect().bottom >= 0;

        setTimeout(() => {
            setIsImageVisible(imageInView);
        }, 50); // Delay for image

        setTimeout(() => {
            setIsTitleVisible(titleInView);
        }, 100); // Delay for title

        setTimeout(() => {
            setIsTextVisible(textInView);
        }, 100); // Delay for text

        setTimeout(() => {
            setIsButtonVisible(buttonInView);
        }, 100); // Delay for button
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on component mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-white py-12 md:py-10 lg:py-20 overflow-x-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-2">
                <div
                    id="custumes-image"
                    className={`w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto lg:order-1 order-1 transition-all duration-1000 transform ${isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                    <img src="public/assets/saaS-landingpages/Advanced customization-amico.png" className="w-3/4 md:w-1/2 lg:w-2/3 h-auto" />
                </div>
                <div className="w-[75%] lg:w-[100%] md:w-full flex flex-col items-start lg:items-start space-y-4 lg:order-2 order-2">
                    <h1
                        id="custumes-title"
                        className={`relative text-[36px] md:text-6xl lg:text-[72px] font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center mt-10 md:text-center lg:text-start transition-all duration-1000 transform ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                         <span className="relative z-10">Customise it to your needs</span>
                         <img
                            src="public/assets/saaS-landingpages/bg-text.svg"
                            alt=""
                            className="absolute inset-0 w-[60%] lg:w-[70%] mt-[92px] lg:mt-[115px] ml-[130px] lg:ml-[0px] h-auto object-cover opacity-100 z-0"
                        />
                    </h1>
                    <p
                        id="custumes-text"
                        className={`text-[18px] md:font-medium md:text-2xl lg:text-[17px] lg:font-medium text-[#212529] text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <div
                        id="custumes-button"
                        className={`w-full flex justify-center lg:justify-start transition-all duration-1000 transform ${isButtonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <button className="px-[40px] flex items-center text-[18px] lg:px[20px] lg:py-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Let’s Go 
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Custumes;
