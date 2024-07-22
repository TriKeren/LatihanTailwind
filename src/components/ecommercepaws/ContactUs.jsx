import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full bg-blue-950 relative py-10 mt-10 px-5 w-screen-lg">
      <div className="flex gap-2 relative w-full md:w-auto flex-col mb-6">
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
            Get In Touch
          </a>
        </div>
        <div className="w-full border border-gray-500"></div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 lg:items-center">
        <div className="grid grid-cols-2 gap-2 w-full lg:flex-row lg:order-2">
          <div>
            <div className="lg:text-right">
              <div className="flex gap-3 mt-2 lg:justify-normal">
                <img
                  src="../../../public/assets/ecommercePaws/email.svg"
                  alt="iconTwitter"
                  width={20}
                  height={20}
                />
              </div>
              <div className="py-2 lg:text-left">
                <h2 className="text-white font-semibold">Email</h2>
                <p className="text-gray-300">
                  Our friendly team is here to help.
                </p>
                <p className="text-white font-semibold">hello@pawsnplay.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:text-right">
              <div className="flex gap-3 mt-2 lg:justify-normal">
                <img
                  src="../../../public/assets/ecommercePaws/livechat.svg"
                  alt="iconTwitter"
                  width={20}
                  height={20}
                />
              </div>
              <div className="py-2 lg:text-left">
                <h2 className="text-white font-semibold">Live chat</h2>
                <p className="text-gray-300">
                  Our friendly team is here to help.
                </p>
                <p className="text-white font-semibold">Start new chat</p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:text-right">
              <div className="flex gap-3 mt-2 lg:justify-normal">
                <img
                  src="../../../public/assets/ecommercePaws/office.svg"
                  alt="iconTwitter"
                  width={20}
                  height={20}
                />
              </div>
              <div className="py-2 lg:text-left">
                <h2 className="text-white font-semibold">Office</h2>
                <p className="text-gray-300">
                  Come say hello at our office HQ.
                </p>
                <p className="text-white font-semibold">
                  123, Yaya Abatan st, Ogba Lagos.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:text-right">
              <div className="flex gap-3 mt-2 lg:justify-normal">
                <img
                  src="../../../public/assets/ecommercePaws/phone.svg"
                  alt="iconTwitter"
                  width={20}
                  height={20}
                />
              </div>
              <div className="py-2 lg:text-left">
                <h2 className="text-white font-semibold">Phone</h2>
                <p className="text-gray-300">Mon-Fri from 8am to 5pm.</p>
                <p className="text-white font-semibold">+234 901234 384</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white text-black p-8 rounded-lg shadow-lg w-full lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
            <div>
              <label className="block text-gray-700">First name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="you@company.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-gray-700">
              You agree to our friendly{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>
              .
            </label>
          </div>
          <button className="w-full py-3 bg-blue-950 text-white rounded-lg font-semibold">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
