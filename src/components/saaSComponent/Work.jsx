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
        <div className="bg-white py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-2 md:px-7">
                <div
                    id="work-image"
                    className={`w-full md:w-full mt-7 lg:mt-0 flex mb-5 md:mb-10 lg:mb-0 justify-center lg:justify-start lg:ml-auto lg:order-1 transition-all duration-1000 transform ${isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                    <img src="public/assets/saaS-landingpages/Work Together Image.png" className="w-3/4 md:w-1/2 lg:w-1/2 h-auto" />
                </div>
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4 lg:order-2">
                    <h1
                        id="work-title"
                        className={`text-5xl md:text-7xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        Work Together
                    </h1>
                    <p
                        id="work-text"
                        className={`text-lg md:font-medium md:text-2xl lg:text-lg lg:font-medium text-[#212529] text-center md:text-center lg:text-start transition-all duration-1000 transform ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                    <div
                        id="work-button"
                        className={`w-full flex justify-center lg:justify-start transition-all duration-1000 transform ${isButtonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Try it now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
