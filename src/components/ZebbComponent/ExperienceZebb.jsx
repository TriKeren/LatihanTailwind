import { useState, useEffect, useRef } from 'react';

const ExperienceZebb = () => {
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
            className={`lg:max-w-screen-xl mx-auto mt-28 md:mt-32 lg:mt-44`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-30 lg:mx-11 font-merriweather">
                <div className={`flex flex-col items-start md:items-center lg:items-start gap-10 md:gap-12 lg:gap-8 lg:mt-12 mx-4 lg:mx-0transition-opacity duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-400`}>
                <h1 className={`text-[40px] md:text-5xl w-64 md:w-96 text-start lg:text-start text-[#020E35] font-bold leading-tight md:leading-tight lg:leading-snug transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    We craft experiences for business to help reach our <br /><span></span>
                        <span className="relative">
                        customers<span className="absolute inset-x-0 bottom-0 h-[20px] w-[200px] bg-[#FF5678] -z-10"></span>
                        </span>
                    </h1>
                    <p className="text-start w-80 md:w-96 md:text-center lg:text-start text-[22px]">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                    </p>
                    <button className="p-4 bg-[#020E35] text-white font-medium px-10 lg:px-10">
                        Learn More
                    </button>
                </div>

                <div className={`flex justify-center transition-opacity duration-1000 mt-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'} delay-100`}>
                    <img className="w-[330px] md:w-9/12 lg:w-full lg:h-[400px]" src="/public/assets/ZebbDigitalAgency/music.png" alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default ExperienceZebb;
