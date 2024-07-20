const Data = () => {
    return (
        <div className="bg-white py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start">100% your data</h1>
                    <p className="text-lg md:font-medium md:text-2xl lg:text-lg text-[#212529] text-center md:text-center lg:text-start">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5 transition-colors duration-300">Read More</button>
                    </div>
                </div>
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto">
                    <img src="public/assets/saaS-landingpages/Element.png" className="w-5/6 md:w-4/5 lg:w-3/4 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Data;
