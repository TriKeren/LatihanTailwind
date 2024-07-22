import React from "react";

const Ourteam = () => {
  return (
    <div className="bg-white relative  mt-10 px-2 w-screen-lg">
      <div className="flex gap-2 relative w-full md:w-auto flex-col mb-6">
        <div className="flex gap-4 items-center">
          <img
            src="../../../public/assets/ecommercePaws/Vectorkakiblack.svg"
            alt="iconkaki"
            width={40}
            height={40}
          />
          <a
            href="#"
            className="text-black text-2xl font-semibold border-collapse"
          >
            Our Team
          </a>
        </div>
        <div className="w-full border border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <div className="grid grid-cols-2 gap-2 w-full lg:flex-row lg:gap-4 lg:grid-cols-4">
          <div>
            <img
              src="../../../public/assets/ecommercePaws/ourteam1.png"
              alt="Olivia"
              className="flex items-center overflow-hidden lg:h-[300px]"
            />
            <div className="text-center lg:text-left">
              <h2 className="font-semibold">Dr. Olivia Rhye</h2>
              <p className="text-gray-400">Senior Veterinarian</p>
              <div className="flex gap-3 mt-2 justify-center lg:justify-normal">
                <img
                  src="../../../public/assets/ecommercePaws/twitter.svg"
                  alt="iconTwitter"
                  width={20}
                  height={20}
                />
                <img
                  src="../../../public/assets/ecommercePaws/linkedin.svg"
                  alt="iconLinkedin"
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
          <div>
            <img
              src="../../../public/assets/ecommercePaws/ourteam2.png"
              alt="Phoenix"
              className="flex items-center overflow-hidden lg:h-[300px]"
            />
            <div className="text-center lg:text-left">
            <h2 className="font-semibold">Asst. Phoenix Baker</h2>
            <p className="text-gray-400">Asst. Veterinarian</p>
            <div className="flex gap-3 mt-2 justify-center lg:justify-normal">
              <img
                src="../../../public/assets/ecommercePaws/twitter.svg"
                alt="iconTwitter"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/ecommercePaws/linkedin.svg"
                alt="iconLinkedin"
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
          <div>
            <img
              src="../../../public/assets/ecommercePaws/ourteam3.png"
              alt="Lona"
              className="flex items-center overflow-hidden lg:h-[300px]"
            />
            <div className="text-center lg:text-left">
            <h2 className="font-semibold">Lona Steiner</h2>
            <p className="text-gray-400">Residen Veterinarian</p>
            <div className="flex gap-3 mt-2 justify-center lg:justify-normal">
              <img
                src="../../../public/assets/ecommercePaws/twitter.svg"
                alt="iconTwitter"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/ecommercePaws/linkedin.svg"
                alt="iconLinkedin"
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
          <div>
            <img
              src="../../../public/assets/ecommercePaws/ourteam4.png"
              alt="Demi"
              className="flex items-center overflow-hidden lg:h-[300px]"
            />
            <div className="text-center lg:text-left">
            <h2 className="font-semibold">Demi Wilkinson</h2>
            <p className="text-gray-400">Intern Veterinarian</p>
            <div className="flex gap-3 mt-2 justify-center lg:justify-normal">
              <img
                src="../../../public/assets/ecommercePaws/twitter.svg"
                alt="iconTwitter"
                width={20}
                height={20}
              />
              <img
                src="../../../public/assets/ecommercePaws/linkedin.svg"
                alt="iconLinkedin"
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
      </div>
    </div>
  );
};

export default Ourteam;
