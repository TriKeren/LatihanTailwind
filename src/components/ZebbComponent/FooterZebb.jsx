const FooterZebb = () => {
    return (
        <div className="max-w-screen-xl mx-auto w-full bg-white mt-12 lg:mt-20">
            <div className="max-w-screen-xl mx-auto py-10 px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/public/assets/ZebbDigitalAgency/Logo.svg" alt="Logo" />
                            <h1 className="text-black">Zebb</h1>
                        </div>
                        <div className="flex gap-7">
                            <img src="/public/assets/ZebbDigitalAgency/Facebook.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Instagram.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Linkdin.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Basket.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Twitter.svg" className="w-7" alt="" />
                        </div>
                        <div className="flex flex-col text-center lg:text-left gap-1">
                            <h1 className="font-bold">Address</h1>
                            <p>+123 456 789</p>
                            <p className="w-36">877 The Bronx, NY 14568 USA</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-14 gap-2">
                        <h1 className="text-2xl font-bold">Services</h1>
                        <p className="lg:w-72">Web design & development</p>
                        <p className="lg:w-72">Social media management</p>
                        <p className="lg:w-72">Search Engine Optimization</p>
                        <p className="lg:w-72">Social media marketing</p>
                        <p className="lg:w-72">Content writing</p>
                        <p className="lg:w-72">Video production</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-14 gap-2">
                        <h1 className="text-2xl font-bold">Company</h1>
                        <p>Case Studies</p>
                        <p className="lg:w-72">Web design & Services</p>
                        <p>About</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-12 gap-2">
                        <h1 className="text-2xl font-bold">About Us</h1>
                        <p>Featured artists</p>
                        <p>The Portal</p>
                        <p>Live events</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-8 gap-2">
                        <h1 className="text-2xl font-bold">Legal Stuff</h1>
                        <p>Shipping & Delivery</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy & Policy</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#020E35] py-5 mt-10">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto text-white px-4 lg:px-8">
                    <h1 className="text-center md:text-left font-medium mb-4 md:mb-0">Copyright ©2020 Zebb Agency. All Right Reserved</h1>
                    <div className="flex gap-11">
                        <p className="font-medium">Cookie Policy</p>
                        <p className="font-medium">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterZebb;
