import { useState, useEffect, useRef } from 'react';

const ContactZebb = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const formRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const formObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setFormVisible(true);
                    } else {
                        setFormVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setImageVisible(true);
                    } else {
                        setImageVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (formRef.current) {
            formObserver.observe(formRef.current);
        }

        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        return () => {
            if (formRef.current) {
                formObserver.unobserve(formRef.current);
            }
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        };
    }, []);

    return ( 
        <div className="max-w-screen-xl mx-auto flex justify-center mt-10 lg:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 rounded-lg">
                <div className={`flex justify-center transition-opacity duration-700 ${imageVisible ? 'opacity-100' : 'opacity-0'}`} ref={imageRef}>
                    <img src="/public/assets/ZebbDigitalAgency/LogoHero.png" className="w-11/12 mx-10 mt-16" alt="" />
                </div>
                <div ref={formRef} className={`mx-14 text-black transition-transform duration-500 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-black flex justify-center lg:justify-start text-center lg:text-start">
                        <h1 className="text-3xl font-bold w-80">
                            Need Help Making Coffee? <span></span>
                            <span className="relative inline-block">
                                Contact Us <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-14">
                        <form action="" className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-poppins font-medium">Name : </label>
                                <input id="name" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="font-poppins font-medium">Email : </label>
                                <input id="email" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="font-poppins font-medium">Message : </label>
                                <textarea id="message" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>

                            <div className="">
                                <button className="p-3 bg-[#020E35] text-white font-medium px-5 lg:px-16">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactZebb;
