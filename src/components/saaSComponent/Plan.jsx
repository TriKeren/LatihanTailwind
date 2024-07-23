import { useEffect, useState } from 'react';

const Plan = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById('plan-cards');
        const elementInView = element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom >= 0;
        setIsVisible(elementInView);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on component mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const zoomInStyle = {
        transform: isVisible ? 'scale(1)' : 'scale(1)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 4s ease-out, opacity 1s ease-out'
    };

    const rotateInStyle = {
        transform: isVisible ? 'rotate(0deg)' : 'rotate(-10deg)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out'
    };

    return (
        <div className="bg-white py-12 md:py-16 lg:py-12">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="w-[85%] lg:w-[100%] ml-[22px]">
                <h1 
                    className="relative text-[36px] md:text-6xl font-bold text-center text-[#212529] mb-5">
                    <span className="relative z-10">Choose Your Plan</span>
                    <img
                        src="public/assets/saaS-landingpages/bg-text.svg"
                        alt=""
                        className="absolute inset-0 mt-[85px] lg:mt-[40px] ml-[80px] lg:ml-[580px] w-[40%] lg:w-[30%] h-[44%] lg:h-[50%] object-cover opacity-100 z-0"
                    />
                </h1>
                <p className="text-[18px] md:text-xl lg:text-[18px] lg:px-32 text-center text-[#212529] mb-10">
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div id="plan-cards" className="flex overflow-x-auto space-x-4 md:space-x-8 w-full md:w-auto">
                        <div style={zoomInStyle} className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Free</h2>
                            <h2 className="text-2xl font-semibold mb-4">$0</h2>
                            <h3 className="text-base font-medium mb-4">Capture ideas and find them quickly</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-white border border-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>

                        <div style={zoomInStyle} className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Personal</h2>
                            <h2 className="text-2xl font-semibold mb-4">$11.99</h2>
                            <h3 className="text-base font-medium mb-4">Keep home and family on track</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-white border border-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>

                        <div style={zoomInStyle} className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Organization</h2>
                            <h2 className="text-2xl font-semibold mb-4">$49.99</h2>
                            <h3 className="text-base font-medium mb-4">Capture ideas and find them quickly</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2" style={rotateInStyle}>
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-white border border-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
