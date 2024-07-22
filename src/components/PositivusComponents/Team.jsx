import TeamList from "./TeamList";

const Team = () => {

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

    return ( 
        <div className="px-4 md:px-24 py-2 lg:mt-10 lg:max-w-screen-xl mx-auto">
            <header className="flex w-full lg:flex-row flex-col items-center gap-5 mr-auto">
                <h1 className="lg:text-[48px] text-[38px] font-bold bg-[#B9FF66] px-4 text-kanit mt-10">
                    Team
                </h1>
                <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </p>
            </header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {team.map((items, index) => (
                    <div key={index} className="flex items-center border border-r-4 border-b-8 rounded-[50px] p-5 hover:bg-green duration-300 group">
                        <TeamList {...items} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
