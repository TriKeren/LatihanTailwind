const Contact = () => {
    return (
      <div className="px-4 md:px-24 py-2 lg:mt-3">
        <header className="flex w-full lg:flex-row flex-col items-center gap-5 mr-auto">
          <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kanit">
            Contact-Us
          </h1>
          <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </header>
  
        <div className="flex flex-col mt-10 lg:justify-between lg:flex-row bg-slate-100 md:p-[20px] p-[12px] lg:p-[30px] h-auto relative rounded-[30px]">
          <div className="flex flex-col w-full lg:w-auto lg:mr-auto">
            <div className="flex gap-[30px] w-full text-[24px] max-sm:text-[20px] font-light">
              <div className="flex gap-2">
                <input type="radio" name="option" className="w-[20px]" />
                <label>Say Hi</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="option" className="w-[20px]" />
                <label>Get a Quote</label>
              </div>
            </div>
  
            <div className="mt-5">
              <div className="flex flex-col gap-2 mt-3">
                <label className="text-slate-800 font-light">Name</label>
                <input
                  placeholder="What's your good name?"
                  type="text"
                  className="input font-light lg:w-[560px] border border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <label className="text-slate-800 font-light">Email*</label>
                <input
                  placeholder="Enter your email address"
                  type="email"
                  className="input font-light lg:w-[560px] border border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <label className="text-slate-800 font-light">Message</label>
                <textarea
                  placeholder="Message"
                  type="text"
                  className="max-sm:h-[180px] pl-5 pt-5 rounded-[20px] lg:h-[220px] font-light lg:w-[560px] border border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <button className="text-white bg-[#191A23] py-5 rounded-[10px] font-light bg-dark">
                  Send Message
                </button>
              </div>
            </div>
          </div>
  
          <div className="hidden lg:block lg:ml-auto lg:flex-shrink-0">
            <img src="/public/assets/positivus/contact.png" alt="banner" className="w-[649.86px] object-right object-contain" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  