'use client';

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Landing() {
 return (
  <section className="landing">
   <div className="banner">
    <h3 className="main-heading">Welcome</h3>
    <h1>Amazing taste & beautiful place</h1>
    <p>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ipsa
     harum minima repellat nostrum consequatur!
    </p>
    <button type="button" className="banner-btn banner-btn-1">
     Order Now
    </button>
    <button type="button" className="banner-btn banner-btn-2">
     View Menu
    </button>
   </div>

   {/* Swiper Section */}
   <Swiper
    className="mySwiper"
    modules={[Autoplay, EffectFade, Pagination]}
    autoplay={{delay: 4000, disableOnInteraction: false}}
    effect="fade"
    loop={true}
    pagination={{clickable: true}}
   >
    <SwiperSlide>
     <img src="/images/image1.jpg" alt="Slide 1" />
    </SwiperSlide>
    <SwiperSlide>
     <img src="/images/image2.jpg" alt="Slide 2" />
    </SwiperSlide>
    <SwiperSlide>
     <img src="/images/image3.jpg" alt="Slide 3" />
    </SwiperSlide>
   </Swiper>

   {/* ✅ Contact Info */}
   <div className="landing-contact">
    <div className="details">
     <i className="fa-solid fa-phone"></i>
     <div>
      <span>000 (123) 456 7890</span>
      <span>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, sed.
      </span>
     </div>
    </div>
    <div className="details">
     <i className="fa-solid fa-location-dot"></i>
     <div>
      <span>123 Main Street</span>
      <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
     </div>
    </div>
    <div className="details">
     <i className="fa-solid fa-clock"></i>
     <div>
      <span>Open Monday-Friday</span>
      <span>Please Join Us, We are Available -- 8:00am - 9:00pm</span>
     </div>
    </div>
   </div>
  </section>
 );
}
