const Hero = () => {
    return (
        <>
            <section className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full lg:flex items-center lg:px-24">
                        <div className="self-center w-full px-4 lg:w-1/2">
                            <h1 className="font-semibold text-4xl text-[#141C24] md:text-5xl lg:text-4xl">
                                Everything you need to scale a <span className="underline underline-offset-[10px] decoration-[#1A75FF]">global team</span>
                            </h1>
                            <p className="font-normal mt-4 text-[#344051] md:text-xl lg:text-base">
                                Check out our proven methods, guides, and exercises that help make work better, and people happier.
                            </p>
                            <div className="mt-8 flex-col flex gap-4 md:flex-row md:mt-14">
                                <button className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-8 py-3 text-base rounded-lg">Learn More</button>
                                <button className="bg-transparent md:w-fit w-full text-center flex flex-row text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-3 text-base rounded-lg border-2 border-[#344051]"><img className="text-[#344051] mr-1 mt-1" src="/public/assets/corporate/play.svg" width={20} alt="" />Watch Demo</button>
                            </div>
                            <p className="font-normal mt-5 text-[#344051]">
                                Trusted by over than 1M customers
                            </p>
                            <div className="flex mt-2 gap-1">
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                                <img src="/public/assets/corporate/star.svg" alt="" />
                            </div>
                        </div>
                        <div className="self-end flex justify-center w-full px-4 mt-12 md:mt-16 lg:mt-10 lg:w-1/2">
                            <img className="w-[100%] lg:w-[90%] md:w-[70%]" src="/public/assets/corporate/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;