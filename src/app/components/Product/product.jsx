"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { image, company, brand, model, price, _id } = product;

  // Make sure image is valid
  const safeImage =
    typeof image === "string" && image.startsWith("http")
      ? image
      : "/fallback.jpg"; // Use a local fallback image

  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-60 md:h-72 lg:h-80">
        <Image
          src={safeImage}
          alt={`${brand || ""} ${model || ""}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="card-body p-4 md:p-6">
        <h2 className="card-title text-lg md:text-xl font-bold">
          {brand} {model}
        </h2>
        <p className="text-sm md:text-base text-gray-500">{company}</p>
        <p className="text-base md:text-lg font-semibold mt-2">${price}</p>
        <div className="card-actions mt-4">
          <Link href={`/allproduct/${_id}`}>
            <button className="btn btn-success btn-sm md:btn-md w-full rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
