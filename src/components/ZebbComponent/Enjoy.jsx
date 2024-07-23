import { useState, useEffect, useRef } from 'react';

const Enjoy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        
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
                className={`max-w-screen-xl mx-auto mt-24 md:mt-44 lg:mt-44 transition-opacity duration-1000 transform overflow-x-hidden overflow-y-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="mx-5 lg:mx-16 font-merriweather">
                    <div className="absolute hidden md:block md:rotate-180 md:-right-52 md:top-[500px] lg:rotate-0 lg:left-0 lg:top-28">
                        <img src="/public/assets/ZebbDigitalAgency/IllustrationDeks.svg" alt="" />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <h1 className={`text-[40px] leading-tight font-bold text-3xl w-52 md:w-96 text-center md:text-start transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                            <span className="relative">
                                Thing We Enjoy <span className="absolute inset-x-0 bottom-0 h-[22px] w-[110px] mx-8 md:mx-0 md:w-80 bg-[#FF5678] -z-10"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-28">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                            <div className="flex flex-col gap-16">
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/04.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/05.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/06.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16 lg:gap-32 lg:mx-20 md:mt-28 lg:mt-0">
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 lg:-mt-20 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/01.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 lg:-mt-20 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/02.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-5 transition-transform duration-1000 lg:-mt-20 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                    <img className='w-20' src="/public/assets/ZebbDigitalAgency/03.svg" alt="" />
                                    <div className="">
                                        <h1 className="text-3xl font-bold">Content Writing</h1>
                                        <p className="text-[22.4px] md:w-96 font-normal mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Enjoy;
