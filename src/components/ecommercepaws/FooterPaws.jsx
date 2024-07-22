import React from "react";

const FooterPaws = () => {
  return (
    <div className="bg-blue-950 relative w-screen-lg">
      <div className="w-full border border-gray-300 mb-6"></div>
      <div className="px-5 flex flex-col lg:flex-row">
        <div className="w-full">
          <h2 className="text-white font-semibold text-2xl">
            Join our newsletter
          </h2>
          <p className="text-gray-200">
            Be the first to receive latest updates on promo, sales and offers
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-5 lg:mt-0 gap-4 items-center lg:w-fit lg:px-10 ">
          <div className="rounded-lg bg-gray-300 lg:w-[300px] w-full">
            <input
              type="email"
              className="w-full p-2 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full py-2 bg-white text-blue-950 rounded-lg font-semibold lg:w-fit lg:h-fit lg:px-3">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-20 px-5 flex flex-col lg:flex-row gap-5 lg:gap-20">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <img
              src="../../../public/assets/ecommercePaws/vectorkaki.svg"
              alt="iconkaki"
              width={40}
              height={40}
            />
            <a
              href="#"
              className="text-white text-2xl font-semibold border-collapse"
            >
              Paws n'Play
            </a>
          </div>
          <p className="text-white">
            Where wagging tails and purring hearts reign supreme!
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 text-white lg:grid-cols-5 ">
          <div className="flex flex-col">
            <h3 className="font-bold">Shop</h3>
            <span>Pet Adoption</span>
            <span>Nutrition</span>
            <span>Pet Care</span>
            <span>Pet Food</span>
            <span>Pricing</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Company</h3>
            <span>About Us</span>
            <span>Careers</span>
            <span>Press</span>
            <span>News</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Services</h3>
            <span>Grooming</span>
            <span>Boarding</span>
            <span>Traaining</span>
            <span>Vetinary</span>
            <span>Support</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Social</h3>
            <span>Twitter</span>
            <span>Linkedln</span>
            <span>Facebook</span>
            <span>AngelList</span>
            <span>Dribble</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Legal</h3>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Licenses</span>
            <span>Settings</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 py-10 px-5">
        <div className="w-full border border-gray-500"></div>
        <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
          <h3 className="text-white text-center">
            &copy; 2024 Paws n’ Play. All rights reserved.
          </h3>
          <div className="flex gap-6 items-center justify-center">
            <img
              src="../../../public/assets/ecommercePaws/twitter.svg"
              alt="iconTwitter"
              width={20}
              height={20}
            />
            <img
              src="../../../public/assets/ecommercePaws/linkedin.svg"
              alt="iconLinkedln"
              width={20}
              height={20}
            />
            <img
              src="../../../public/assets/ecommercePaws/facebook.svg"
              alt="iconFacebook"
              width={20}
              height={20}
            />
            <img
              src="../../../public/assets/ecommercePaws/github.svg"
              alt="iconGithub"
              width={20}
              height={20}
            />
            <img
              src="../../../public/assets/ecommercePaws/angellist.svg"
              alt="iconAngelList"
              width={20}
              height={20}
            />
            <img
              src="../../../public/assets/ecommercePaws/dribble.svg"
              alt="iconDribble"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPaws;
