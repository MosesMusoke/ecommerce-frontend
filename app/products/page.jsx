"use client"

import { useState, useEffect } from "react";
import ProductItem from "./productItem";
import CategoryPills from "../components/categoryPills";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";


const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
]


const products = [
  {
    id: 1,
    product_name: "Sample Product 1",
    product_description: "This is a sample product description.",
    price: 19.99,
    quantity: 50,
    category: "Phones",
    store_name: "Sample Store A",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    product_name: "Sample Product 2",
    product_description: "Another sample product description.",
    price: 24.99,
    quantity: 30,
    category: "Home Accessories",
    store_name: "Sample Store B",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    product_name: "Sample Product 3",
    product_description: "Yet another sample product description.",
    price: 15.99,
    quantity: 20,
    category: "Baking",
    store_name: "Sample Store C",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    product_name: "Sample Product 3",
    product_description: "Yet another sample product description.",
    price: 15.99,
    quantity: 20,
    category: "Sports",
    store_name: "Sample Store C",
    image_url: "https://via.placeholder.com/150",
  },
];


const Products = () => {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  // const [products, setProducts] = useState<ProductData[]>([]);

  // const fetchProducts = async () => {
  //   const response = await fetch("/api/products");
  //   const data: ProductData[] = await response.json();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="p-10 pt-5 relative" >
      <div className="sticky top-0 bg-white z-10 pb-5">
        <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
      </div>
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
    </div>
  );
};

export default Products;


