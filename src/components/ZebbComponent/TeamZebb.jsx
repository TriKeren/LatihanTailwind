const TeamZebb = () => {
    return ( 
        <div className="max-w-screen-xl mx-auto mt-36 lg:mt-40">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold">
                    <span className="relative inline-block">
                        Meet Team <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>
            
            <div className="flex justify-center mt-14 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16  px-5">
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">Samantha Jones</h1>
                        <p className="text-center">Ilustrator</p>
                        <a href="">See Detail</a>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">Mark Ali</h1>
                        <p className="text-center">Owner Creative Director</p>
                        <a href="">See Detail</a>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">Davi John</h1>
                        <p className="text-center">Head Of Marketing</p>
                        <a href="">See Detail</a>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">John Daen</h1>
                        <p className="text-center">Graphic Designer</p>
                        <a href="">See Detail</a>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">Alice Kate</h1>
                        <p className="text-center">Social Media Manager</p>
                        <a href="">See Detail</a>
                    </div>
                    <div className="flex flex-col items-center gap-5 bg-white py-12 px-16 rounded-3xl shadow-sm shadow-black transform transition-transform duration-500 hover:scale-105">
                        <img className="w-20" src="/public/assets/ZebbDigitalAgency/User.png" alt=""/>
                        <h1 className="text-2xl font-medium">Jhang Yui</h1>
                        <p className="text-center">Web Designer and Developer</p>
                        <a href="">See Detail</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TeamZebb
;