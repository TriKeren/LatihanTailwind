const Custumes = () => {
    return (
        <div className="bg-white py-12 md:py-10 lg:py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-2">
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto lg:order-1 order-1">
                    <img src="public/assets/saaS-landingpages/Advanced customization-amico.png" className="w-3/4 md:w-1/2 lg:w-2/3 h-auto" />
                </div>
                <div className="w-full md:w-full flex flex-col items-start lg:items-start space-y-4 lg:order-2 order-2">
                    <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center mt-10 md:text-center lg:text-start">Customise it to your needs</h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg lg:font-medium text-[#212529] text-center md:text-center lg:text-start">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Let’s Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Custumes;
