const ContactZebb = () => {
    return ( 
        <div className="max-w-screen-xl mx-auto flex justify-center mt-10 lg:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 rounded-lg">
            <div className="flex justify-center">
              <img src="/public/assets/ZebbDigitalAgency/LogoHero.png" className="w-11/12 mx-10 mt-16" alt="" />
            </div>
          <div className=" mx-14 text-black">
            <div className="text-black flex justify-center lg:justify-start text-center lg:text-start">
            <h1 className="text-3xl font-bold w-80">
                Need Help Making Coffee? <span></span>
                    <span className="relative inline-block">
                        Contact Us <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                    </span>
                </h1>
            </div>

            <div className="mt-14">
              <form action="" className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-poppins font-medium">Name : </label>
                  <input id="name" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-poppins font-medium">Email : </label>
                  <input id="email" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-poppins font-medium">Message : </label>
                  <textarea id="message" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                </div>

                <div className="">
                    <button className="p-3 bg-[#020E35] text-white font-medium px-5 lg:px-16">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ContactZebb;