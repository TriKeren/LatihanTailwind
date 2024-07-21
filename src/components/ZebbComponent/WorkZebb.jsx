const WorkZebb = () => {
    return ( 
        <div className="max-w-screen-xl mx-auto mt-36 lg:mt-40">
            <div className="flex justify-center text-center">
                <h1 className="text-4xl font-bold">
                    Some of Our <span></span>
                    <span className="relative inline-block">
                        Previous Work <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>

            <div className="flex justify-center items-center mt-5">
                <div className="flex gap-2">
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">All</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">Ilustration</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">App</h1>
                    <h1 className="font-medium hover:bg-[#FF5678] hover:text-white duration-300 px-2">Branding</h1>
                </div>
            </div>
            
            <div className="flex justify-center mt-14 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 px-5 w-11/12">
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work1.png" alt=""/>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work2.png" alt=""/>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work3.png" alt=""/>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work4.png" alt=""/>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work5.png" alt=""/>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-full" src="/public/assets/ZebbDigitalAgency/work6.png" alt=""/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 lg:mt-16">
                <button className="p-2 bg-[#020E35] text-white font-medium px-5 lg:px-16">See More</button>
            </div>
        </div>
     );
}
 
export default WorkZebb;