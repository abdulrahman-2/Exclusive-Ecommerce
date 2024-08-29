import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) ?? [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const updateCartInLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.cartQuantity++;
        toast.info(`Increased ${action.payload.name} quantity`);
      } else {
        const product = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(product);
        toast.success(`${action.payload.name} added to cart`);
      }

      updateCartInLocalStorage(state.cartItems);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
      updateCartInLocalStorage(state.cartItems);
      toast.warning(`${action.payload.name} removed from cart`);
    },
    removeAllProducts(state) {
      state.cartItems = [];
      updateCartInLocalStorage(state.cartItems);
      toast.warning("All products removed from cart");
    },
    incrementProduct(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.cartQuantity >= 1) {
        existingItem.cartQuantity++;
      }

      updateCartInLocalStorage(state.cartItems);
    },
    decrementProduct(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.cartQuantity > 1) {
        existingItem.cartQuantity--;
      } else if (existingItem.cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (p) => p.id !== action.payload.id
        );
      }

      updateCartInLocalStorage(state.cartItems);
    },
    getTotal(state, action) {
      updateCartInLocalStorage(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementProduct,
  decrementProduct,
  removeAllProducts,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
