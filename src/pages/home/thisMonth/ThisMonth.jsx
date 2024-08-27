import Title from "../../../components/title/Title";
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

const ThisMonth = () => {
  const products = useSelector((state) => state.product);

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <Title title={"This Month"} titleDsc={"Best Selling Products"} />
        <Link to="AllProduct">
          <div className="self-end">
            <Button name="View All" />
          </div>
        </Link>
      </div>
      <div className="categories my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom-category",
            prevEl: ".swiper-button-prev-custom-category",
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
          {products.products.slice(6, 10).map((product) => {
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
    </div>
  );
};

export default ThisMonth;
