import { useState, useEffect, useRef } from 'react';

const WorkProcess = () => {
    const [paragraph, setParagraph] = useState([false, false, false, false, false]);
    const [activeIndex, setActiveIndex] = useState(null); 
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    const handleParagraph = (index) => {
        setParagraph(prevState =>
            prevState.map((visible, i) => (i === index ? !visible : false))
        );
        setActiveIndex(index);
    };

    const texts = [
        "01. Consultation",
        "02. Research and Strategy Development",
        "03. Implementation",
        "04. Monitoring and Optimization",
        "05. Reporting and Communication",
        "06. Continual Improvement"
    ];

    const paragraphs = [
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    ];

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                } else {
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        observerRef.current = new IntersectionObserver(handleIntersection, options);
        const elements = section.querySelectorAll('.WorkProcess-item, .WorkProcess-title, .WorkProcess-image, .WorkProcess-contact');
        elements.forEach(element => observerRef.current.observe(element));

        return () => {
            if (observerRef.current) {
                elements.forEach(element => observerRef.current.unobserve(element));
            }
        };
    }, []);

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

                    .font-space-grotesk {
                        font-family: 'Space Grotesk', sans-serif;
                    }
                `}
            </style>
            <section id="WorkProcess" className="font-space-grotesk mt-[30px] lg:mt-16 lg:max-w-screen-xl lg:mx-auto" ref={sectionRef}>
                <div className="container px-4 lg:px-24">
                    <div className="w-full flex flex-col items-center lg:items-start">
                        <header className="flex w-full lg:flex-row flex-col items-center gap-5">
                            <h1 className="text-[32px] lg:text-[40px] bg-[#B9FF66] px-4 py-2 rounded-[10px]">
                                <span className="block text-center lg:hidden">Our Working <br /> Process</span>
                                <span className="hidden lg:block">Our Working Process</span>
                            </h1>
                            <p className="text-xl lg:max-w-[50%] font-normal mt-[10px]">
                                Step-by-Step Guide to Achieving Your Business Goals
                            </p>
                        </header>
                        <div className="w-full md:mx-0 lg:mt-[20px]">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className={`WorkProcess-item border-b-4 border-[#141C24] rounded-[45px] md:px-4 px-4 my-[20px] transition-all duration-500 ease-in-out ${activeIndex === index ? 'bg-[#B9FF66]' : 'bg-white'} opacity-100 translate-y-10`}
                                >
                                    <div className="flex justify-between py-4">
                                        <p className="text-[18px] text-[#141C24] font-bold md:text-xl mt-1">{texts[index]}</p>
                                        <button
                                            onClick={() => handleParagraph(index)}
                                            className="py-2 rounded"
                                        >
                                            {paragraph[index] ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12L17 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#191A23" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12H12M12 12H17M12 12V7M12 12V17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#191A23" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${paragraph[index] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {paragraph[index] && (
                                            <p className="mb-4 text-base text-[#344051] font-light md:text-xl w-11/12">
                                                {paragraphs[index]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkProcess;
