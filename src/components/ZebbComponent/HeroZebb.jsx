const HeroZebb = () => {
    return ( 
        <div className="lg:max-w-screen-xl mx-auto mt-10 md:mt-10 lg:mt-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 lg:mx-14">
                <div className="flex flex-col items-center lg:items-start gap-10 md:gap-12 lg:gap-10">
                    <h1 className="text-4xl md:text-5xl w-64 md:w-96 text-center lg:text-start text-black font-bold leading-snug md:leading-tight lg:leading-snug">We help to Create <span className="bg-[#FF5678] text-white inline-block py-0">Brands</span> With Coffee</h1>
                    <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10">See Our Work</button>
                </div>
                <div className="flex justify-center">
                    <img className="md:w-9/12 lg:w-full" src="/public/assets/ZebbDigitalAgency/LogoHero.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default HeroZebb;