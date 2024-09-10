import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { images } from "../../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination } from "swiper/modules";

const Product = () => {
  const { id } = useParams(); // Get product ID from the URL
  const products = useSelector((state) => state.product.products); // Adjust the state path according to your setup
  const product = products.find((item) => item.id === id); // Find the product by ID

  const [quantity, setQuantity] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  if (!product) {
    return <div className="text-center py-10 text-xl">Product not found</div>;
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-${i < product.rating ? "[#FFAD33]" : "[#ddd]"}`}
      />
    ));

  return (
    <div>
      <div className="my-14">
        <div className="text-sm flex items-center gap-2 mb-14">
          <span className="text-gray-400">Account</span>
          <span>/</span>
          <span>Gaming</span>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              modules={[EffectFlip, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full h-[600px] p-10 rounded-md flex items-center justify-center bg-[#F5F5F5]">
                  <img src={product.image} alt={product.name} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">{renderStars()}</div>
                <span>({product.rating} Reviews)</span>
                <span>|</span>
                <span>{product.quantity} In Stock</span>
              </div>
              <span>{`$${product.price}`}</span>
            </div>
            <p className="text-sm mb-6 py-6 border-b border-black">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg">Colours:</span>
              <div className="flex items-center gap-2">
                {/* Color options */}
                <span className="w-5 h-5 rounded-full bg-black"></span>
                <span className="w-5 h-5 rounded-full bg-black"></span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg">Size:</span>
              <div className="flex items-center gap-4">
                {/* Size options */}
                <span className="w-8 h-8 rounded-md border border-black grid place-items-center text-sm">
                  XS
                </span>
                <span className="w-8 h-8 rounded-md border border-black grid place-items-center text-sm">
                  S
                </span>
                <span className="w-8 h-8 rounded-md border border-black grid place-items-center text-sm">
                  M
                </span>
                <span className="w-8 h-8 rounded-md border border-black grid place-items-center text-sm">
                  L
                </span>
                <span className="w-8 h-8 rounded-md border border-black grid place-items-center text-sm">
                  XL
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="rounded-md overflow-hidden border border-black flex items-center justify-between flex-1 h-[40px]">
                <FiMinus
                  className="w-10 p-2 h-full cursor-pointer bg-white text-black"
                  onClick={handleDecrease}
                />
                <span className="text-2xl font-semibold">{quantity}</span>
                <FiPlus
                  className="w-10 p-2 h-full cursor-pointer bg-white text-black"
                  onClick={handleIncrease}
                />
              </div>
              <button className="rounded-md flex-1 h-[40px] bg-red-600 text-white">
                Buy Now
              </button>
              <GoHeart
                size={25}
                className={`w-10 h-10 grid place-items-center p-2 rounded-md border border-black ${
                  isHeartClicked
                    ? "text-white bg-red-600 border-none"
                    : "text-black bg-white"
                }`}
                onClick={handleHeartClick}
              />
            </div>
            <div className="rounded-md border border-black p-5">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-black">
                <TbTruckDelivery size={40} />
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Free Delivery</span>
                  <span className="text-sm">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={images.returnIcon} alt="return" />
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Return Delivery</span>
                  <span className="text-sm">
                    Free 30 Days Delivery Returns. Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
