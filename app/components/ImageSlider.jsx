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

const ImageSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src='/shop4.png' width={100} height={100} /></SwiperSlide>
        <SwiperSlide><Image src='/shop2.jpg' width={100} height={100} /></SwiperSlide>
        <SwiperSlide><Image src='/shop3.jpg' width={100} height={100} /></SwiperSlide>
        <SwiperSlide><Image src='/shop1.jpg' width={100} height={100} /></SwiperSlide>
        {/* Map through the images instead */}
      </Swiper>
    </>
  );
}

export default ImageSlider


