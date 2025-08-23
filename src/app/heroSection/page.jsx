import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/banner1.jpg";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-green-600">
            Ride Into Adventure
          </h1>
          <p className="mb-6 text-gray-700 text-sm md:text-lg">
            Discover premium bicycles for every terrain and lifestyle. Whether
            you’re exploring mountains, cruising city streets, or enjoying
            weekend getaways — we have the perfect ride for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/allproduct">
              <button className="btn btn-success btn-wide rounded-lg">
                🚴‍♂️ Shop Now
              </button>
            </Link>
            <Link href="/allproduct">
              <button className="btn btn-outline rounded-lg btn-wide border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={heroImage}
            alt="Bicycle"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
