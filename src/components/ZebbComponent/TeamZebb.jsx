import { useState, useEffect, useRef } from 'react';

const TeamZebb = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const index = cardRefs.current.indexOf(entry.target);
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

        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, [visibleIndex]);

    return (
        <div className="max-w-screen-xl mx-auto mt-36 lg:mt-40">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold">
                    <span className="relative inline-block">
                        Meet Team <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>
            
            <div className="flex justify-center mt-14 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 px-5">
                    {['Samantha Jones', 'Mark Ali', 'Davi John', 'John Daen', 'Alice Kate', 'Jhang Yui'].map((name, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className={`flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 ease-out ${index <= visibleIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${index <= visibleIndex ? `delay-[${index * 100}ms]` : ''}`}
                        >
                            <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt="" />
                            <h1 className="text-2xl font-medium">{name}</h1>
                            <p className="text-center">Position</p>
                            <a href="">See Detail</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamZebb;
