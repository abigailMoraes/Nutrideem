import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import nutritionReducer from "./nutritionSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    items: itemReducer,
    nutrition: nutritionReducer,
  },
});

export default store;
