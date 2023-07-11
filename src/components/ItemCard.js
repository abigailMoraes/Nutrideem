import React, { useState, useEffect } from "react";
import "./ItemCard.css";
import { Button } from "./Button";
import ItemModal from "./ItemModal";
import { useDispatch, useSelector } from "react-redux";
import { getNutritionAsync } from "../redux/nutritionThunk";
import NutritionModal from "./NutritionModal";

export default function ItemCard({ item, handleDelete }) {
  const [details, setDetails] = useState(false);
  const [nutritionView, setNutritionView] = useState(false);
  const nutritionPictures = useSelector((state) => state.nutrition.nutrition);
  console.log(nutritionPictures);
  console.log(item._id);
  const itemNutrition = nutritionPictures.filter(
    (n) => String(n.itemId) === String(item._id)
  );

  console.log(itemNutrition[0]);
  const dispatch = useDispatch();
  const viewDetails = () => {
    setDetails(true);
  };

  const viewNutrition = () => {
    setDetails(false);
    setNutritionView(true);
  };

  useEffect(() => {
    dispatch(getNutritionAsync());
  }, []);

  return (
    <div className="item-card">
      <img src={item.img}></img>
      <p>{item.name}</p>
      <p>wt:{item.weight}</p>
      <p>bb:{item.bestbefore}</p>
      <Button onClick={viewDetails}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={viewNutrition}>Nutrition</Button>
      {details === true && (
        <ItemModal
          item={item}
          show={details}
          onClose={() => setDetails(false)}
        />
      )}
      {nutritionView === true && (
        <NutritionModal
          nutrition={itemNutrition[0]}
          show={nutritionView}
          onClose={() => setNutritionView(false)}
        />
      )}
    </div>
  );
}
