export const getItems = async (currentPage, pageSize, query) => {
  if (query === undefined) {
    query = "";
  }
  const res = await fetch(
    `http://localhost:3000/items?page=${currentPage}&limit=${pageSize}&search=${query}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

export const addItem = async (item) => {
  const res = await fetch("http://localhost:3000/items", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export const deleteItem = async (itemId) => {
  await fetch(`http://localhost:3000/items/${itemId}`, {
    method: "DELETE",
  });
};

export const editItem = async (item) => {
  const res = await fetch(`http://localhost:3000/items/${item.id}`, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
