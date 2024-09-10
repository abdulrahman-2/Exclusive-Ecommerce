import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemExists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
        toast.success("Added to wishlist!");
      } else if (itemExists) {
        toast.info("item are already exist");
      }
    },
    removeFromWishlist(state, action) {
      const newWishlist = state.wishlistItems.filter(
        (product) => product?.id !== action.payload.id
      );
      state.wishlistItems = newWishlist;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      toast.info("Removed from wishlist!");
    },
    removeAll(state) {
      state.wishlistItems = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      toast.info("All items Removed from wishlist!");
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeAll } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
