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
        <div className="max-w-screen-xl mx-auto mt-36 lg:mt-40">
            <div className="flex justify-center text-center">
                <h1 className="text-4xl font-bold">
                    Some of Our <span></span>
                    <span className="relative inline-block">
                        Previous Work <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>

            <div className="flex justify-center items-center mt-5">
                <div className="flex gap-2">
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">All</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">Illustration</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">App</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">Branding</h1>
                </div>
            </div>
            
            <div className="flex justify-center mt-14 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 px-5 w-11/12">
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <div
                            key={index}
                            ref={el => imageRefs.current[index] = el}
                            className={`flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 ${index <= visibleIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${index <= visibleIndex ? `delay-[${index * 100}ms]` : ''}`}
                        >
                            <img className="w-full" src={`/public/assets/ZebbDigitalAgency/work${num}.png`} alt={`Work ${num}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12 lg:mt-16">
                <button className="p-2 bg-[#020E35] text-white font-medium px-5 lg:px-16">See More</button>
            </div>
        </div>
    );
}

export default WorkZebb;
