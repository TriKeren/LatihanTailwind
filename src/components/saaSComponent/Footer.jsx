import { useEffect, useRef, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
    }, []);

    const animationStyles = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    };

    return (
        <footer ref={footerRef} style={animationStyles} className="bg-[#043873] py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start mb-10 space-y-8 md:space-y-8 lg:space-y-0">
                    {/* Logo and Text */}
                    <div className="flex flex-col w-[80%] lg:w-auto ml-8 lg:ml-0 items-center mb-10 md:items-start">
                        <img src="public/assets/saaS-landingpages/Logo.svg" className="w-[191px] lg:w-[144px] md:w-48 h-auto mb-4" alt="Logo" />
                        <p className="text-white text-[18px] lg:text-[16px] md:text-xl lg:w-52 md:w-3/4 text-center md:text-left">Whitepace was created for the new ways we live and work. We make beautifully designed tools for teams around the world.</p>
                    </div>

                    {/* Center Section */}
                    <div className="flex flex-col lg:ml-[100px] md:flex-row lg:flex-row justify-center lg:justify-center gap-7 md:gap-7 space-y-8 md:space-y-0 lg:space-y-0 lg:space-x-16 w-full lg:w-auto">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-[18px] lg:text-lg md:text-2xl font-bold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Overview</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Pricing</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Customer Stories</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-[18px] lg:text-lg md:text-2xl font-bold mb-4">Resource</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Blog</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Guides & Tutorials</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Help Center</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-[18px] lg:text-lg md:text-2xl font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">About Us</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Careers</a></li>
                                <li><a href="#" className="text-white lg:text-[18px] md:text-lg hover:text-[#FFE492]">Media Kit</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Try It Today Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:ml-auto lg:w-[20%]">
                        <h4 className="text-white text-[28px] mt-7 lg:mt-0 lg:text-xl md:text-2xl font-bold mb-4">Try It Today</h4>
                        <p className="text-white text-[18px] lg:w-[100%] lg:text-base md:text-lg">Get started for free. Add your whole team as your needs grow.</p>
                        <button className="px-[40px] flex items-center text-[18px] lg:px-4 lg:py-2 py-[20px] font-medium bg-[#4F9CF9] text-[#FFE492] rounded-[8px] hover:bg-[#FFE492] hover:text-[#043873] mt-[60px] lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">
                            Start today
                            <img className='w-4 ml-2' src="public/assets/saaS-landingpages/arrowright.svg" alt="" />
                        </button>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#6C757D] pt-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 text-center md:text-left space-y-2 md:space-y-0 md:space-x-8 mb-10 md:mb-0">
                        <a href="#" className="text-white flex gap-2 text-[16px] hover:text-[#FFE492]"><img src="public/assets/saaS-landingpages/bahasa.svg" alt="" />English</a>
                        <a href="#" className="text-white text-[16px] lg:text-sm md:text-base hover:text-[#FFE492]">Terms & Privacy</a>
                        <a href="#" className="text-white text-[16px] lg:text-sm md:text-base hover:text-[#FFE492]">Security</a>
                        <a href="#" className="text-white text-[16px] lg:text-sm md:text-base hover:text-[#FFE492]">Status</a>
                        <span className="text-white text-[16px] lg:text-sm md:text-base">©2024 Whitepace LLC.</span>
                    </div>

                    <div className="flex space-x-7">
                        <img src="public/assets/saaS-landingpages/fb.svg" alt="Facebook" className="w-[17px] lg:w-full h-[13.81px]" />
                        <img src="public/assets/saaS-landingpages/twitter.svg" alt="Twitter" className="w-[17px] lg:w-full h-[13.81px]" />
                        <img src="public/assets/saaS-landingpages/linkedin.svg" alt="LinkedIn" className="w-[17px] lg:w-full h-[13.81px]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
