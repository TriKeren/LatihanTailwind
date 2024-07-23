import React from "react";

const Service = ({ imgURL, title, btn, titleColor }) => {
    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className="w-full mb-4">
                <h1 className="inline-block px-2 py-1 text-[24px] lg:text-[28px] font-bold capitalize">
                    <span className={`${titleColor} inline-block px-2 py-1 rounded-[10px]`}>
                        {title.includes('<br>') ? (
                            title.split('<br>').map((part, index) => (
                                <React.Fragment key={index}>
                                    {part}
                                    {index < title.split('<br>').length - 1 && <br />}
                                </React.Fragment>
                            ))
                        ) : (
                            title
                        )}
                    </span>
                </h1>
            </div>
            <div className="w-full flex justify-end items-center mt-6 h-full">
                <img src={imgURL} alt={title} className="w-44 md:w-52 object-contain" />
            </div>
            <div className="w-full flex items-center justify-start pt-10">
                <img src="/public/assets/positivus/arrow.svg" alt="arrow" className="group-hover:origin-center group-hover:rotate-90 duration-200 w-[48px] h-[48px] px-3 py-3 bg-black rounded-full hover:origin-center rotate-6" />
                <button className="ml-3 text-sm font-bold border-none cursor-pointer hidden lg:block">
                    {btn}
                </button>
            </div>
        </div>
    );
}

export default Service;
