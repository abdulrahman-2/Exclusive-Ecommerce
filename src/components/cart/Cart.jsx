import { useState } from "react";
import { CartWrap } from "./Cart.style";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const Cart = ({
  product,
  showWishlistIcon = true,
  showAddToCartButton = true,
  showAddToWishlist = true,
  showDeleteIcon = false,
  handleRemove,
}) => {
  const dispatch = useDispatch();
  const [isHeartClicked, setIsHeartClicked] = useState(false); // State to track heart icon toggle

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = (wishlistItem) => {
    if (isHeartClicked) {
      dispatch(removeFromWishlist(wishlistItem));
      toast.info("Removed from wishlist!");
    } else {
      dispatch(addToWishlist(wishlistItem));
      toast.success("Added to wishlist!");
    }
    setIsHeartClicked(!isHeartClicked);
  };

  // Render stars based on product rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= product.rating ? "text-[#FFAD33]" : "text-[#ddd]"}
        />
      );
    }
    return stars;
  };

  return (
    <CartWrap className="w-full h-[350px]">
      <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
        <img src={product.image} alt={product.name || "Product image"} />
        {product.discount && (
          <div className="discount absolute left-2 top-2 bg-[#DB4444] text-[12px] text-white py-[4px] px-[12px] rounded-[4px]">
            {product.discount}
          </div>
        )}
        <div className="icons absolute right-2 top-2 flex flex-col gap-3">
          {showWishlistIcon && (
            <div
              className={`w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer ${
                isHeartClicked ? "bg-[#DB4444]" : "bg-white"
              }`}
              aria-label="Add to wishlist"
              onClick={() => handleToggleWishlist(product)}
            >
              <GoHeart
                size={18}
                className={isHeartClicked ? "text-white" : "text-black"}
              />
            </div>
          )}
          {showAddToWishlist && (
            <div
              className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center"
              aria-label="View product details"
            >
              <IoEyeOutline size={18} className="cursor-pointer" />
            </div>
          )}
          {showDeleteIcon && (
            <div
              className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center"
              aria-label="Remove from wishlist"
            >
              <RiDeleteBin6Line
                size={18}
                className="cursor-pointer"
                onClick={handleRemove}
              />
            </div>
          )}
        </div>
        {showAddToCartButton && (
          <div
            className="add w-full bg-black text-white absolute bottom-0 left-0 p-2 text-center cursor-pointer"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </div>
        )}
      </div>
      <div className="description mt-2 flex flex-col gap-1 p-1">
        <h4 className="font-semibold">{product.name}</h4>
        <div className="price flex items-center gap-3">
          <span className="font-semibold text-[#DB4444]">{`$${product.price}`}</span>
          {product.oldPrice && (
            <span className="text-[#0000005b] font-semibold">
              <del>{`$${product.oldPrice}`}</del>
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="stars flex items-start gap-1">{renderStars()}</div>
          <span className="text-[#0000005b] font-semibold">
            {product.quantity}
          </span>
        </div>
      </div>
    </CartWrap>
  );
};

export default Cart;
