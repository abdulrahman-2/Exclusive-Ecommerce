import Title from "../../components/title/Title";
import Cart from "../../components/cart/Cart";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAll,
  removeFromWishlist,
} from "../../redux/wishlist/wishlistSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import { addAllToCart } from "../../redux/cart/cartSlice";

const Wishlist = () => {
  const products = useSelector((state) => state.product.products);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (wishlistItem) => {
    dispatch(removeFromWishlist(wishlistItem));
  };

  const handleRemoveAllFromWishlist = (wishlistItem) => {
    dispatch(removeAll(wishlistItem));
  };

  // const handleAddAllToCart = (wishlistItem) => {
  //   dispatch(addAllToCart(wishlistItem));
  // };

  return (
    <div className="wishList">
      <div className="my-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <h4 className="text-[20px] font-[500]">Wishlist</h4>
          <span className="text-[20px] font-[500]">{`(${wishlistItems.length})`}</span>
        </div>
        <div className="flex items-center gap-5">
          <Button
            name="Move All To Bag"
            style=" border-2 border-gray-400"
            // onClick={handleAddAllToCart}
          />
          <Button
            name="Remove ALL"
            style="bg-[#DB4444] text-white"
            onClick={handleRemoveAllFromWishlist}
          />
        </div>
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
          {wishlistItems.length > 0 ? (
            wishlistItems.map((wishlistItem) => (
              <SwiperSlide key={wishlistItem.id}>
                <Cart
                  key={wishlistItem.id}
                  product={wishlistItem}
                  showWishlistIcon={false}
                  showAddToWishlist={false}
                  showAddToCartButton={true}
                  showDeleteIcon={true}
                  handleRemove={() => handleRemoveFromWishlist(wishlistItem)}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>No items in your wishlist.</p>
          )}
        </Swiper>

        <div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Title title={"Just For You"} />
            <div className="self-end">
              <Link to="/AllProduct">
                <button className="bg-[#DB4444] py-[16px] px-[48px] rounded-sm text-white">
                  View All
                </button>
              </Link>
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
              {products.slice(0, 6).map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <Cart product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
