const Cta = () => {
    return (
        <>
            <section className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full lg:flex items-center justify-center px-4 lg:px-24">
                        <div className="text-center">
                            <h1 className="font-semibold text-3xl md:text-4xl text-[#141C24]">Streamline your workflow with SaaS: Get started now</h1>
                            <p className="mt-3 text-[#344051]">Stay up to date with the most relevant information</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center lg:px-24">
                        <div className="flex flex-col mt-8 gap-3 md:gap-8 md:flex-row">
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xxl">Unlimited pages</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xl">Easy Access</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xl">14-days free trial</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex-col justify-center px-4 flex gap-4 md:flex-row md:mt-10">
                        <button className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-8 py-3 text-base rounded-lg">Learn More</button>
                        <button className="bg-transparent md:w-fit w-full text-center flex flex-row text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-3 text-base rounded-lg border-2 border-[#344051]"><img className="text-[#344051] mr-1 mt-1" src="/public/assets/corporate/play.svg" width={20} alt="" />Watch Demo</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta;