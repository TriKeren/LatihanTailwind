const Hero = () => {
    return ( 
    <section className="px-4 md:px-24 py-2 lg:mt-3">
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="mt-9 order-2 md:order-1 md:w-1/2 px-0 lg:px-5 flex flex-col">
            <h1 className="text-[40px] md:text-[60px] font-bold mb-4 md:mb-6 w-full md:w-[531px] h-auto md:h-[231px]">
                Navigating the digital landscape for success
            </h1>
            <img src="/public/assets/positivus/hero.png" alt="Hero Image" className="w-full md:hidden mb-6" />
            <p className="text-[20px] mt-6 md:mt-5 mb-6 md:mb-8">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
      <div className="flex flex-col md:flex-row gap-2 lg:gap-3">
        <button className="py-3 px-6 bg-[#191A23] text-white font-bold rounded-lg hover:bg-[#B9FF66] transition duration-300">
          Book a consultation
        </button>
      </div>
    </div>
    <div className="order-1 md:order-2 md:w-1/2 mt-6 md:mt-12 flex justify-center">
      <img src="/public/assets/positivus/hero.png" alt="Hero Image" className="hidden md:block w-full md:max-w-lg" />
    </div>
  </div>
</section>

      

     );
}
 
export default Hero;