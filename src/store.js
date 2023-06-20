import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

const store = configureStore({
  reducer: itemReducer,
});

export default store;
