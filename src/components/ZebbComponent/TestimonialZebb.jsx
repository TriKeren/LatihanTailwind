import { useState, useEffect, useRef } from 'react';

const TestimonialZebb = () => {
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
                        setVisibleIndex(prevIndex => prevIndex - 1);
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
        <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-40 lg:mt-44">
            <div className="w-full">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-bold">Testimonial</h1>
                    <p>Over 18,000 happy clients.</p>
                </div>
 
                <div className="w-full overflow-x-scroll p-4 cursor-pointer mt-10">
                    <div className="flex space-x-8 w-max">
                        {['Samantha Kate', 'Samantha Kate', 'Samantha Kate', 'Samantha Kate', 'Samantha Kate'].map((name, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`bg-linear-hero text-black p-5 w-80 lg:w-64 rounded-3xl shadow-sm shadow-black transition-opacity duration-500 hover:scale-105 ${index <= visibleIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="flex flex-col items-center gap-3 py-2">
                                    <img className="w-16" src="/public/assets/ZebbDigitalAgency/User.png" alt="Avatar" />
                                    <div className="flex flex-col items-center gap-3">
                                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/Star.png" alt="" />
                                        <p className="text-center font-medium">“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience</p>
                                        <div className="mt-2 flex flex-col text-center gap-1">
                                            <h1>{name}</h1>
                                            <p>CEO of Floatcom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialZebb;
