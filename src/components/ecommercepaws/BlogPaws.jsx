import React from "react";
import { Link } from "react-router-dom";

const BlogPaws = () => {
  return (
    <div className="bg-white relative  mt-10 px-5 w-screen-lg">
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
            Blog
          </a>
        </div>
        <div className="w-full border border-gray-300 mb-4"></div>
      </div>
      <div className="flex gap-6 lg:max-w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-black font-bold text-xl lg:text-4xl">
            Milestone: 20,000 Pets Treated
          </h2>
          <div className="w-full border border-gray-100"></div>
          <p className="text-gray-500">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat. Eget quis mi enim, leo lacinia
            pharetra, semper. Eget in volutpat mollis at volutpat lectus velit,
            sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at
            habitant diam at. Suscipit tristique risus, at donec. In turpis vel
            et quam imperdiet. Ipsum molestie aliquet sodales id est ac
            volutpat.
          </p>
          <h2 className="text-black font-bold text-xl lg:text-2xl">Renewed target</h2>
          <p className="text-gray-500">
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
            ac.
          </p>
          <div className="mt-4 lg:mt-10">
          <Link
          to="/"
          className="hover:text-white py-4 px-5 bg-blue-950 text-white rounded-lg"
        >
          Read More
        </Link>
        </div>
        </div>
        <div className="relative lg:flex items-center w-full h-[500px] overflow-hidden hidden lg:py-4 lg:justify-center">
          <img
            src="../../../public/assets/ecommercePaws/blog.png"
            alt="Blog"
            className="object-contain h-[100%] w-[100%] lg:object-cover"
          />
          <button className="absolute">
              <img
                src="../../../public/assets/ecommercePaws/playbutton.svg"
                alt="Play button"
                className="w-16 h-16"
              />
            </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPaws;
