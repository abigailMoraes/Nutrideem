import { getNutrition, editNutrition } from "./nutritionservice";
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getNutritionAsync = createAsyncThunk(
  "nutrition/getNutritionAsync",
  async () => {
    const res = await getNutrition();
    return res;
  }
);

export const updateNutritionAsync = createAsyncThunk(
  "items/updateItemsAsync",
  async ({ nutritionId, nutrition }) => {
    try {
      const data = await editNutrition(nutritionId, nutrition);
      return data;
    } catch (error) {
      console.log("Edit error:", error);
      throw error;
    }
  }
);
