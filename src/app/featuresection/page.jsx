import React from "react";
import Image from "next/image";
import featureImage from "../../../public/feature.jpg";

export default function FeaturedProductSection() {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        {/* Left Side (Content - 1.618) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Best-Selling Mountain Bike 🏞
          </h2>
          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-gray-700 mb-6">
            Built for adventure, this mountain bike combines speed, comfort, and
            durability. Perfect for city streets or rugged trails, it’s your
            go-to ride for every terrain.
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Lightweight aluminum frame</li>
            <li>Shock-absorbing suspension</li>
            <li>21-speed gear system</li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary rounded-lg">Buy Now</button>
            <button className="btn btn-outline btn-primary rounded-lg">
              See Details
            </button>
          </div>
        </div>

        {/* Right Side (Image - 1) */}
        <div className="flex justify-center">
          <Image
            src={featureImage} // replace with your image
            alt="Mountain Bike"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
