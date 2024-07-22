import { useState, useEffect, useRef } from 'react';

const Cta = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ctaRef = useRef(null);
    const buttonsRef = useRef(null);
    const buttonContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentCtaRef = ctaRef.current;
        const currentButtonsRef = buttonsRef.current;
        const currentButtonContainerRef = buttonContainerRef.current;

        if (currentCtaRef) {
            observer.observe(currentCtaRef);
        }
        if (currentButtonsRef) {
            observer.observe(currentButtonsRef);
        }
        if (currentButtonContainerRef) {
            observer.observe(currentButtonContainerRef);
        }

        return () => {
            if (currentCtaRef) {
                observer.unobserve(currentCtaRef);
            }
            if (currentButtonsRef) {
                observer.unobserve(currentButtonsRef);
            }
            if (currentButtonContainerRef) {
                observer.unobserve(currentButtonContainerRef);
            }
        };
    }, []);

    return (
        <>
            <section id="cta" className="mt-20 lg:mt-40 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full lg:flex items-center justify-center px-4 lg:px-24">
                        <div
                            ref={ctaRef}
                            className={`text-center transition-opacity duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            <h1 className="font-semibold text-3xl md:text-4xl text-[#141C24]">
                                Streamline your workflow with SaaS: Get started now
                            </h1>
                            <p className="mt-3 text-[#344051]">Stay up to date with the most relevant information</p>
                        </div>
                    </div>
                    <div
                        ref={buttonsRef}
                        className={`w-full flex justify-center items-center lg:px-24 transition-opacity duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <div className="flex flex-col mt-8 gap-3 md:gap-8 md:flex-row">
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xl">Unlimited pages</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xl">Easy Access</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src="/public/assets/corporate/tick.svg" alt="" />
                                <p className="mt-2 text-[#344051] md:text-xl lg:text-2xl">14-days free trial</p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={buttonContainerRef}
                        className={`mt-10 flex-col justify-center px-4 flex gap-4 md:flex-row md:mt-10 transition-opacity duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <button className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-8 py-3 text-base rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF]">
                            Learn More
                        </button>
                        <button className="bg-transparent md:w-fit w-full text-center flex flex-row items-center text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-3 text-base rounded-lg border-2 border-[#344051] transition-colors duration-300 ease-in-out hover:bg-[#344051] hover:text-white">
                            <img className="text-[#344051] mr-1 mt-1" src="/public/assets/corporate/play.svg" width={20} alt="" /> Watch Demo
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta;