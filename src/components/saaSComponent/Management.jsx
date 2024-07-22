import { useEffect, useState } from 'react';

const Management = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleScroll = () => {
        const titleElement = document.getElementById('management-title');
        const textElement = document.getElementById('management-text');
        const buttonElement = document.getElementById('management-button');
        const imageElement = document.getElementById('management-image');

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
        }, 200); // Delay for button

        setTimeout(() => {
            setIsImageVisible(imageInView);
        }, 400); // Delay for image
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
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4">
                    <h1
                        id="management-title"
                        className={`text-5xl md:text-7xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        Project Management
                    </h1>
                    <p
                        id="management-text"
                        className={`text-lg md:font-medium md:text-2xl lg:text-lg text-[#212529] text-center md:text-center lg:text-start transition-all duration-700 transform ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <div
                        id="management-button"
                        className={`w-full flex justify-center lg:justify-start transition-all duration-700 transform ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Get Started</button>
                    </div>
                </div>
                <div
                    id="management-image"
                    className={`w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto transition-all duration-700 transform ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <img src="public/assets/saaS-landingpages/managt.png" className="w-5/6 md:w-4/5 lg:w-3/4 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Management;
