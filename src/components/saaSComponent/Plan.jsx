const Plan = () => {
    return (
        <div className="bg-white py-12 md:py-16 lg:py-12">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1 className="text-5xl md:text-6xl font-bold text-center text-[#212529] mb-5">Choose Your Plan</h1>
                <p className="text-lg md:text-xl lg:text-lg lg:px-32 text-center text-[#212529] mb-10">
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex overflow-x-auto space-x-4 md:space-x-8 w-full md:w-auto">
                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Free</h2>
                            <h2 className="text-2xl font-semibold mb-4">$0</h2>
                            <h3 className="text-base font-medium mb-4">Capture ideas and find them quickly</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Personal</h2>
                            <h2 className="text-2xl font-semibold mb-4">$11.99</h2>
                            <h3 className="text-base font-medium mb-4">Keep home and family on track</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transform duration-500 min-w-[280px] md:min-w-[300px] hover:bg-[#043873] hover:text-white">
                            <h2 className="text-2xl font-semibold mb-4">Organization</h2>
                            <h2 className="text-2xl font-semibold mb-4">$49.99</h2>
                            <h3 className="text-base font-medium mb-4">Capture ideas and find them quickly</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Sync unlimited devices
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    10 GB monthly uploads
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    200 MB max. note size
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Customize Home dashboard and access extra widgets
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Connect primary Google Calendar account
                                </li>
                                <li className="flex items-center gap-2 hover:fill-[#FFE492]">
                                    <img className="transition-colors duration-300" src="public/assets/saaS-landingpages/centang2.svg" alt="check icon"/>
                                    Add due dates, reminders, and notifications to your tasks
                                </li>
                            </ul>
                            <button className="px-4 py-2 font-medium bg-[#FFE492] text-[#043873] rounded hover:bg-[#4F9CF9] hover:text-[#FFE492] transition-colors duration-300">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
