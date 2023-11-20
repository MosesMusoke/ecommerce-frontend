"use client"

import { useState, useEffect } from "react";
import ProductItem from "./productItem";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider";


const categories = [
  'Clothing and Apparel',
  'Electronics',
  'Home and Furniture',
  'Beauty and Personal Care',
  'Books and Stationery',
  'Sports and Outdoors',
  'Toys and Games',
  'Health and Wellness',
  'Jewelry and Accessories',
  'Automotive',
  'Pet Supplies',
  'Tech Accessories',
  'shoes'
]


const Products = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3030/api/v1/products");
    console.log(response)
    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-green-50 p-4 flex min-h-screen flex-col items-center justify-between ml-52 mt-20" >
      <h2>Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.product_name}
            description={product.product_description}
            price={product.price}
            quantity={product.quantity}
            categoryId={product.categoryId}
            storeName={product.store_name}
            imageUrl={'/laptop.jpeg'}
          />
        ))}
      </div>
      <button className="w-200 h-200 rounded-full fixed bottom-7 right-7 bg-green-600 text-white"><Link href={'/products/new'}><AiOutlinePlus /></Link></button>

      <div className="w-full h-full bg=green-100 p-5">
        <ImageSlider />
      </div>

    </div>
  );
};

export default Products;


