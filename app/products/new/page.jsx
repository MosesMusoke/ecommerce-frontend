"use client"

import React, { useState } from "react";


const NewProductForm = ({ onProductSubmit }) => {
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    product_description: "",
    price: 0,
    quantity: 0,
    category_name: "",
    store_name: "",
    image_url: null,
  });

  const [errors, setErrors] = useState({
    product_name: "",
    product_description: "",
    price: "",
    quantity: "",
    category_name: "",
    store_name: "",
    image_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    if (!newProduct.product_name.trim()) {
      newErrors.product_name = "Product Name is required";
    }

    if (!newProduct.product_description.trim()) {
      newErrors.product_description = "Product description is required";
    }

    if (newProduct.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (newProduct.quantity <= 0) {
      newErrors.quantity = "Quantity must be greater than 0";
    }

    if (!newProduct.category_name.trim()) {
      newErrors.category_name = "category Name is required";
    }

    if (!newProduct.store_name.trim()) {
      newErrors.store_name = "Store Name is required";
    }

    if (!newProduct.image_url.trim()) {
      newErrors.image_url = "Image URL is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // onProductSubmit(newProduct);
      setNewProduct({
        product_name: "",
        product_description: "",
        price: 0,
        quantity: 0,
        category_name: "",
        store_name: "",
        image_url: "",
      });
    }

    try {
      const response = await fetch("http://localhost:3030/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }else {
        console.error("Failed to create product:");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="w-full bg-slate-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 w-1/2 rounded-lg shadow-lg flex flex-col items-left justify-center"
      >
        <label htmlFor="product_name" className="mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          placeholder="Product Name"
          value={newProduct.product_name}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.name}</div>

        <label htmlFor="product_description" className="mb-2">
          Product Description
        </label>
        <textarea
          id="product_description"
          name="product_description"
          placeholder="Product Description"
          value={newProduct.product_description}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.product_description}</div>

        <label htmlFor="price" className="mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.price}</div>

        <label htmlFor="quantity" className="mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.quantity}</div>

        <label htmlFor="category_name" className="mb-2">
          category_name
        </label>
        <input
          type="text"
          id="category_name"
          name="category_name"
          placeholder="Category Name"
          value={newProduct.category_name}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.category_name}</div>

        <label htmlFor="store_name" className="mb-2">
          Store Name
        </label>
        <input
          type="text"
          id="store_name"
          name="store_name"
          placeholder="Store Name"
          value={newProduct.store_name}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.store_name}</div>

        <label htmlFor="image_url" className="mb-2">
          Image URL
        </label>
        <input
          type="file"
          id="image_url"
          name="image_url"
          value={newProduct.image_url}
          onChange={handleInputChange}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          required
        />
        <div className="text-red-500">{errors.image_url}</div>

        <button className="p-2 border bg-purple-600 text-white border-gray-500 mt-2 mb-4 focus:outline-none focus:border-gray-600">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default NewProductForm;
