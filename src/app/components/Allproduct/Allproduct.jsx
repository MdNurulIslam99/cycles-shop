import dbConnect from "@/lib/dbConnection";
import React from "react";
import ProductCard from "../Product/product";

export default async function Allproduct() {
  const allProductCollection = await dbConnect("products");
  const productDatas = await allProductCollection.find({}).toArray();

  // Convert to plain JSON so _id becomes a string
  const serializedProducts = productDatas.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return (
    <div className="w-11/12 mx-auto ">
      <div className="text-center py-5 space-y-3">
        <h1 className="text-3xl font-bold ">
          All Bicycles Available at CycleShop
        </h1>
        <p className="max-w-4xl mx-auto ">
          Explore our full range of bicycles at CycleShop. From mountain bikes
          to road bikes and hybrid bikes, find the perfect ride for commuting,
          fitness, or adventure. Check out detailed specs, colors, and prices
          for all available models.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto py-5">
        {serializedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
