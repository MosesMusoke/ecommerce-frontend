"use client"

import React, { useEffect, useState } from 'react';

const ProductDetailsPage = ({ productId }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3030/api/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProductDetails(data);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const { product_name, product_description, price, quantity, category, store_name, image_url } = productDetails;

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-green-900 mb-4">{product_name}</h1>
        <img src={image_url} alt={product_name} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="text-gray-700 mb-4">{product_description}</p>
        <p className="text-lg font-bold text-green-900 mb-4">Ush {price}</p>
        <p className="text-gray-700 mb-4">Quantity: {quantity}</p>
        <p className="text-gray-700 mb-4">Category: {category}</p>
        <p className="text-gray-700 mb-4">Store: {store_name}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;


