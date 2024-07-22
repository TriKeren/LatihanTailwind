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
                            <img className="text-[#344051] mr-1 mt-1" src="/public/assets/corporate/play.svg" width={20} alt="" /> Watch Demo</button>
                        <button className="bg-transparent md:w-fit w-full text-center flex flex-row items-center text-[#344051] whitespace-nowrap px-[105px] md:px-4 py-3 text-base rounded-lg border-2 border-[#344051] transition-colors duration-300 ease-in-out hover:bg-[#344051] hover:text-white group">
                            <svg width="23px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-[#344051] group-hover:text-white mr-0.5 mt-[1px]">
                                <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta;