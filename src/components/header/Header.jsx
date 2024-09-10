import { Link, useLocation } from "react-router-dom";
import { HeaderWrap } from "./Header.style";
import { IoSearch, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GoHeart, GoPerson } from "react-icons/go";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current location from the router

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Determine the active link based on the current location
  const getActiveClass = (path) =>
    location.pathname === path ? "text-[#DB4444]" : "";

  return (
    <HeaderWrap className="header w-full h-[100px] flex items-center justify-between">
      <Link to="/" onClick={() => handleLinkClick("/")}>
        <div className="logo text-[24px] font-[700]">Exclusive</div>
      </Link>
      <ul className="links hidden lg:flex items-center gap-[48px] font-medium leading-6">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <li className={`${getActiveClass("/")} text-[18px] font-[500]`}>
            Home
          </li>
        </Link>
        <Link to="/Contact" onClick={() => handleLinkClick("/Contact")}>
          <li
            className={`${getActiveClass("/Contact")} text-[18px] font-[500]`}
          >
            Contact
          </li>
        </Link>
        <Link to="/About" onClick={() => handleLinkClick("/About")}>
          <li className={`${getActiveClass("/About")} text-[18px] font-[500]`}>
            About
          </li>
        </Link>
        <Link to="/Sign-Up" onClick={() => handleLinkClick("/Sign-Up")}>
          <li
            className={`${getActiveClass("/Sign-Up")} text-[18px] font-[500]`}
          >
            Sign Up
          </li>
        </Link>
      </ul>

      <div className="search flex items-center gap-0 md:gap-[24px]">
        <div className="search-input w-[243px] hidden lg:flex items-center gap-[34px] bg-[#F5F5F5] h-[38px] rounded-[4px] py-[7px] px-[12px]">
          <input
            className="w-full border-none outline-none h-[80%] text-[14px] bg-[#F5F5F5] text-black caret-white rounded-[4px]"
            type="text"
            placeholder="What are you looking for?"
            aria-label="Search input"
          />
          <IoSearch size={26} aria-label="Search" />
        </div>
        <div className="relative">
          <Link to="/Wishlist" onClick={() => handleLinkClick("/Wishlist")}>
            <GoHeart
              className="hidden lg:block cursor-pointer"
              size={24}
              aria-label="Wishlist"
            />
          </Link>
          <span className="hidden absolute -top-[5px] -right-[7px] w-4 h-4 rounded-full bg-red-500 text-white lg:grid lg:place-items-center text-[10px] z-10">
            {wishlistItems.length}
          </span>
        </div>
        <div
          className={`sideMenu fixed top-0 right-0 p-5 w-64 h-full bg-[#F5F5F5] transition-transform duration-300 ${
            menuOpen ? "transform translate-x-0" : "transform translate-x-full"
          } z-50 lg:hidden`}
        >
          <IoClose
            className="text-black cursor-pointer"
            size={25}
            onClick={handleMenuToggle}
            aria-label="Close menu"
          />
          <ul className="links lg:hidden flex flex-col items-center justify-center gap-[48px] leading-6 font-medium text-black">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <li className={`text-[18px] font-[500] ${getActiveClass("/")}`}>
                Home
              </li>
            </Link>
            <Link to="/Profile" onClick={() => handleLinkClick("/Profile")}>
              <li
                className={`text-[18px] font-[500] ${getActiveClass(
                  "/Profile"
                )}`}
              >
                Profile
              </li>
            </Link>
            <Link to="/Wishlist" onClick={() => handleLinkClick("/Wishlist")}>
              <li
                className={`text-[18px] font-[500] ${getActiveClass(
                  "/Wishlist"
                )}`}
              >
                Wishlist
              </li>
            </Link>
            <Link to="/Contact" onClick={() => handleLinkClick("/Contact")}>
              <li
                className={`text-[18px] font-[500] ${getActiveClass(
                  "/Contact"
                )}`}
              >
                Contact
              </li>
            </Link>
            <Link to="/About" onClick={() => handleLinkClick("/About")}>
              <li
                className={`text-[18px] font-[500] ${getActiveClass("/About")}`}
              >
                About
              </li>
            </Link>
            <Link to="/Sign-Up" onClick={() => handleLinkClick("/Sign-Up")}>
              <li
                className={`text-[18px] font-[500] ${getActiveClass(
                  "/Sign-Up"
                )}`}
              >
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative">
          <Link to="/Cart" onClick={() => handleLinkClick("/Cart")}>
            <IoCartOutline
              size={24}
              className="cursor-pointer mr-6 md:mr-0"
              aria-label="Cart"
            />
          </Link>
          <span className="absolute -top-[5px] right-[17px] md:-top-[5px] md:-right-[5px] w-4 h-4 rounded-full bg-red-500 text-white grid place-items-center text-[10px] z-10">
            {cartItems.length}
          </span>
        </div>

        <IoMenu
          className="lg:hidden cursor-pointer"
          size={30}
          onClick={handleMenuToggle}
          aria-label="Menu"
        />
        <Link to="/Profile" onClick={() => handleLinkClick("/Profile")}>
          <GoPerson
            className="hidden lg:block cursor-pointer"
            size={24}
            aria-label="Profile"
          />
        </Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
