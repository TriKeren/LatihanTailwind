const Client = () => {
    return (
        <div className="bg-white py-12 md:py-16 lg:py-12">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1 className="text-5xl md:text-6xl font-bold text-center text-[#212529] mb-10">What Our Clients Say</h1>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex overflow-x-auto space-x-4 md:space-x-8 w-full md:w-auto">
                        
                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#4F9CF9] group">
                            <img className="mb-7" src="public/assets/saaS-landingpages/Quote.svg" alt="Quote" />
                            <p className="text-base text-[#212529] font-medium mb-7 group-hover:text-white">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className="border-[#212529] group-hover:border-white mb-8" />
                            <div className="flex gap-4 items-center group-hover:text-white">
                                <img className="w-20 h-auto" src="public/assets/saaS-landingpages/Avater1.svg" alt="User" />
                                <div>
                                    <p className="text-lg font-bold text-[#212529] group-hover:text-[#043873]">Oberon Shaw, MCH</p>
                                    <p className="text-base font-medium text-[#212529] group-hover:text-white">Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#4F9CF9] group">
                            <img className="mb-7" src="public/assets/saaS-landingpages/Quote.svg" alt="Quote" />
                            <p className="text-base text-[#212529] font-medium mb-7 group-hover:text-white">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className="border-[#212529] group-hover:border-white mb-8" />
                            <div className="flex gap-4 items-center group-hover:text-white">
                                <img className="w-20 h-auto" src="public/assets/saaS-landingpages/Avater2.svg" alt="User" />
                                <div>
                                    <p className="text-lg font-bold text-[#212529] group-hover:text-[#043873]">Oberon Shaw, MCH</p>
                                    <p className="text-base font-medium text-[#212529] group-hover:text-white">Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#4F9CF9] group">
                            <img className="mb-7" src="public/assets/saaS-landingpages/Quote.svg" alt="Quote" />
                            <p className="text-base text-[#212529] font-medium mb-7 group-hover:text-white">Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className="border-[#212529] group-hover:border-white mb-8" />
                            <div className="flex gap-4 items-center group-hover:text-white">
                                <img className="w-20 h-auto" src="public/assets/saaS-landingpages/Avater3.svg" alt="User" />
                                <div>
                                    <p className="text-lg font-bold text-[#212529] group-hover:text-[#043873]">Oberon Shaw, MCH</p>
                                    <p className="text-base font-medium text-[#212529] group-hover:text-white">Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
