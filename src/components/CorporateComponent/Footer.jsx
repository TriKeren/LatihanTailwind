const Footer = () => {
    return (
        <>
            <footer className="px-4 lg:px-24 mt-24 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full items-center flex flex-col text-center md:text-start md:items-start justify-center md:w-1/2">
                        <img src="/public/assets/corporate/logo.svg" alt="" />
                        <p className="font-medium mt-8 md:mt-6 text-[#344051] md:text-lg">We love working with ambitious people. <br /> Lets build something great together now.</p>
                        <div className="flex gap-4 mt-8 md:mt-6">
                            <img src="/public/assets/corporate/instagram.svg" alt="" />
                            <img src="/public/assets/corporate/Facebook.svg" alt="" />
                            <img src="/public/assets/corporate/twitter.svg" alt="" />
                            <img src="/public/assets/corporate/linkedin.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mt-8">
                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051]">Pricing</a></li>
                                <li><a href="#" className="text-[#344051]">Case Studies</a></li>
                                <li><a href="#" className="text-[#344051]">Features</a></li>
                                <li><a href="#" className="text-[#344051]">Reviews</a></li>
                                <li><a href="#" className="text-[#344051]">Updates</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051]">About</a></li>
                                <li><a href="#" className="text-[#344051]">Careers</a></li>
                                <li><a href="#" className="text-[#344051]">News</a></li>
                                <li><a href="#" className="text-[#344051]">Blog</a></li>
                                <li><a href="#" className="text-[#344051]">Contact</a></li>
                            </ul>
                        </div>

                        <div className="mb-8 md:mb-0 md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-[#344051]">Help Center</a></li>
                                <li><a href="#" className="text-[#344051]">Status</a></li>
                                <li><a href="#" className="text-[#344051]">Report a Bug</a></li>
                                <li><a href="#" className="text-[#344051]">chat Support</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/4">
                            <h3 className="text-[#141C24] text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/email.svg" alt="" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051]">
                                        hello@whitespaceui.design
                                    </a>
                                </li>
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/telp.svg" alt="" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051]">
                                        +1 (500) 300 250
                                    </a>
                                </li>
                                <li className="flex md:flex-col lg:flex-row flex-row md:space-x-0 space-x-2 lg:space-x-2">
                                    <img src="/public/assets/corporate/loc.svg" alt="" className="w-6 h-6 mt-0.5" />
                                    <a href="/" className="text-[#344051]">
                                        hello@whitespaceui.design
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
                            <a href="#" className="text-[#1A75FF] hover:underline">Terms of Service</a>
                            <div className="border-l border-[#CED2DA] h-6"></div>
                            <a href="#" className="text-[#1A75FF] hover:underline">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;