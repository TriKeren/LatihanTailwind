const FooterZebb = () => {
    return (
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

            .font-merriweather{
                font-family: 'Merriweather' , sans-serif;
            }`
            }
        </style>
        <div className="relative max-w-screen-xl mx-auto w-full bg-white mt-12 lg:mt-20 font-merriweather overflow-x-hidden">
            <div className="absolute w-full md:left-20 lg:w-4/12 lg:-left-16">
                <img src="/public/assets/ZebbDigitalAgency/IllustrationFooter.svg" alt="" />
            </div>
            <div className="absolute w-full lg:w-4/12 top-[850px] md:top-[650px] lg:top-0 md:left-20 lg:left-[900px] lg:top-0 lg:rotate-180">
                <img src="/public/assets/ZebbDigitalAgency/IllustrationFooter.svg" alt="" />
            </div>
            <div className="relative max-w-screen-xl mx-auto py-10 px-4 lg:px-8 bg-cover bg-center">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 text-black">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:mx-6">
                        <div className="flex items-center gap-2">
                            <img src="/public/assets/ZebbDigitalAgency/Logo.svg" alt="Logo" />
                            <h1 className="text-[#FF5678] text-[24px]">Zebb</h1>
                        </div>
                        <div className="flex gap-7">
                            <img src="/public/assets/ZebbDigitalAgency/Facebook.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Instagram.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Linkdin.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Basket.svg" className="w-7" alt="" />
                            <img src="/public/assets/ZebbDigitalAgency/Twitter.svg" className="w-7" alt="" />
                        </div>
                        <div className="flex flex-col text-center lg:text-left gap-1 font-merriweather">
                            <h1 className="text-2xl font-bold text-black">Address</h1>
                            <p>+123 456 789</p>
                            <p className="w-36">877 The Bronx, NY 14568 USA</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-14 gap-2 font-merriweather">
                        <h1 className="text-2xl font-bold text-black">Services</h1>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Web design & development</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Social media management</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Search Engine Optimization</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Social media marketing</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Content writing</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Video production</p></a>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-14 gap-2 font-merriweather">
                        <h1 className="text-2xl font-bold text-black">Company</h1>
                        <a href="" className="text-black text-[14px]"><p>Case Studies</p></a>
                        <a href="" className="text-black text-[14px]"><p className="lg:w-72">Web design & Services</p></a>
                        <a href="" className="text-black text-[14px]"><p>About</p></a>
                        <a href="" className="text-black text-[14px]"><p>Contact Us</p></a>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-12 gap-2 font-merriweather">
                        <h1 className="text-2xl font-bold text-black">About Us</h1>
                        <a href="" className="text-black text-[14px]"><p>Featured artists</p></a>
                        <a href="" className="text-black text-[14px]"><p>The Portal</p></a>
                        <a href="" className="text-black text-[14px]"><p>Live events</p></a>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-2 lg:mx-8 gap-2 font-merriweather">
                        <h1 className="text-2xl font-bold text-black">Legal Stuff</h1>
                        <a href="" className="text-black text-[14px]"><p>Shipping & Delivery</p></a>
                        <a href="" className="text-black text-[14px]"><p>Terms & Conditions</p></a>
                        <a href="" className="text-black text-[14px]"><p>Privacy & Policy</p></a>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-[#020E35] py-5 mt-10">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto text-white px-4 lg:px-[50px] font-merriweather">
                    <h1 className="text-center md:text-left font-medium mb-4 md:mb-0">Copyright ©2020 Zebb Agency. All Right Reserved</h1>
                    <div className="flex gap-11">
                        <a href=""><p className="font-medium">Cookie Policy</p></a>
                        <a href=""><p className="font-medium">Privacy Policy</p></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default FooterZebb;
