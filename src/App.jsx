import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/signUp/LogIn";
import Wishlist from "./pages/wishlist/Wishlist";
import TotalCart from "./pages/totalCart/TotalCart";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Profile from "./pages/profile/Profile";
import TopHeader from "./components/header/TopHeader";
import CheckOut from "./pages/checkOut/CheckOut";
import AllProduct from "./pages/allProduct/AllProduct";

const App = () => {
  return (
    <>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/AllProduct" element={<AllProduct />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<TotalCart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
