import { addItem, getItems, deleteItem, editItem } from "./service";
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const postItemsAsync = createAsyncThunk(
  "items/postItemsAsync",
  async (item) => {
    const data = await addItem(item);
    return data;
  }
);

export const getItemsAsync = createAsyncThunk(
  "items/getItemsAsync",
  async ({ currentPage, pageSize, query }) => {
    const res = await getItems(currentPage, pageSize, query);
    return res;
  }
);

export const deleteItemsAsync = createAsyncThunk(
  "items/deleteItemsAsync",
  async (itemId) => {
    try {
      await deleteItem(itemId);
      return itemId;
    } catch (error) {
      // Handle the error and dispatch an appropriate action
      console.log("Delete error:", error);
      throw error;
    }
  }
);

export const updateItemsAsync = createAsyncThunk(
  "items/updateItemsAsync",
  async (item) => {
    try {
      const data = await editItem(item);
      return data;
    } catch (error) {
      console.log("Edit error:", error);
      throw error;
    }
  }
);
