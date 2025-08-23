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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Product added successfully!");
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
      } else {
        alert("Failed to add product: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10 p-6 bg-base-200 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "company", placeholder: "Company" },
            { name: "brand", placeholder: "Brand" },
            { name: "model", placeholder: "Model" },
            { name: "type", placeholder: "Type (Road/Mountain/Hybrid)" },
            { name: "frameSize", placeholder: "Frame Size (S/M/L)" },
            { name: "wheelSize", placeholder: "Wheel Size" },
            { name: "color", placeholder: "Color" },
            { name: "gears", placeholder: "Number of Gears", type: "number" },
            { name: "brakeType", placeholder: "Brake Type" },
            { name: "price", placeholder: "Price", type: "number" },
            { name: "stock", placeholder: "Stock Quantity", type: "number" },
            {
              name: "weightKg",
              placeholder: "Weight (kg)",
              type: "number",
              step: "0.1",
            },
            { name: "image", placeholder: "Image URL" },
          ].map((input) => (
            <input
              key={input.name}
              type={input.type || "text"}
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              placeholder={input.placeholder}
              step={input.step}
              className="input input-bordered w-full"
              required
            />
          ))}
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
