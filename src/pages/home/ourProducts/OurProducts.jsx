import Title from "../../../components/title/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "../../../components/cart/Cart";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";

const OurProducts = () => {
  const products = useSelector((state) => state.product);
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <Title title={"Our Products"} titleDsc={"Explore Our Products"} />
        <div className="self-end">
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="swiper-button-prev-custom-ourProducts cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next-custom-ourProducts cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-ourProducts",
            prevEl: ".swiper-button-prev-custom-ourProducts",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.products.slice(10, 14).map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Cart
                  image={product.image}
                  discount={product.discount}
                  dsc={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  num={`(${product.quantity})`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-ourProducts",
            prevEl: ".swiper-button-prev-custom-ourProducts",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.products.slice(12, 16).map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Cart
                  image={product.image}
                  discount={product.discount}
                  dsc={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  num={`(${product.quantity})`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link to="AllProduct">
        <Button name="View All Products" style={"mt-10 mx-auto"} />
      </Link>
    </div>
  );
};

export default OurProducts;
