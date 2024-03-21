import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing product-related state
 */
const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItems: [], // Initial state for cart items
  },
  reducers: {
    //Adds a product to the cart items list
    setAddProductCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    //Sets the cart items to the provided list of products
    setCheckoutItem: (state, action) => {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
  },
});

export const { setAddProductCart, setCheckoutItem } = productSlice.actions;
export default productSlice.reducer;
