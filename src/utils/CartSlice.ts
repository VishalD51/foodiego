import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItem.pop();
    },
    clearCart: (state, action) => {
      state.cartItem.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
