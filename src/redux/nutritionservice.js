export const getNutrition = async (itemId) => {
  const res = await fetch(`http://localhost:3000/nutrition/`, {
    method: "GET",
  });
  return res.json();
};

export const editNutrition = async (nutritionId, nutrition) => {
  const res = await fetch(`http://localhost:3000/nutrition/${nutritionId}`, {
    method: "PUT",
    body: JSON.stringify(nutrition),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
