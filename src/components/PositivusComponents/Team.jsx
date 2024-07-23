import React, { useState } from "react";
import TeamList from "./TeamList";

const Team = () => {
    const [showAll, setShowAll] = useState(false);

    const team = [
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team1.svg",
            name: "John Smith",
            job: "CEO and Founder",
            desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
        },
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team2.svg",
            name: "Jane Doe",
            job: "Chief Marketing Officer",
            desc: "8+ years of experience in branding and marketing. Skilled in social media strategy and market analysis."
        },
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team3.svg",
            name: "Robert Brown",
            job: "Lead Developer",
            desc: "7+ years of experience in web development. Specializes in front-end technologies and user experience design."
        },
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team4.svg",
            name: "Emily White",
            job: "Content Strategist",
            desc: "5+ years of experience in content creation and strategy. Expert in copywriting and content marketing."
        },
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team5.svg",
            name: "Michael Green",
            job: "SEO Specialist",
            desc: "6+ years of experience in SEO. Focused on on-page optimization, link building, and keyword research."
        },
        {
            icon: "/public/assets/positivus/link.svg",
            imgURL: "/public/assets/positivus/team6.svg",
            name: "Sarah Black",
            job: "PPC Manager",
            desc: "4+ years of experience in managing PPC campaigns. Proficient in Google Ads, Bing Ads, and social media advertising."
        }
    ];

    const displayedTeam = showAll ? team : team.slice(0, 4);

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
            <div className="font-space-grotesk px-4 md:px-24 py-2 mt-[30px] lg:mt-[30px] lg:max-w-screen-xl mx-auto">
                <header className="flex w-full lg:flex-row flex-col items-center gap-5 mr-auto">
                    <h1 className="mt-[30px] lg:text-[40px] text-[36px] bg-[#B9FF66] rounded-[7px] px-4">
                        Team
                    </h1>
                    <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal mt-[30px]">
                        Meet the skilled and experienced team behind our successful digital marketing strategies
                    </p>
                </header>
                <div className="relative mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {displayedTeam.map((items, index) => (
                            <div
                                key={index}
                                className="flex items-center border-r-2 border-b-4 border-black rounded-[50px] p-5"
                            >
                                <TeamList {...items} />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-full flex justify-center mt-10 lg:justify-end ">
                        <button
                            className="bg-[#191A23] text-white w-[300px] h-[68px] lg:px-6 lg:py-3 rounded-[14px] hover:bg-[#B9FF66] duration-300"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "See All Team"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
