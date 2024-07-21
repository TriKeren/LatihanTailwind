const Sponsor = () => {
    return (
        <section className="partner mt-10 lg:mt-24">
            <div className="container mx-auto text-center">
                <h2 className=" text-[#212529] text-5xl lg:text-6xl md:text-6xl font-bold mb-8 lg:mb-8 md:mb-14">Our Sponsors</h2>
                <div className="w-full lg:flex lg:flex-wrap justify-center items-center lg:w-10/12 lg:mx-auto">
                    <div className="mb-12 px-4 lg:w-1/4 flex justify-center">
                        <div className="bg-white shadow-md rounded-lg p-5">
                            <img src="public/assets/saaS-landingpages/Apple.svg" className="w-12 md:w-16 lg:w-20 mx-auto" alt="Apple" />
                        </div>
                    </div>
                    <div className="mb-12 px-4 lg:w-1/4 flex justify-center">
                        <div className="bg-white shadow-md rounded-lg p-5">
                            <img src="public/assets/saaS-landingpages/Microsoft.svg" className="w-24 md:w-32 lg:w-40 mx-auto" alt="Microsoft" />
                        </div>
                    </div>
                    <div className="mb-12 px-4 lg:w-1/4 flex justify-center">
                        <div className="bg-white shadow-md rounded-lg p-5">
                            <img src="public/assets/saaS-landingpages/Slack.svg" className="w-24 md:w-32 lg:w-40 mx-auto" alt="Slack" />
                        </div>
                    </div>
                    <div className="mb-12 px-4 lg:w-1/4 flex justify-center">
                        <div className="bg-white shadow-md rounded-lg p-5">
                            <img src="public/assets/saaS-landingpages/Google.svg" className="w-24 md:w-32 lg:w-40 mx-auto" alt="Google" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsor;
