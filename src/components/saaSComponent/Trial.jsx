const Trial = () => {
    return (
        <div className="bg-[#043873] py-12 md:py-16 lg:py-24">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl md:mb-14 font-bold lg:text-center text-white mb-5 lg:mb-10">
                Try Whitepace today
                </h1>
                <p className="text-lg md:text-2xl lg:text-lg lg:px-20 lg:text-center text-white mb-5 md:mb-7 lg:mb-10">
                Get started for free. <br></br> Add your whole team as your needs grow.
                </p>
                <div className="flex lg:justify-center mb-5 md:mb-7 lg:mb-10">
                    <button className="px-6 py-3 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] transition-colors duration-300">
                        Try Taskey free
                    </button>
                </div>
                <p className="text-lg md:text-2xl lg:text-lg lg:px-20 lg:text-center text-white mb-7 lg:mb-10">
                On a big team? Contact sales
                </p>
                <div className="w-full flex flex-wrap lg:justify-center lg:items-center">
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="">
                            <img src="public/assets/saaS-landingpages/trial1.svg" className="w-14 md:w-28 lg:w-20 mx-auto" alt="Apple" />
                        </div>
                    </div>
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="px-7">
                            <img src="public/assets/saaS-landingpages/trial2.svg" className="w-14 md:w-28 lg:w-20 mx-auto" alt="Microsoft" />
                        </div>
                    </div>
                    <div className="lg:w-1/4 flex justify-start lg:justify-center">
                        <div className="">
                            <img src="public/assets/saaS-landingpages/trial3.svg" className="w-14 md:w-28 lg:w-20 mx-auto" alt="Slack" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trial;