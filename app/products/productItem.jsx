import React from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from '../contexts/cartContext';

const ProductItem = ({ id, name, description, price, quantity, categoryId, storeName, imageUrl }) => {
  // const { updateCart } = useCart();

  // const addToCart = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const userId = '1'; // Replace this with your actual authentication logic

  //     const response = await fetch(`http://localhost:3030/api/v1/cart/add`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         userId,
  //         productId: id,
  //         quantity: 1, // You may adjust the quantity based on your requirements
  //       }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       updateCart(data); // Update the cart state globally
  //       console.log('Product added to cart:', data);
  //     } else {
  //       console.error('Failed to add product to cart');
  //     }
  //   } catch (error) {
  //     console.error('Error adding product to cart:', error);
  //   }
  // };

  return (
    <div className="flex items-center justify-center flex-col w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <Image className="p-2 rounded-t-lg" src={imageUrl} alt="product image" width={250} height={150} />
      <div className="px-5 pb-5">
        <h5 className="text-[1rem] font-semibold tracking-tight text-green-950">{name}</h5>
        <div className="flex items-center text-yellow-400 mt-2.5 mb-5">
          {[...Array(4)].map((_, index) => (
            <AiFillStar key={index} />
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">Ush {price}</span>
          <button
            // onClick={addToCart}
            className="text-green-900 bg-green-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
