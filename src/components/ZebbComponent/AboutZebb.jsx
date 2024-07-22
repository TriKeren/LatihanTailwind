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
        <div
            ref={ref}
            className={`max-w-screen-xl mx-auto mt-24 md:mt-10 lg:mt-36 transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-36 lg:mx-12">
                <div className={`flex flex-col items-center lg:items-start gap-10 md:gap-12 lg:gap-5 order-1 lg:order-2 lg:text-right transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    <h1 className={`text-4xl md:text-5xl w-64 md:w-96 text-center lg:text-start text-black font-bold leading-snug md:leading-tight lg:leading-snug transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        Powered by
                        <span className="relative inline-block">
                            talented people <span className="absolute inset-x-0 bottom-0 h-[20px] bg-[#FF5678] -z-10"></span>
                        </span>
                    </h1>
                    <p className={`text-center w-56 md:w-96 lg:text-start transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. <br /> <br />
                        I wrote to let them know ready to came back they kicked me of their team slack all of us are make company email.
                    </p>

                    <div className={`flex flex-col md:flex-row gap-4 lg:gap-7 mt-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        <button className="p-4 bg-[#020E35] text-white font-medium px-5 lg:px-10">Learn More</button>
                        <div className="flex lg:flex-row justify-between items-center gap-2">
                            <div className="bg-[#FF5678] px-5 py-5 rounded-full relative">
                                <a href="">
                                    <img className="absolute inset-0 w-6 h-6 m-auto mx-[10px] hover:w-4 hover:mx-[14px]" src="/public/assets/ZebbDigitalAgency/Play.svg" alt="" />
                                </a>
                            </div>
                            <button className="font-medium">Watch Videos</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center order-2 lg:order-1">
                    <img className="md:w-9/12 lg:w-full object-contain" src="/public/assets/ZebbDigitalAgency/meditation.png" alt="Meditation" />
                </div>
            </div>
        </div>
    );
}

export default AboutZebb;
