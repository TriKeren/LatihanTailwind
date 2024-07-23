import { useState, useEffect, useRef } from 'react';

const WorkZebb = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const index = imageRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting) {
                        setVisibleIndex(prevIndex => Math.max(prevIndex, index));
                    } else if (index === visibleIndex) {
                        setVisibleIndex(index - 1);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        imageRefs.current.forEach(image => {
            if (image) observer.observe(image);
        });

        return () => {
            imageRefs.current.forEach(image => {
                if (image) observer.unobserve(image);
            });
        };
    }, [visibleIndex]);

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
        <div className="max-w-screen-xl mx-auto mt-44 lg:mt-40">
            <div className="flex justify-center text-center">
                <h1 className="text-4xl font-bold w-56 md:w-96 lg:w-11/12 font-merriweather text-[#020E35]">
                    Some of Our <span></span>
                    <span className="relative">
                        Previous Work <span className="absolute inset-x-0 bottom-0 h-[16px] w-[94px] mx-7 md:mx-0 md:w-[270px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>

            <div className="flex justify-center items-center mt-5 text-[#020E35]">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 font-merriweather cursor-pointer">
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-12 md:px-12 text-start md:text-center">All</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-12 md:px-2 md:order-3 text-start md:text-center">App</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-12 md:px-2 md:order-2">Illustration</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-12 md:px-2 md:order-4 text-start md:text-center">Branding</h1>
                </div>
            </div>
            
            <div className="flex justify-center mt-14 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 px-5 w-11/12">
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <div
                            key={index}
                            ref={el => imageRefs.current[index] = el}
                            className={`flex flex-col items-center gap-5 bg-white py-12 px-5 shadow-sm shadow-black transform transition-transform duration-500 ${index <= visibleIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${index <= visibleIndex ? `delay-[${index * 100}ms]` : ''}`}
                        >
                            <img className="w-full" src={`/public/assets/ZebbDigitalAgency/work${num}.png`} alt={`Work ${num}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12 lg:mt-16">
                <button className="p-4 bg-[#020E35] text-white font-medium px-10 lg:px-16">See More</button>
            </div>
        </div>
        </>
    );
}

export default WorkZebb;
