

import React from 'react';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link';

const ProductItem = ({ name, description, price, quantity, categoryId, storeName, imageUrl}) => {
  return (
    <div className="flex items-center justify-center flex-col w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <Image className="p-2 rounded-t-lg" src="/laptop.jpeg" alt="product image" width={250} height={150} />
      </Link>
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-[1rem] font-semibold tracking-tight text-green-950 ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </Link>
        <div className="flex items-center text-yellow-400 mt-2.5 mb-5">
          {[...Array(4)].map((_, index) => (
            <AiFillStar />
            // <Image
            //   key={index}
            //   className="w-4 h-4 text-yellow-300 mr-1"
            //   src="/docs/images/star.svg"
            //   alt={`star ${index + 1}`}
            //   width={16}
            //   height={16}
            // />
          ))}
          {/* <Image
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            src="/docs/images/star.svg"
            alt="empty star"
            width={16}
            height={16}
          /> */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">$599</span>
          <Link href="#" className=" text-green-900 bg-green-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
