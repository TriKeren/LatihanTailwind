const FavApp = () => {
    return (
        <div className="bg-[#043873] py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-2">
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto lg:order-1 order-1">
                    <img src="public/assets/saaS-landingpages/Apps.png" className="w-3/4 md:w-1/2 lg:w-2/3 h-auto" />
                </div>
                <div className="w-full md:w-full flex flex-col items-start lg:items-start space-y-4 lg:order-2 order-2">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center mt-10 md:text-center lg:text-start">Work with Your Favorite Apps Using whitepace</h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg lg:font-medium text-white text-center md:text-center lg:text-start">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavApp;
