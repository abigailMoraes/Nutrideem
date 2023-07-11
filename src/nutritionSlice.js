import { createSlice } from "@reduxjs/toolkit";
import {
  getNutritionAsync,
  updateNutritionAsync,
} from "./redux/nutritionThunk";

const initialState = {
  nutrition: [],
};

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNutritionAsync.fulfilled, (state, action) => {
        state.nutrition = action.payload;
        console.log(state.nutrition);
      })
      .addCase(updateNutritionAsync.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        state.nutrition = state.nutrition.map((n) =>
          n._id === updatedItem._id ? updatedItem : n
        );
      });
  },
});

export default nutritionSlice.reducer;
