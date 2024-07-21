const NewsLetter = () => {
    return (
        <>
            <div className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:px-24 lg:mx-auto">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="bg-[url(/public/assets/corporate/bg-news.png)] md:py-16 lg:px-8 py-10 px-4 w-full lg:rounded-3xl">
                            <div className="w-full md:w-[80%] lg:w-2/3">
                            <h1 className="text-2xl md:text-4xl font-semibold text-[#002966] mb-4">Enter your e-mail address and get started for free</h1>
                            <p className="mb-6 text-[#002966] md:text-xl lg:mr-36">Stay up to date with the most relevant information, our new collections, news and special offers!</p>
                            <input
                                type="email"
                                placeholder="Your e-mail address"
                                className="bg-white border rounded-lg py-2 px-4 text-[#637083] md:text-lg focus:outline-none focus:border-[#1A75FF] w-full md:w-1/2 md:mr-4"
                            />
                            <button className="mt-4 bg-[#1A75FF] md:w-fit w-full text-white md:text-lg px-4 py-2 text-base rounded-lg">Subscribe</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsLetter;