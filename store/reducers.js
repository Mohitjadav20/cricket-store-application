import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./slices";

// Root reducer combining all slice reducers
export default combineReducers({
  products: productSlice,
});
