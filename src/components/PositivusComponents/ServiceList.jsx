import React from 'react';
import Service from './Service';

const ServiceList = () => {
    
    const services = [
        {
            imgURL:"/public/assets/positivus/service1.png",
            title: "Search engine optimize",
            btn: "learn more",
            colors:"bg-[#F3F3F3]",
            titleColor:"black",
        },
        {
            imgURL: "/public/assets/positivus/service2.png",
            title: "Pay-per-click advertising",
            btn: "learn more",
            colors:"bg-[#B9FF66]",
            titleColor:"white",
        },
        {
            imgURL: "/public/assets/positivus/service3.png",
            title: "search engine optimize",
            btn: "learn more",
            colors:"bg-[#191A23]",
            titleColor:"white",
        },
        {
            imgURL: "/public/assets/positivus/service4.png",
            title: "Social Media Marketing",
            btn: "learn more",
            colors:"bg-white",
            titleColor:'green',
        },
        {
            imgURL: "/public/assets/positivus/service5.png",
            title: "Content Creation",
            btn: "learn more",
            colors:"bg-[#B9FF66]",
            titleColor:'white',
        },
        {
            imgURL: "/public/assets/positivus/service6.png",
            title: "Analytics and Tracking",
            btn: "learn more",
            colors:"bg-[#191A23]",
            titleColor:'white',
        },
    ];
    
    return (
        <div className="px-4 md:px-24 py-2 lg:mt-3 lg:max-w-screen-xl mx-auto">
            <div className="flex w-full lg:justify-start flex-col" id="service">
                <header className="w-full flex flex-wrap flex-1 gap-7 justify-center lg:justify-start mt-3">
                    <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 bg-[#B9FF66]">
                        Services
                    </h1>
                    <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
                        At our digital marketing agency, we offer a range of services to help
                        businesses grow and succeed online. These services include:
                    </p>
                </header>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col justify-between p-[40px] border rounded-[30px] border-b-4 border-r-4 border-black ${item.colors}`}
                        >
                            <Service {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceList;
