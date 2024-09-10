import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartWrap } from "./Cart.style";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCart } from "../../redux/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlist/wishlistSlice";

const Cart = ({
  product,
  showWishlistIcon = true,
  showAddToCartButton = true,
  showAddToWishlist = true,
  showDeleteIcon = false,
  handleRemove,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const [isHeartClicked, setIsHeartClicked] = useState(() =>
    wishlistItems.some((item) => item.id === product.id)
  );

  useEffect(() => {
    setIsHeartClicked(wishlistItems.some((item) => item.id === product.id));
  }, [wishlistItems, product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = (event) => {
    event.stopPropagation();
    if (isHeartClicked) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-${i < product.rating ? "[#FFAD33]" : "[#ddd]"}`}
      />
    ));

  return (
    <CartWrap
      className="w-full h-[350px]"
      onClick={handleSelectProduct}
      style={{ cursor: "pointer" }}
    >
      <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
        <img
          src={product.image}
          alt={product.name || "Product image"}
          loading="lazy"
        />
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
              aria-label={
                isHeartClicked ? "Remove from wishlist" : "Add to wishlist"
              }
              onClick={handleToggleWishlist}
            >
              <GoHeart
                size={18}
                className={isHeartClicked ? "text-white" : "text-black"}
              />
            </div>
          )}
          {showAddToWishlist && (
            <div
              className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer"
              aria-label="View product details"
            >
              <IoEyeOutline size={18} />
            </div>
          )}
          {showDeleteIcon && (
            <div
              className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer"
              aria-label="Remove from cart"
              onClick={handleRemove}
            >
              <RiDeleteBin6Line size={18} />
            </div>
          )}
        </div>
        {showAddToCartButton && (
          <div
            className="add w-full bg-black text-white absolute bottom-0 left-0 p-2 text-center cursor-pointer"
            onClick={handleAddToCart}
            aria-label="Add product to cart"
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
