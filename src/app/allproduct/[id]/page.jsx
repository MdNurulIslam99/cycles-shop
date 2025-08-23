import dbConnect from "@/lib/dbConnection";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function AllProductDetails({ params }) {
  const { id } = params;

  // Connect to MongoDB
  const productCollection = await dbConnect("products");

  // Fetch single product by _id
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="w-11/12 max-w-5xl mx-auto my-10 py-5 bg-base-200 shadow-lg p-5 rounded-lg grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.model}
          width={500}
          height={500}
          className="rounded-xl shadow-2xl object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          {product.brand} {product.model}
        </h1>
        <p className="text-gray-500 text-lg">{product.type} Bike</p>

        <div className="flex flex-wrap gap-2">
          <span className="badge badge-outline">
            Company: {product.company}
          </span>
          <span className="badge badge-outline">
            Frame: {product.frameSize}
          </span>
          <span className="badge badge-outline">
            Wheel: {product.wheelSize}
          </span>
          <span className="badge badge-outline">Gears: {product.gears}</span>
          <span className="badge badge-outline">
            Brakes: {product.brakeType}
          </span>
        </div>

        <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
        <p className="text-gray-700">{product.description}</p>

        <div className="mt-6 flex gap-4">
          <button className="btn btn-primary rounded-lg">Add to Cart</button>
          <button className="btn btn-outline rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
