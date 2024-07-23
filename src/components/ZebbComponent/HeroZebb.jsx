import { useEffect, useState } from "react";

const HeroZebb = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Add the animation class after the component mounts
        setIsAnimated(true);
    }, []);

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

                .font-merriweather {
                    font-family: 'Merriweather', sans-serif;
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .slide-up {
                    animation: slideUp 1s ease-out forwards;
                }
                `}
            </style>
            <div className="lg:max-w-screen-xl mx-auto mt-[60px] md:mt-10 lg:mt-32 overflow-x-hidden overflow-y-hidden font-merriweather">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 lg:mx-14">
                    <div className={`flex flex-col items-center lg:mt-12 lg:items-start gap-10 md:gap-12 lg:gap-10 ${isAnimated ? 'slide-up' : ''}`}>
                        <h1 className="text-5xl md:text-5xl w-96 md:w-96 text-center lg:text-start text-[#020E35] font-bold leading-snug md:leading-tight lg:leading-snug">
                            We help to Create <span className="bg-[#FF5678] text-white inline-block py-0">Brands</span> With Coffee
                        </h1>
                        <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10 shadow-sm shadow-black">See Our Work</button>
                    </div>
                    <div className={`flex justify-center mt-[30px] lg:mt-0 ${isAnimated ? 'slide-up' : ''}`}>
                        <img className="w-80 md:w-9/12 lg:w-full" src="/public/assets/ZebbDigitalAgency/LogoHero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroZebb;
