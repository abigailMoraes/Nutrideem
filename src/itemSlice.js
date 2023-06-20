import { createSlice } from "@reduxjs/toolkit";
import {
  getItemsAsync,
  deleteItemsAsync,
  updateItemsAsync,
  postItemsAsync,
} from "./redux/thunks";

const initialState = {
  list: [],
  currentPage: null,
  totalPages: null,
};

const itemSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postItemsAsync.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(getItemsAsync.fulfilled, (state, action) => {
        state.list = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(deleteItemsAsync.pending, (state, action) => {})
      .addCase(deleteItemsAsync.fulfilled, (state, action) => {
        const deletedItemId = action.payload;
        state.list = state.list.filter((item) => item.id !== deletedItemId);
      })
      .addCase(updateItemsAsync.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        state.list = state.list.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      });
  },
});

export default itemSlice.reducer;
