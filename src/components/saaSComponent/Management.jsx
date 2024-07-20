const Management = () => {
    return (
        <div className="bg-white py-12 md:py-10 lg:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl px-4 md:px-7">
                <div className="w-full md:w-3/4 flex flex-col items-start lg:items-start space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#212529] mb-5 md:mb-5 lg:mb-7 text-center md:text-center lg:text-start">Project Management</h1>
                    <p className="text-lg md:font-medium text-[#212529] text-center md:text-center lg:text-start">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <button className="px-4 py-2 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] mt-5 lg:mt-10 md:mt-10 md:mb-5">Get Started</button>
                    </div>
                </div>
                <div className="w-full md:w-full mt-7 lg:mt-0 flex justify-center lg:justify-end lg:ml-auto">
                    <img src="public/assets/saaS-landingpages/managt.png" className="w-5/6 md:w-3/4 lg:w-3/4 h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Management;
