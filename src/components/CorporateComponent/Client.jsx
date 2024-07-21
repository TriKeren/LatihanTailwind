const Client = () => {
    return (
        <>
            <div className="mt-20 lg:mt-16 lg:max-w-screen-xl lg:mx-auto">
                <div className="container">
                    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-24 text-center">
                        <h1 className="text-[#141C24] mt-2 font-bold text-2xl md:text-4xl">Our Client</h1>
                        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:w-3/4 lg:w-full">
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/skyewave.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/noviexar.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/nexacore.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/elitexcel.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/zenithron.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/ennovatek.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/infinitumix.svg" alt="Client Logo" />
                            <img className="w-40 md:w-48 mx-auto" src="/public/assets/corporate/spectrafuse.svg" alt="Client Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;