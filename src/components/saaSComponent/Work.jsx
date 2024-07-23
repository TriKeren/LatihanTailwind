import { useEffect, useState } from 'react';

const Work = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleScroll = () => {
        const titleElement = document.getElementById('work-title');
        const textElement = document.getElementById('work-text');
        const buttonElement = document.getElementById('work-button');
        const imageElement = document.getElementById('work-image');

        const titleInView = titleElement.getBoundingClientRect().top <= window.innerHeight && titleElement.getBoundingClientRect().bottom >= 0;
        const textInView = textElement.getBoundingClientRect().top <= window.innerHeight && textElement.getBoundingClientRect().bottom >= 0;
        const buttonInView = buttonElement.getBoundingClientRect().top <= window.innerHeight && buttonElement.getBoundingClientRect().bottom >= 0;
        const imageInView = imageElement.getBoundingClientRect().top <= window.innerHeight && imageElement.getBoundingClientRect().bottom >= 0;

        setTimeout(() => {
            setIsTitleVisible(titleInView);
        }, 100); // Delay for title

        setTimeout(() => {
            setIsTextVisible(textInView);
        }, 300); // Delay for text

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
        <div className="bg-white py-5 md:py-10 lg:py-16 overflow-x-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-2 md:px-7">
                <div className="w-[80%] lg:w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-10 lg:space-y-5 order-1 lg:order-2">
                <h1
                        id="work-title"
                        className={`relative text-[36px] md:text-7xl lg:text-[72px] font-bold text-[#212529] mb-3 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <span className="relative z-10">Work Together</span>
                        <img
                            src="public/assets/saaS-landingpages/bg-text.svg"
                            alt=""
                            className="absolute ml-24 lg:ml-[210px] mt-7 lg:mt-[57px] inset-0 w-[80%] lg:w-[70%] lg:h-[40%] h-auto object-cover opacity-100 z-0"
                        />
                    </h1>
                    <p
                        id="work-text"
                        className={`text-[18px] md:font-medium md:text-2xl lg:text-[16px] lg:font-medium text-[#212529] text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                    <div
                        id="work-button"
                        className={`w-full flex justify-center lg:justify-start transition-all duration-1000 transform ${isButtonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <button className="px-[40px] flex items-center text-[18px] lg:px[20px] lg:py-[20px] py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Try it now 
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div
                        id="work-image"
                        className={`w-full md:w-full lg:mt-0 flex md:mb-10 lg:mb-0 justify-center lg:justify-start lg:ml-auto order-2 lg:order-1 transition-all duration-1000 transform ${isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                    <img src="public/assets/saaS-landingpages/Work Together Image.png" className="w-[90%] md:w-1/2 lg:w-[60%] h-auto" />
                    </div>
            </div>
        </div>
    );
}

export default Work;
