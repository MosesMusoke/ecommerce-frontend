import React from 'react';
import Image from 'next/image';
import ProductItem from '../products/productItem'
import ImageSlider from './ImageSlider';

const SideBarSection = () => {

    const products = [
        {
          id: 1,
          product_name: "Sample Product 1",
          product_description: "This is a sample product description.",
          price: 19.99,
          quantity: 50,
          categoryId: 1,
          store_name: "Sample Store A",
          image_url: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          product_name: "Sample Product 2",
          product_description: "Another sample product description.",
          price: 24.99,
          quantity: 30,
          categoryId: 3,
          store_name: "Sample Store B",
          image_url: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          product_name: "Sample Product 3",
          product_description: "Yet another sample product description.",
          price: 15.99,
          quantity: 20,
          categoryId: 6,
          store_name: "Sample Store C",
          image_url: "https://via.placeholder.com/150",
        },
    ];

  return (
    <section className=" grid grid-cols-12 gap-8 w-full h-screen mx-auto px-1 py-8 lg:py-10">
      {/* Sidebar */}
      <div className="col-span-3">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Category Filter */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            {/* Replace the links with actual categories */}
            <ul>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Home Apliances</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Phones</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Fashion and Beauty</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Gaming</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Agriculture</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Pharmacueticals</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Machinery</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-green-600">Sports</a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Price</h2>
            {/* Add price range inputs or other UI elements for filtering */}
            {/* Example: */}
            <input type="range" min="0" max="100" step="10" />
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Rating</h2>
            {/* Add rating options or other UI elements for filtering */}
            {/* Example: */}
            <div className='flex items-start justify-center flex-col '>
                <label>
                <input type="checkbox" />
                <span className="ml-2">1 star</span>
                </label>
                <label>
                <input type="checkbox" />
                <span className="ml-2">2 stars</span>
                </label>
                <label>
                <input type="checkbox" />
                <span className="ml-2">3 stars</span>
                </label>
                <label>
                <input type="checkbox" />
                <span className="ml-2">4 stars</span>
                </label>
                <label>
                <input type="checkbox" />
                <span className="ml-2">5 stars</span>
                </label>
            </div>
            
          </div>

          {/* Add more filters as needed */}
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-7 col-span-9">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Discover Amazing Products</h1>
          <p className="text-lg text-gray-600 mb-8">Explore a wide range of products that suit your needs and preferences.</p>
          <a href="/products" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300">
            Shop Now
          </a>
        </div>

        <div className="flex overflow-hidden h-2/3 items-center m-0 pb-10">
          {/* {products.map((product) => (
          //   <ProductItem
          //     key={product.id}
          //     name={product.product_name}
          //     description={product.product_description}
          //     price={product.price}
          //     quantity={product.quantity}
          //     categoryId={product.categoryId}
          //     storeName={product.store_name}
          //     imageUrl={'/laptop.jpeg'}
          //   />
          // ))} */}
          <ImageSlider />
        </div>

      </div>
    </section>
  );
};

export default SideBarSection;


