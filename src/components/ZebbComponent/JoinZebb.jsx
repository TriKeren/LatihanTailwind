import { useState, useEffect, useRef } from 'react';

const JoinZebb = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
            if (textRef.current) {
                observer.unobserve(textRef.current);
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
        <div className="max-w-screen-xl mx-auto flex justify-center mt-10 lg:mt-14 font-merriweather">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 rounded-lg">
                <div
                    className={`flex justify-center order-1 lg:order-2 lg:text-right transform transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    ref={imageRef}
                >
                    <img src="/public/assets/ZebbDigitalAgency/meditation.png" className="w-11/12 mx-10 mt-16" alt="Meditation" />
                </div>
                <div
                    className={`mx-14 text-black transform transition-transform duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    ref={textRef}
                >
                    <div className="text-black flex justify-center lg:justify-start text-center lg:text-start">
                        <h1 className="text-4xl font-bold w-80">
                            Join Our Newsletters & get Coffee
                            <span className="relative inline-block">
                                Formula!<span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-14">
                        <form action="" className="flex flex-col gap-6 lg:mx-1">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-poppins font-medium">Name :</label>
                                <input id="name" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="font-poppins font-medium">Email :</label>
                                <input id="email" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="font-poppins font-medium">Message :</label>
                                <textarea id="message" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>

                            <div>
                                <button className="p-3 bg-[#020E35] text-white font-medium px-5 lg:px-16">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default JoinZebb;
