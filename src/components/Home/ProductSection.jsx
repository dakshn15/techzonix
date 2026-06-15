import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { products } from "../../data/productData";
import ProductCard from "../Common/ProductCard";



const ProductSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:mb-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">New Arrivals</h2>
          <Link to="/products" className="text-primary font-medium hover:underline">View All Product</Link>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-arrow.swiper-button-next",
            prevEl: ".product-arrow.swiper-button-prev",
          }}
          className="product-swiper !pb-8 !-mb-8"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <div className="arrow-wrapper">
            <div className="swiper-button-next product-arrow"></div>
            <div className="swiper-button-prev product-arrow"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection; 