import { Link } from "react-router-dom";
import { HeaderWrap } from "./Header.style";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <HeaderWrap className="header w-full h-[100px] flex items-center justify-between">
      <Link to="/">
        <div className="logo text-[24px] font-[700]">Exclusive</div>
      </Link>
      <ul className="links hidden lg:flex items-center gap-[48px] font-medium leading-6">
        <Link to={"/"}>
          <li className="text-[18px] font-[500]">Home</li>
        </Link>
        <Link to={"/Contact"}>
          <li className="text-[18px] font-[500]">Contact</li>
        </Link>
        <Link to={"/About"}>
          <li className="text-[18px] font-[500]">About</li>
        </Link>
        <Link to={"/Sign-Up"}>
          <li className="text-[18px] font-[500]">Sign Up</li>
        </Link>
      </ul>

      <div className="search flex items-center gap-0 md:gap-[24px]">
        <div className="search-input w-[243px] hidden lg:flex items-center gap-[34px] bg-[#F5F5F5] h-[38px] rounded-[4px] py-[7px] px-[12px]">
          <input
            className="w-full border-none outline-none h-[80%] text-[14px] bg-[#F5F5F5] text-black caret-white rounded-[4px]"
            type="text"
            placeholder="What are you looking for?"
          />
          <IoSearch size={26} />
        </div>
        <Link to={"/Wishlist"}>
          <GoHeart className="hidden lg:block cursor-pointer" size={24} />
        </Link>

        <div
          className={`sideMenu fixed top-0 right-0 p-5 w-64 h-full bg-[#F5F5F5] transition-transform duration-300 ${
            menuOpen ? "transform translate-x-0" : "transform translate-x-full"
          } z-50 lg:hidden`}
        >
          <IoClose
            className="text-black cursor-pointer"
            size={25}
            onClick={handleMenuToggle}
          />
          <ul className="links lg:hidden flex flex-col items-center justify-center gap-[48px] leading-6 font-medium text-black">
            <Link to={"/"}>
              <li className="text-[18px] font-[500]">Home</li>
            </Link>
            <Link to={"/Profile"}>
              <li className="text-[18px] font-[500]">Profile</li>
            </Link>
            <Link to={"/Wishlist"}>
              <li className="text-[18px] font-[500]">Wishlist</li>
            </Link>
            <Link to={"/Contact"}>
              <li className="text-[18px] font-[500]">Contact</li>
            </Link>
            <Link to={"/About"}>
              <li className="text-[18px] font-[500]">About</li>
            </Link>
            <Link to={"/Sign-Up"}>
              <li className="text-[18px] font-[500]">Sign Up</li>
            </Link>
          </ul>
        </div>
        <div className="relative">
          <Link to={"/Cart"}>
            <IoCartOutline size={24} className="cursor-pointer mr-6 md:mr-0" />
          </Link>
          <span className="absolute -top-[5px] right-[17px] md:-top-[5px] md:-right-[5px] w-4 h-4 rounded-full bg-red-500 text-white grid place-items-center text-[10px] z-10">
            {cartItems.length}
          </span>
        </div>

        <IoMenu
          className="lg:hidden cursor-pointer"
          size={30}
          onClick={handleMenuToggle}
        />
        <Link to={"/Profile"}>
          <GoPerson className="hidden lg:block cursor-pointer" size={24} />
        </Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
