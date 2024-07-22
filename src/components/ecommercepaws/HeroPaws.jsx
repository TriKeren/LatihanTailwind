import React from "react";

const HeroPaws = () => {
  return (
    <div className="bg-black relative h-screen">
        <img src="../../../public/assets/ecommercePaws/background.png" alt="backgroundHero" className="object-cover h-[100%] w-[100%] absolute" width={100} height={100}/>
      <div className="absolute z-10 h-[100%] flex justify-center flex-col gap-10 px-6">
        <div>
          <h1 className="text-3xl font-semibold mb-4 w-4/5 text-white lg:text-5xl lg:w-1/2">Pawsitively Perfect: Where Every Pet's Dream Comes True!</h1>
          <p className="text-white font-semibold font-sans lg:text-xl lg:w-1/2">
            Welcome to Paws n’ Play, the ultimate destination for pet lovers!
            Explore a world of tail-wagging joy and furry companionship with our
            wide range of products and services. From pampering essentials to
            playful toys, we're here to make every moment with your pet
            pawsitively perfect!"
          </p>
        </div>
        <button className="px-8 py-4 text-white border border-white rounded-full font-bold flex gap-2 max-w-fit">
          Shop Now
          <img
            src="../../../public/assets/ecommercePaws/vectorkaki.svg"
            alt="iconkaki"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default HeroPaws;
