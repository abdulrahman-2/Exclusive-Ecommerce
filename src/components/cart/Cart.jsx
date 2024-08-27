import { CartWrap } from "./Cart.style";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Cart = ({ image, discount, dsc, price, oldPrice, num }) => {
  return (
    <CartWrap className="w-full h-[350px]">
      <div className="product h-[250px] p-10 rounded-md relative flex items-center justify-center bg-[#F5F5F5]">
        <img src={image} alt={dsc || "Product image"} />
        <div
          className={`discount absolute left-2 top-2 bg-[#DB4444] text-[12px] text-white ${
            discount ? "py-[4px] px-[12px]" : "p-0"
          }  rounded-[4px]`}
        >
          {discount}
        </div>
        <div className="icons absolute right-2 top-2 flex flex-col gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
            <GoHeart size={18} className="cursor-pointer" />
          </div>
          <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
            <IoEyeOutline size={18} className=" cursor-pointer" />
          </div>
        </div>
        <div className="add w-full bg-black text-white absolute bottom-0 left-0 p-2 text-center">
          Add To Cart
        </div>
      </div>
      <div className="description mt-2 flex flex-col gap-1 p-1">
        <h4 className="font-semibold">{dsc}</h4>
        <div className="price flex items-center gap-3">
          <span className="font-semibold text-[#DB4444]">{price}</span>
          {oldPrice && (
            <span className="text-[#0000005b] font-semibold">
              <del>{oldPrice}</del>
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="stars flex items-start gap-1">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
          </div>
          <span className="text-[#0000005b] font-semibold">{num}</span>
        </div>
      </div>
    </CartWrap>
  );
};

Cart.propTypes = {
  image: PropTypes.string.isRequired,
  discount: PropTypes.string,
  dsc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  children: PropTypes.node,
};

export default Cart;
