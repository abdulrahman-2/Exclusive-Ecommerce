import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlistItems.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    removeFromWishlist(state, action) {
      const newWishlist = state.wishlistItems.filter(
        (product) => product?.id !== action.payload.id
      );
      state.wishlistItems = newWishlist;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    removeAll(state) {
      state.wishlistItems = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeAll } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
