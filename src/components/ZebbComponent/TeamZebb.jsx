import { useState, useEffect, useRef } from 'react';

const teamMembers = [
    {
        name: 'Samantha Jones',
        position: 'Ilustrator',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    },
    {
        name: 'Mark Ali',
        position: 'Owner Creative Director',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    },
    {
        name: 'Davi John',
        position: 'Head of Marketing',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    },
    {
        name: 'John Daen',
        position: 'Graphic Designer',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    },
    {
        name: 'Alice Kate',
        position: 'Social Media Manager',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    },
    {
        name: 'Jhang Yui',
        position: 'Web Designer & Developer',
        image: '/public/assets/ZebbDigitalAgency/User.png',
        detailLink: '#'
    }
];

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
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

            .font-merriweather{
                font-family: 'Merriweather' , sans-serif;
            }`
            }
        </style>
        <div className="max-w-screen-xl mx-auto mt-40 md:mt-52 lg:mt-40 font-merriweather">
            <div className="flex justify-center">
                <h1 className="text-[40px] font-bold w-52 md:w-80 text-center">
                    <span className="relative">
                        Meet The Team <span className="absolute inset-x-0 bottom-0 h-[20px] w-[110px] mx-10 md:w-[310px] md:mx-0 bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>
            
            <div className="flex justify-center mt-20 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 px-5">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className={`group flex flex-col items-center gap-5 bg-white py-12 px-16 md:px-56 lg:px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 ease-out hover:scale-105 ${index <= visibleIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${index <= visibleIndex ? `delay-[${index * 100}ms]` : ''}`}
                        >
                            <img className="w-30 lg:w-20" src={member.image} alt={member.name} />
                            <h1 className="text-2xl font-bold text-center">{member.name}</h1>
                            <p className="text-center font-medium">{member.position}</p>
                            <a href={member.detailLink} className="opacity-0 font-medium group-hover:opacity-100 transition-opacity duration-300">See Detail</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default TeamZebb;
