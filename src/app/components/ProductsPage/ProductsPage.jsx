"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-center py-10">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </p>
    );

  if (!products.length)
    return <p className="text-center py-10">No products found.</p>;

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="py-5 space-y-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Top Products of Cycle Shop
        </h2>
        <p className="max-w-6xl mx-auto ">
          Discover the best bicycles available in our collection! Our Top
          Products section features the six premium bikes carefully selected
          based on price and quality. Whether you’re looking for a
          high-performance mountain bike, a sleek road bike, or a versatile
          hybrid, these top picks combine style, durability, and performance to
          give you the ultimate riding experience. Explore now and find your
          perfect ride!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-xl p-4 flex flex-col items-center"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.model}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">{product.company}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
            <p className="font-bold mt-2">${product.price}</p>

            <Link href="/allproduct">
              <button className="btn btn-outline btn-primary rounded-lg mt-3">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
