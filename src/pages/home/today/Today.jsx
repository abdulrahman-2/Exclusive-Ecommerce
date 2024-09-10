import { useState, useEffect } from "react";
import Title from "../../../components/title/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "../../../components/cart/Cart";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Today = () => {
  const products = useSelector((state) => state.product.products);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Aug 26, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();

      if (countDownDate > now) {
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-[100px]">
          <Title title={"Today's"} titleDsc={"Flash Sales"} />
          <div className="countDown self-end">
            <div className="expireTime flex items-center gap-2 md:gap-4">
              <div className="text-center">
                <span className="text-[12px] font-medium">days</span>
                <p className="text-[24px] md:text-[32px] font-bold">{days}</p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">hours</span>
                <p className="text-[24px] md:text-[32px] font-bold">{hours}</p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">minutes</span>
                <p className="text-[24px] md:text-[32px] font-bold">
                  {minutes}
                </p>
              </div>
              <span className="self-end text-[#E07575] text-[24px] md:text-[32px]">
                :
              </span>
              <div className="text-center">
                <span className="text-[12px] font-medium">seconds</span>
                <p className="text-[24px] md:text-[32px] font-bold">
                  {seconds}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end">
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="swiper-button-prev-custom cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next-custom cursor-pointer bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="product my-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.slice(0, 6).map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Cart product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link to="AllProduct">
        <Button
          name="View All Products"
          style={"mb-10 mx-auto bg-[#DB4444] text-white"}
        />
      </Link>
      <hr />
    </div>
  );
};

export default Today;
