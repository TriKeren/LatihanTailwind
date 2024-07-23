import { useState, useEffect, useRef } from 'react';

const userTestimonials =[
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
    {
        name: 'Samantha Kate',
        role: 'CEO of Floatcom',
        deskription: '“My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience',
        avatar: '/public/assets/ZebbDigitalAgency/User.png',
        rating: '/public/assets/ZebbDigitalAgency/Star.png',
    },
];
const TestimonialZebb = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const cardRefs = useRef([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);

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

    const scrollLeft = () => {
        const newPosition = Math.max(scrollPosition - 327, 0); 
        carouselRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
        setScrollPosition(newPosition);
    };

    const scrollRight = () => {
        const newPosition = Math.min(scrollPosition + 327, carouselRef.current.scrollWidth - carouselRef.current.clientWidth); // Adjust the scroll distance as needed
        carouselRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
        setScrollPosition(newPosition);
    };

    return (
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

            .font-merriweather{
                font-family: 'Merriweather' , sans-serif;
            }

            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
                display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
                -ms-overflow-style: none;  /*
                scrollbar-width: none; 
            }`}
        </style>
        <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-44 lg:mt-44 font-merriweather text-[#020E35]">
            <div className="w-full relative">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl font-bold">Testimonial</h1>
                    <p>Over 18,000 happy clients.</p>
                </div>

                <div className="relative w-full mt-10">
                    <div ref={carouselRef} className="w-full overflow-x-scroll p-4 cursor-pointer no-scrollbar">
                        <div className="flex space-x-2 w-max">
                            {userTestimonials.map((userTestimonials, index) => (
                                <div key={index} ref={el => cardRefs.current[index] = el} className={`bg-linear-hero text-black p-2 py-10 w-80 lg:w-64 rounded-[80px] shadow-sm shadow-black border border-gray-400 duration-500 transition-transform scale-90 hover:scale-105 ${index <= visibleIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="flex flex-col items-center gap-3 py-2">
                                        <img className="w-16" src={userTestimonials.avatar} alt="Avatar" />
                                        <div className="flex flex-col items-center gap-3">
                                            <img className="w-20" src={userTestimonials.rating} alt="" />
                                            <p className="text-center font-medium text-[#020E35]">{userTestimonials.deskription}</p>
                                            <div className="mt-2 flex flex-col text-center gap-1">
                                                <h1 className='text-[#020E35]'>{userTestimonials.name}</h1>
                                                <p className='text-[#020E35]'>{userTestimonials.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollLeft} className="absolute left-28 lg:left-14 bottom-0 transform translate-y-full p-4 md:p-3 bg-black rounded-full text-white text-3xl shadow-md">
                        &#8592;
                    </button>
                    <button onClick={scrollRight} className="absolute right-28 lg:right-14 bottom-0 transform translate-y-full p-4 md:p-3 bg-black rounded-full text-white text-3xl shadow-md">
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default TestimonialZebb;
