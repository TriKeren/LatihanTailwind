import { useEffect, useRef } from 'react';

const Blog = () => {
    const blogItem1Ref = useRef(null);
    const blogItem2Ref = useRef(null);
    const blogItem3Ref = useRef(null);
    const loadMoreButtonRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                } else {
                    entry.target.classList.add('opacity-0', 'translate-y-10');
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        const elementsToObserve = [
            blogItem1Ref.current,
            blogItem2Ref.current,
            blogItem3Ref.current,
            loadMoreButtonRef.current
        ];

        elementsToObserve.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            if (observer) {
                elementsToObserve.forEach(element => {
                    if (element) observer.unobserve(element);
                });
            }
        };
    }, []);

    return (
        <>
            <section id='blog' className="mt-20 px-4 lg:max-w-screen-xl lg:mx-auto lg:px-24 lg:mt-28">
                <div className="container">
                    <div className="w-full lg:flex items-center justify-center">
                        <div className="text-center">
                            <span className="bg-[#F0F6FF] text-[#0052CC] font-medium py-1 px-3 rounded-2xl">Blog</span>
                            <h1 className="text-[#141C24] mt-2 font-bold text-2xl md:text-4xl">Our fresh news</h1>
                            <p className="font-medium mt-2 text-[#344051] md:text-xl lg:px-44">
                                Our blog is more than just a collection of articles - its a hub of ideas, inspiration, and thought-provoking discussions.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-12 justify-center flex flex-col">
                        <div className="lg:flex lg:gap-4">
                            <div
                                ref={blogItem1Ref}
                                className="flex flex-col mt-10 p-4 rounded-lg opacity-0 translate-y-10 transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-105"
                            >
                                <img src="/public/assets/corporate/blog_1.png" alt="" className="rounded-t-lg" />
                                <div className="mt-4 flex flex-row">
                                    <img className="w-10" src="/public/assets/corporate/avatar.svg" alt="" />
                                    <div className="ml-2 gap-1 flex flex-col">
                                        <h3 className="text-[#344051] font-medium text-sm">Jenny Wilson</h3>
                                        <p className="text-[#637083] font-light text-xs">May 9, 2023</p>
                                    </div>
                                </div>
                                <h1 className="text-[#141C24] font-semibold text-xl pr-4 mt-3 md:text-3xl">Meet a web designer in his studio in Amsterdam</h1>
                                <p className="text-[#344051] font-normal mt-2 md:text-lg">Well get to know the designer and their design philosophy, as well as take a look...</p>
                                <div className="mt-4 flex flex-row gap-2">
                                    <span className="bg-[#E5F4FF] text-[#004ECC] text-sm font-medium py-1 px-2 rounded-xl">UI/UX</span>
                                    <span className="bg-[#E5F4FF] text-[#0077CC] text-sm font-medium py-1 px-2 rounded-xl">Studio</span>
                                    <span className="bg-[#E5F4FF] text-[#0099CC] text-sm font-medium py-1 px-2 rounded-xl">Web Design</span>
                                    <span className="bg-[#F2F4F7] text-[#344051] text-sm font-medium py-1 px-2 rounded-xl">+2</span>
                                </div>
                            </div>
                            <div
                                ref={blogItem2Ref}
                                className="flex flex-col mt-10 p-4 rounded-lg opacity-0 translate-y-10 transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-105"
                            >
                                <img src="/public/assets/corporate/blog_2.png" alt="" className="rounded-t-lg" />
                                <div className="mt-4 flex flex-row">
                                    <img className="w-10" src="/public/assets/corporate/avatar.svg" alt="" />
                                    <div className="ml-2 gap-1 flex flex-col">
                                        <h3 className="text-[#344051] font-medium text-sm">Jenny Wilson</h3>
                                        <p className="text-[#637083] font-light text-xs">May 9, 2023</p>
                                    </div>
                                </div>
                                <h1 className="text-[#141C24] font-semibold text-xl pr-4 mt-3 md:text-3xl">The Evolution of UI/UX Design: From Skeuomorphism to Flat Design</h1>
                                <p className="text-[#344051] font-normal mt-2 md:text-lg">Discussing the shift from realistic designs to minimalistic, flat designs.</p>
                                <div className="mt-4 flex flex-row gap-2">
                                    <span className="bg-[#E5F4FF] text-[#004ECC] text-sm font-medium py-1 px-2 rounded-xl">UI/UX</span>
                                    <span className="bg-[#E5F4FF] text-[#0077CC] text-sm font-medium py-1 px-2 rounded-xl">Studio</span>
                                    <span className="bg-[#E5F4FF] text-[#0099CC] text-sm font-medium py-1 px-2 rounded-xl">Web Design</span>
                                    <span className="bg-[#F2F4F7] text-[#344051] text-sm font-medium py-1 px-2 rounded-xl">+2</span>
                                </div>
                            </div>
                            <div
                                ref={blogItem3Ref}
                                className="flex flex-col mt-10 p-4 rounded-lg opacity-0 translate-y-10 transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-105"
                            >
                                <img src="/public/assets/corporate/blog_3.png" alt="" className="rounded-t-lg" />
                                <div className="mt-4 flex flex-row">
                                    <img className="w-10" src="/public/assets/corporate/avatar.svg" alt="" />
                                    <div className="ml-2 gap-1 flex flex-col">
                                        <h3 className="text-[#344051] font-medium text-sm">Jenny Wilson</h3>
                                        <p className="text-[#637083] font-light text-xs">May 9, 2023</p>
                                    </div>
                                </div>
                                <h1 className="text-[#141C24] font-semibold text-xl pr-4 mt-3 md:text-3xl">The Importance of User-Centered Design in IT Projects</h1>
                                <p className="text-[#344051] font-normal mt-2 md:text-lg">Exploring the significance of putting the user first in IT projects</p>
                                <div className="mt-4 flex flex-row gap-2">
                                    <span className="bg-[#E5F4FF] text-[#004ECC] text-sm font-medium py-1 px-2 rounded-xl">UI/UX</span>
                                    <span className="bg-[#E5F4FF] text-[#0077CC] text-sm font-medium py-1 px-2 rounded-xl">Studio</span>
                                    <span className="bg-[#E5F4FF] text-[#0099CC] text-sm font-medium py-1 px-2 rounded-xl">Web Design</span>
                                    <span className="bg-[#F2F4F7] text-[#344051] text-sm font-medium py-1 px-2 rounded-xl">+2</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <button
                                ref={loadMoreButtonRef}
                                className="bg-[#1A75FF] md:w-fit w-full text-white whitespace-nowrap px-8 py-3 text-base rounded-lg border-2 border-transparent transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#1A75FF] hover:border-[#1A75FF] opacity-0 translate-y-10"
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;