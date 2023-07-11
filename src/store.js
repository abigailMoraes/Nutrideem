import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import nutritionReducer from "./nutritionSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
    nutrition: nutritionReducer,
  },
});

export default store;
