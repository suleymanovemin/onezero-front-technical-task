import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
