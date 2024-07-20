const Extension = () => {
    return (
        <div className="bg-[#043873] py-14 md:py-10 md:mt-16 lg:py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-1">
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start">Use as Extension</h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg text-white text-center md:text-center lg:text-start">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Let’s Go</button>
                    </div>
                </div>
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto">
                    <img src="public/assets/saaS-landingpages/Social biography-amico.png" className="w-5/6 md:w-9/12 lg:w-3/5 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Extension;
