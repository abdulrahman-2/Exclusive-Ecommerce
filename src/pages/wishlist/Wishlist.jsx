import Title from "../../components/title/Title";
import Cart from "../../components/cart/Cart";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";

const Wishlist = () => {
  return (
    <div className="wishList">
      <div className="my-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <h4 className="text-[20px] font-[500]">Wishlist</h4>
          <span className="text-[20px] font-[500]">(4)</span>
        </div>
        <button className="py-2 px-4 font-[500] md:py-4 md:px-12 border-2 border-gray-400 rounded-sm">
          Move All To Bag
        </button>
      </div>
      <div>
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
          <SwiperSlide>
            <div className="w-full h-[350px]">
              <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
                <img
                  src="images/product/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"
                  alt={"Product image"}
                />
                <div className="discount absolute left-2 top-2 bg-[#DB4444] text-[12px] text-white py-[4px] px-[12px] rounded-[4px]">
                  -35%
                </div>
                <div className="icons absolute right-2 top-2 flex flex-col gap-3">
                  <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </div>
                <div className="add w-full cursor-pointer bg-black text-white absolute bottom-0 left-0 p-2 text-center">
                  Add To Cart
                </div>
              </div>
              <div className="description mt-2 flex flex-col gap-1">
                <h4>Gucci duffle bag</h4>
                <div className="price flex items-center gap-3">
                  <span>$363</span>
                  <span>
                    <del>$565</del>
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="stars flex items-start gap-1">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[350px]">
              <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
                <img
                  src="images/product/g27cq4-500x500 1.png"
                  alt={"Product image"}
                />
                <div className="icons absolute right-2 top-2 flex flex-col gap-3">
                  <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </div>
                <div className="add w-full cursor-pointer bg-black text-white absolute bottom-0 left-0 p-2 text-center">
                  Add To Cart
                </div>
              </div>
              <div className="description mt-2 flex flex-col gap-1">
                <h4>Gucci duffle bag</h4>
                <div className="price flex items-center gap-3">
                  <span>$363</span>
                  <span>
                    <del>$565</del>
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="stars flex items-start gap-1">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[350px]">
              <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
                <img
                  src="images/product/g92-2-500x500 1.png"
                  alt={"Product image"}
                />
                <div className="icons absolute right-2 top-2 flex flex-col gap-3">
                  <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </div>
                <div className="add w-full cursor-pointer bg-black text-white absolute bottom-0 left-0 p-2 text-center">
                  Add To Cart
                </div>
              </div>
              <div className="description mt-2 flex flex-col gap-1">
                <h4>Gucci duffle bag</h4>
                <div className="price flex items-center gap-3">
                  <span>$363</span>
                  <span>
                    <del>$565</del>
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="stars flex items-start gap-1">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[350px]">
              <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
                <img
                  src="../../../../public/images/product/ideapad-gaming-3i-01-500x500 1.png"
                  alt={"Product image"}
                />
                <div className="icons absolute right-2 top-2 flex flex-col gap-3">
                  <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                    <RiDeleteBin6Line />
                  </div>
                </div>
                <div className="add w-full cursor-pointer bg-black text-white absolute bottom-0 left-0 p-2 text-center">
                  Add To Cart
                </div>
              </div>
              <div className="description mt-2 flex flex-col gap-1">
                <h4>Gucci duffle bag</h4>
                <div className="price flex items-center gap-3">
                  <span>$363</span>
                  <span>
                    <del>$565</del>
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="stars flex items-start gap-1">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Title title={"Just For You"} />
            <div className="self-end">
              <button className="bg-[#DB4444] py-[16px] px-[48px] rounded-sm text-white">
                View All
              </button>
            </div>
          </div>
          <div className="mt-10 mb-16">
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
              <SwiperSlide>
                <Cart
                  image={
                    "images/product/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
                  }
                  dsc={"The north coat"}
                  price={"$260"}
                  oldPrice={"$360"}
                  num={"(23)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cart
                  image={
                    "images/product/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
                  }
                  dsc={"Gucci duffle bag"}
                  price={"$960"}
                  oldPrice={"$1160"}
                  num={"(35)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cart
                  image={"images/product/gammaxx-l240-argb-1-500x500 1.png"}
                  dsc={"RGB liquid CPU Cooler"}
                  price={"$160"}
                  oldPrice={"$170"}
                  num={"(56)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cart
                  image={
                    "images/product/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png"
                  }
                  dsc={"Small BookSelf"}
                  price={"$360"}
                  num={"(43)"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
