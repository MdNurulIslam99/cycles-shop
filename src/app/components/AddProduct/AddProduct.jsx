"use client";
import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    company: "",
    brand: "",
    model: "",
    type: "",
    frameSize: "",
    wheelSize: "",
    color: "",
    gears: "",
    brakeType: "",
    price: "",
    stock: "",
    weightKg: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    // TODO: Send data to backend API
    alert("Product submitted! Check console for data.");
    setFormData({
      company: "",
      brand: "",
      model: "",
      type: "",
      frameSize: "",
      wheelSize: "",
      color: "",
      gears: "",
      brakeType: "",
      price: "",
      stock: "",
      weightKg: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10 p-6 bg-base-200 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Model"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type (Road/Mountain/Hybrid)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="frameSize"
            value={formData.frameSize}
            onChange={handleChange}
            placeholder="Frame Size (S/M/L)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="wheelSize"
            value={formData.wheelSize}
            onChange={handleChange}
            placeholder="Wheel Size"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="gears"
            value={formData.gears}
            onChange={handleChange}
            placeholder="Number of Gears"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="brakeType"
            value={formData.brakeType}
            onChange={handleChange}
            placeholder="Brake Type"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            step="0.1"
            name="weightKg"
            value={formData.weightKg}
            onChange={handleChange}
            placeholder="Weight (kg)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="textarea textarea-bordered w-full mt-2"
          rows={4}
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full mt-4 text-white rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
