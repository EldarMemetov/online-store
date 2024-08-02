import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import basketReducer from "./nutrition/basketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
  },
});
