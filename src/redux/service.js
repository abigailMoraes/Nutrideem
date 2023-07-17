const APIURL = "nutrideem.onrender.com";

export const getItems = async (currentPage, pageSize, query) => {
  if (query === undefined) {
    query = "";
  }
  const res = await fetch(
    `http://${APIURL}/items?page=${currentPage}&limit=${pageSize}&search=${query}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

export const addItem = async (item) => {
  const res = await fetch(`http://${APIURL}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export const deleteItem = async (itemId) => {
  await fetch(`http://${APIURL}/items/${itemId}`, {
    method: "DELETE",
  });
};

export const editItem = async (item) => {
  const res = await fetch(`http://${APIURL}/items/${item._id}`, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
