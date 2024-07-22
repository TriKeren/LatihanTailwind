import React from "react";

const AboutusPaws = () => {
  return (
    <div className="bg-white relative mt-10 px-5 w-screen-lg">
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
            About Us
          </a>
        </div>
        <div className="w-full border border-gray-300"></div>
      </div>
      <div className="flex gap-6 lg:max-w-full lg:items-center">
        <div className="flex flex-col gap-4 w-full text-gray-500">
          <p>
            At Paws n’ Play, our journey began with a simple yet profound love
            for animals. Inspired by the unwavering companionship and joy they
            bring to our lives, we embarked on a mission to create a haven where
            pets and their owners alike could experience unparalleled happiness
            and care.
          </p>
          <p>
            Driven by our passion for animal welfare, we hand-select each
            product and service with meticulous attention to quality and
            sustainability. From nutritious food and enriching toys to expert
            grooming and healthcare, every offering is carefully curated to meet
            the unique needs of our beloved furry friends.
          </p>
          <p>
            But our commitment doesn't end there. We're dedicated to fostering a
            community that celebrates the bond between pets and their human
            companions. Through educational resources, compassionate support,
            and memorable experiences, we strive to empower pet owners to
            provide the best possible care for their furry family members.
          </p>
          <p>
            At Paws n’ Play, customer satisfaction isn't just a goal – it's our
            guiding principle. We go above and beyond to ensure every
            interaction leaves tails wagging and hearts smiling. From
            personalized recommendations to attentive service, we're here to
            make your journey with your pet as joyful and fulfilling as
            possible.
          </p>
          <p>
            Join us in our mission to create a world where every pet is
            cherished, every need is met, and every tail wags with happiness.
            Welcome to Paws n’ Play, where pets are family, and love knows no
            bounds.
          </p>
        </div>
        <div className="w-full h-[500px] overflow-hidden rounded-lg hidden lg:block">
          <img
            src="../../../public/assets/ecommercePaws/aboutus.png"
            alt="aboutUs"
            className="object-contain h-[100%] w-[100%] lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusPaws;
