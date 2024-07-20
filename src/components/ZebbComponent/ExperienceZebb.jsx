const ExperienceZebb = () => {
    return ( 
        <div className="lg:max-w-screen-xl mx-auto mt-28 md:mt-32 lg:mt-44">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-30 lg:mx-14">
                <div className="flex flex-col items-start md:items-center lg:items-start gap-10 md:gap-12 lg:gap-8 lg:mt-12 mx-4 lg-mx-0">
                    <h1 className="text-3xl md:text-4xl w-64 md:w-10/12 text-start md:text-center lg:text-start text-black font-bold leading-snug md:leading-tight lg:leading-snug">We craft experiences for business to help reach<span className="bg-[#FF5678] text-white inline-block py-0">our customers</span></h1>
                    <p className="text-start w-56 md:w-96 md:text-center lg:text-start">But I must explain to you how all thismistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                    <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10">Learn More</button>
                </div>
                <div className="flex justify-center">
                    <img className="md:w-9/12 lg:w-full" src="/public/assets/ZebbDigitalAgency/music.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default ExperienceZebb;