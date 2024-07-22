const Footer = () => {
    return (
        <>
            <footer className="px-4 lg:px-24 mt-24 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full items-center flex flex-col text-center md:text-start md:items-start justify-center md:w-1/2">
                        <img
                            src="/public/assets/corporate/logo.svg"
                            alt="Logo"
                            className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                        />
                        <p className="font-medium mt-8 md:mt-6 text-[#344051] md:text-lg">
                            We love working with ambitious people. <br /> Lets build something great together now.
                        </p>
                        <div className="flex gap-4 mt-8 md:mt-6">
                            <a href="/"><img src="/public/assets/corporate/instagram.svg" alt="Instagram" className="transition-transform duration-300 ease-in-out transform hover:scale-110" /></a>
                            <a href="/"><img src="/public/assets/corporate/Facebook.svg" alt="Facebook" className="transition-transform duration-300 ease-in-out transform hover:scale-110" /></a>
                            <a href="/"><img src="/public/assets/corporate/twitter.svg" alt="Twitter" className="transition-transform duration-300 ease-in-out transform hover:scale-110" /></a>
                            <a href="/"><img src="/public/assets/corporate/linkedin.svg" alt="LinkedIn" className="transition-transform duration-300 ease-in-out transform hover:scale-110" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mt-8">
                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Pricing</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Case Studies</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Features</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Reviews</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Updates</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">About</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">News</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Blog</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Contact</a></li>
                            </ul>
                        </div>

                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Help Center</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Status</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Report a Bug</a></li>
                                <li><a href="#" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">Chat Support</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/email.svg" alt="Email" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">
                                        hello@whitespaceui.design
                                    </a>
                                </li>
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/telp.svg" alt="Phone" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">
                                        +1 (500) 300 250
                                    </a>
                                </li>
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/loc.svg" alt="Location" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051] hover:text-[#1A75FF] transition-colors duration-300">
                                        123 Main St, City, Country
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-10 w-full flex flex-col text-center justify-center border-t border-[#E4E7EC]">
                        <span className="text-[#141C24] mt-4 font-bold md:text-lg">
                            © 2023 Whitespace UI - All rights reserved
                        </span>
                        <div className="mt-4 flex items-center justify-center space-x-2">
                            <a href="#" className="text-[#1A75FF] hover:underline transition-colors duration-300">Terms of Service</a>
                            <div className="border-l border-[#CED2DA] h-6"></div>
                            <a href="#" className="text-[#1A75FF] hover:underline transition-colors duration-300">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
