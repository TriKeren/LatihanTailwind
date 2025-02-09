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
            className={`max-w-screen-xl mx-auto mt-24 lg:mt-44 transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="mx-5 lg:mx-16 font-merriweather">
                <div className="flex justify-center md:justify-start">
                    <h1 className={`text-[40px] leading-tight font-bold text-3xl w-52 md:w-96 text-center md:text-start transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                        <span className="relative">
                            Thing We Enjoy <span className="absolute inset-x-0 bottom-0 h-[22px] w-[110px] mx-8 bg-[#FF5678] -z-10"></span>
                        </span>
                    </h1>
                </div>

                <div className="mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                        <div className="flex flex-col gap-16">
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">04</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            </div>
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">05</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            </div>
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">06</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-16 lg:mx-20">
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">01</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            </div>
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">02</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                            </div>
                            <div className={`flex flex-col gap-5 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h1 className="text-6xl font-medium">03</h1>
                                <h1 className="text-3xl font-bold">Content Writing</h1>
                                <p className="text-[22.4px] md:w-96 font-normal">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
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
