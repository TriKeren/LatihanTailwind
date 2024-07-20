const Work = () => {
    return (
        <div className="bg-white py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-2 md:px-7">
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4 lg:order-2">
                    <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start">Work Together</h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg lg:font-medium text-[#212529] text-center md:text-center lg:text-start">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Try it now</button>
                    </div>
                </div>
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto lg:order-1">
                    <img src="public/assets/saaS-landingpages/Work Together Image.png" className="w-3/4 md:w-1/2 lg:w-1/2 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Work;
