export const persistItems = () => ({
  type: "PERSIST_ITEMS",
});

export const addItem = (value) => ({
  type: "ADD_ITEM",
  payload: value,
});

export const deleteItem = (key) => ({
  type: "DELETE_ITEM",
  payload: key,
});
