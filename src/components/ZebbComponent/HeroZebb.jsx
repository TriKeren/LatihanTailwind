const HeroZebb = () => {
    return ( 
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

            .font-merriweather{
                font-family: 'Merriweather' , sans-serif;
            }`
            }
        </style>
        <div className="lg:max-w-screen-xl mx-auto mt-[60px] md:mt-10 lg:mt-36 overflow-x-hidden font-merriweather">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 lg:mx-14">
                <div className="flex flex-col items-center lg:items-start gap-10 md:gap-12 lg:gap-10">
                    <h1 className="text-5xl md:text-5xl w-96 md:w-96 text-center lg:text-start text-black font-bold leading-snug md:leading-tight lg:leading-snug">We help to Create <span className="bg-[#FF5678] text-white inline-block py-0">Brands</span> With Coffee</h1>
                    <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10 shadow-sm shadow-black">See Our Work</button>
                </div>
                <div className="flex justify-center mt-[30px]">
                    <img className="w-80 md:w-9/12 lg:w-full" src="/public/assets/ZebbDigitalAgency/LogoHero.png" alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default HeroZebb;