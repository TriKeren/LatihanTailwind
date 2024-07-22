import { useEffect, useRef } from 'react';

const NewsLetter = () => {
    const newsLetterRef = useRef(null);

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

        if (newsLetterRef.current) {
            observer.observe(newsLetterRef.current);
        }
    }, []);

    return (
        <>
            <section
                ref={newsLetterRef}
                id="newsLetter"
                className="mt-14 lg:mt-16 lg:max-w-screen-xl lg:px-24 lg:mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
                <div className="container">
                    <div className="flex justify-center">
                        <div className="bg-[url(/public/assets/corporate/bg-news.png)] md:py-16 md:px-8 py-12 px-4 w-full lg:rounded-3xl">
                            <div className="w-full md:w-[80%] lg:w-2/3">
                                <h1 className="text-3xl md:text-4xl font-semibold text-[#002966] mb-4">Enter your e-mail address and get started for free</h1>
                                <p className="mb-6 text-[#002966] md:text-xl lg:mr-36">Stay up to date with the most relevant information, our new collections, news and special offers!</p>
                                <input
                                    type="email"
                                    placeholder="Your e-mail address"
                                    className="bg-white border rounded-lg py-2.5 px-4 text-[#637083] md:text-lg focus:outline-none focus:border-[#1A75FF] w-full md:w-1/2 md:mr-4"
                                />
                                <button className="mt-3 md:mt-0 bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap md:px-8 py-2.5 text-base rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsLetter;