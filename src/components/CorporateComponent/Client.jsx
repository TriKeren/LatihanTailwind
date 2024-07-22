import { useEffect, useRef } from 'react';

const Client = () => {
    const clientImagesRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                } else {
                    entry.target.classList.add('opacity-0', 'translate-y-10');
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        }, observerOptions);

        if (clientImagesRef.current) {
            clientImagesRef.current.forEach((image) => {
                if (image) observer.observe(image);
            });
        }
    }, []);

    return (
        <>
            <div className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-24 text-center">
                        <h1 className="text-[#141C24] mt-2 font-bold text-2xl md:text-4xl">Our Client</h1>
                        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:w-3/4 lg:w-full">
                            <img
                                ref={(el) => clientImagesRef.current[0] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/skyewave.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[1] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/noviexar.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[2] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/nexacore.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[3] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/elitexcel.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[4] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/zenithron.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[5] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/ennovatek.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[6] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/infinitumix.svg"
                                alt="Client Logo"
                            />
                            <img
                                ref={(el) => clientImagesRef.current[7] = el}
                                className="w-40 md:w-48 mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                                src="/public/assets/corporate/spectrafuse.svg"
                                alt="Client Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;