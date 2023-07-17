const APIURL = "nutrideem.onrender.com";

export const getNutrition = async (itemId) => {
  const res = await fetch(`https://${APIURL}/nutrition/`, {
    method: "GET",
  });
  return res.json();
};

export const editNutrition = async (nutritionId, nutrition) => {
  const res = await fetch(`https://${APIURL}/nutrition/${nutritionId}`, {
    method: "PUT",
    body: JSON.stringify(nutrition),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
