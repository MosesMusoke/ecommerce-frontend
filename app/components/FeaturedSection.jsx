// FeaturedSection.js
import React from 'react';
import { IoMdStar, IoMdCart } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    category: 'Electronics',
    title: 'Smartphone XYZ',
    description: 'A powerful smartphone with advanced features.',
    price: '$499',
    image: '/laptop.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
  {
    id: 3,
    category: 'Home & Living',
    title: 'Comfortable Sofa',
    description: 'A cozy sofa for your living room.',
    price: '$799',
    image: '/laptop.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Stylish Watch',
    description: 'A fashionable and elegant wristwatch.',
    price: '$99',
    image: '/download.jpeg',
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-white bg-opacity-10 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <span className="text-green-500 text-sm">{product.category}</span>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-semibold">{product.price}</div>
                  <div className="flex space-x-2">
                    <IoMdCart className="text-gray-500 cursor-pointer" />
                    <FaRegHeart className="text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
