import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./truckSlice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
});
