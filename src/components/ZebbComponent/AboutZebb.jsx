import { useState, useEffect, useRef } from 'react';

const AboutZebb = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

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
        <div
            ref={ref}
            className={`max-w-screen-xl mx-auto mt-24 md:mt-40 lg:mt-36 transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-36 lg:mx-12 font-merriweather">
                <div className={`flex flex-col items-center lg:items-start gap-10 md:gap-12 lg:gap-5 order-1 lg:order-2 lg:text-right transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    <h1 className={`text-[40px] md:text-5xl w-72 md:w-96 text-center lg:text-start text-black font-bold leading-snug md:leading-tight lg:leading-snug transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        Powered by <span></span>
                        <span className="relative">
                            talented people <span className="absolute inset-x-0 bottom-0 h-[20px] w-[155px] md:w-[370px] lg:w-96 bg-[#FF5678] -z-10"></span>
                        </span>
                    </h1>
                    <p className={`text-center w-64 md:w-96 lg:text-start transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. <br /> <br />
                        I wrote to let them know ready to came back they kicked me of their team slack all of us are make company email.
                    </p>

                    <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10">Learn More</button>
                        <div className="flex lg:flex-row justify-between items-center gap-[24px]">
                            <div className="bg-[#FF5678] px-[30px] py-[30px] rounded-full relative">
                                <a href="">
                                    <img className="absolute inset-0 w-9 h-9 m-auto mx-[15px] hover:w-5 hover:mx-[22px]" src="/public/assets/ZebbDigitalAgency/Play.svg" alt="" />
                                </a>
                            </div>
                            <button className="font-medium">Watch Videos</button>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center order-2 lg:order-1">
                    <img className="w-80 md:w-9/12 lg:w-full object-contain" src="/public/assets/ZebbDigitalAgency/meditation.png" alt="Meditation" />
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutZebb;
