import { useEffect, useRef } from 'react';

const Features = () => {
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

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
        const elements = section.querySelectorAll('.feature-item, .feature-title, .feature-image');
        elements.forEach(element => observerRef.current.observe(element));

        return () => {
            if (observerRef.current) {
                elements.forEach(element => observerRef.current.unobserve(element));
            }
        };
    }, []);

    return (
        <>
            <section id="features" className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto" ref={sectionRef}>
                <div className="container">
                    <div className="w-full lg:flex items-center justify-center lg:px-24">
                        <div className="text-center feature-title opacity-0 translate-y-10 transition-opacity duration-500 ease-in-out">
                            <span className="bg-[#F0F6FF] text-[#0052CC] font-medium py-1 px-3 rounded-2xl">Our Features</span>
                            <h1 className="text-[#141C24] mt-2 font-bold text-2xl md:text-4xl">Our key benefits</h1>
                            <p className="font-medium mt-2 text-[#344051] md:text-xl">Our services are designed to cater to your specific needs and goals</p>
                        </div>
                    </div>
                    <div className="w-full lg:flex items-center lg:px-24">
                        <div className="self-start w-full px-4 lg:w-1/2">
                            <div className="feature-item opacity-0 translate-y-10 transition-opacity duration-500 ease-in-out flex flex-col mt-12">
                                <img className="w-10" src="/public/assets/corporate/tick.svg" alt="" />
                                <h1 className="mt-4 text-[#002966] font-semibold text-xl">Project Structure</h1>
                                <p className="mt-2 text-[#002966] font-regular text-base">Check out our proven methods, guides, and exercises that help make work better, and people happier.</p>
                            </div>
                            <div className="feature-item opacity-0 translate-y-10 transition-opacity duration-500 ease-in-out flex flex-col mt-12">
                                <img className="w-10" src="/public/assets/corporate/phone.svg" alt="" />
                                <h1 className="mt-4 text-[#002966] font-semibold text-xl">Responsive</h1>
                                <p className="mt-2 text-[#002966] font-regular text-base">This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.</p>
                            </div>
                            <div className="feature-item opacity-0 translate-y-10 transition-opacity duration-500 ease-in-out flex flex-col mt-12">
                                <img className="w-10" src="/public/assets/corporate/message.svg" alt="" />
                                <h1 className="mt-4 text-[#002966] font-semibold text-xl">Messaging</h1>
                                <p className="mt-2 text-[#002966] font-regular text-base">On mobile, customers can send text, or audio messages to agents, like using any messaging app</p>
                            </div>
                        </div>
                        <div className="self-end flex justify-center w-full px-4 mt-12 lg:w-1/2">
                            <div className="flex flex-col feature-image opacity-0 translate-y-10 transition-opacity duration-500 ease-in-out">
                                <div className="flex gap-5 justify-center">
                                    <img className="w-[150px] h-[240px] md:w-[310px] lg:w-[220px] md:h-[510px]" src="/public/assets/corporate/features_1.png" alt="" />
                                    <img className="w-[150px] h-[240px] md:w-[310px] lg:w-[220px] md:h-[510px]" src="/public/assets/corporate/features_2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;