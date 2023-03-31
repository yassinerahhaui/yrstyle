import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./carouselSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselSlice,
  }
})