import { useState } from "react";

const Faq = () => {
    const [paragraph, setParagraph] = useState([false, false, false, false, false]);

    const handleParagraph = (index) => {
        setParagraph(prevState =>
            prevState.map((visible, i) => (i === index ? !visible : visible))
        );
    };

    const texts = [
        "01. What are properties in Figma?",
        "02. How Whitespace UI kit and Design System can help me?",
        "03. What is your return policy?",
        "04. How can I contact customer support?",
        "05. What payment methods do you accept?"
    ]

    const paragraphs = [
        "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
        "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
        "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
        "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
        "The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars."
    ]

    return (
        <>
            <div className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full items-center px-4 lg:px-24">
                        <div className="text-center">
                            <h1 className="text-[#141C24] text-2xl font-semibold">Frequently Asked Questions</h1>
                            <p className="text-[#344051] mt-2 md:text-xl md:mx-36">We tried to answer most common questions, if you have any additional, please get in touch with our friendly team</p>

                        </div>
                        <div className="mt-16 md:mx-20">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div key={index} className="border border-[#637083] rounded-lg justify-between md:px-4 px-4 my-4">
                                    <div className="flex justify-between py-4">
                                        <p className="text-lg text-[#141C24] font-semibold md:text-xl mt-1">{texts[index]}</p>
                                        <button
                                            onClick={() => handleParagraph(index)}
                                            className="py-2 rounded"
                                        >
                                            {paragraph[index] ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12L17 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#637083" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12H12M12 12H17M12 12V7M12 12V17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#637083" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    {paragraph[index] && (
                                        <p className="mb-4 text-base text-[#344051] font-light md:text-xl">
                                            {paragraphs[index]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center text-center">
                            <div className="bg-[#F0F6FF] lg:w-1/2 lg:h-1/2 md:w-2/3 md:h-2/3 p-4 rounded-3xl">
                                <h1 className="text-2xl font-semibold text-[#002966] mb-4">Still have a questions?</h1>
                                <p className="mb-6 text-[#002966]">Were sorry we couldnt provide you with the information you were looking for. Please contact us and well be happy to help.</p>
                                <div className="flex justify-center">
                                    <button className="flex items-center bg-[#1A75FF] text-white whitespace-nowrap px-4 py-2 text-base rounded-lg">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" className="mt-[3px] mr-1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.83333 5.83334L8.99999 9.70833C9.88889 10.375 11.1111 10.375 12 9.70833L17.1667 5.8333M4.66667 15.8333H16.3333C17.2538 15.8333 18 15.0871 18 14.1667V5.83334C18 4.91286 17.2538 4.16667 16.3333 4.16667H4.66667C3.74619 4.16667 3 4.91286 3 5.83334V14.1667C3 15.0871 3.74619 15.8333 4.66667 15.8333Z" stroke="white" />
                                        </svg>
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;