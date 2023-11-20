"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import ProductItem from '../products/productItem';

const ProductSlider = () => {

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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <swiper-container slides-per-view="3">
            <SwiperSlide>
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
            </SwiperSlide>
          </swiper-container>

        ))}
        
      </Swiper>
    </>
  );
}

export default ProductSlider


