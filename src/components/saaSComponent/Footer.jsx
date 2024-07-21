const Footer = () => {
    return (
        <footer className="bg-[#043873] py-12 lg:py-6">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between mb-10 space-y-8 md:space-y-0">
                    {/* Left Section: Logo and Text */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="public/assets/saaS-landingpages/Logo.svg" className="w-36 h-auto mb-4" alt="Logo" />
                        <p className="text-white text-base text-center md:text-left">Whitepace was created for <br /> the new ways we live and <br /> work. We make a better <br /> workspace around the world.</p>
                    </div>

                    {/* Navigation Links: Centered */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-16">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-lg font-bold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Overview</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Pricing</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Customer Stories</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-lg font-bold mb-4">Resource</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Blog</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Guides & Tutorials</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Help Center</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white text-lg font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">About Us</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Careers</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Media Kit</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white text-lg lg:text-xl font-bold mb-4">Try It Today</h4>
                        <p className="text-white text-base mb-4">Get started for free. Add your <br /> whole team as your needs grow.</p>
                        <button className="px-6 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] transition-colors duration-300">Let’s Go</button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#6C757D] pt-8">
                    <div className="flex flex-col md:flex-row items-center lg:gap-10 text-center md:text-left space-y-2 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
                        <a href="#" className="text-white flex gap-2 text-sm hover:text-[#FFE492]"><img src="public/assets/saaS-landingpages/bahasa.svg" alt="" />English</a>
                        <a href="#" className="text-white text-sm hover:text-[#FFE492]">Terms & Privacy</a>
                        <a href="#" className="text-white text-sm hover:text-[#FFE492]">Security</a>
                        <a href="#" className="text-white text-sm hover:text-[#FFE492]">Status</a>
                        <span className="text-white text-sm">©2024 Whitepace LLC.</span>
                    </div>

                    <div className="flex space-x-5">
                        <img src="public/assets/saaS-landingpages/fb.svg" alt="Facebook" className="w-full lg:w-full h-auto" />
                        <img src="public/assets/saaS-landingpages/twitter.svg" alt="Twitter" className="w-full lg:w-full h-auto" />
                        <img src="public/assets/saaS-landingpages/linkedin.svg" alt="LinkedIn" className="w-full lg:w-full h-auto" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
