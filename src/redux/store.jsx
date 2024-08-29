import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
