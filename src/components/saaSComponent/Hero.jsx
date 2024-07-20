const Hero = () => {
    return (
        <div className="bg-[#043873] py-12 md:py-20 lg:py-32">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div className="w-full md:w-full flex flex-col items-start space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 md:mb-5 lg:mb-7 text-center lg:text-start">Get More Done with whitepace</h1>
                    <p className="text-lg text-white text-center lg:text-start">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5">Try TasKey Free</button>
                    </div>
                </div>
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto">
                    <img src="public/assets/saaS-landingpages/hero.png" className="w-5/6 md:w-3/4 lg:w-2/3 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Hero;