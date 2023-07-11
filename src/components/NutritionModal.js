import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./NutritionModal.css";
import { useDispatch } from "react-redux";
import {
  getNutritionAsync,
  updateNutritionAsync,
} from "../redux/nutritionThunk";

export default function NutritionModal({ nutrition, show, onClose }) {
  const [newNutrition, setNutrition] = useState(nutrition.nutrition);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    var nutritionUpdate = {
      _id: nutrition._id,
      nutrition: newNutrition,
    };
    console.log(nutritionUpdate);
    dispatch(
      updateNutritionAsync({
        nutritionId: nutritionUpdate._id,
        nutrition: nutritionUpdate,
      })
    );
  };

  return (
    show === true && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Nutrition Title</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label>
                Nutrition Image Link:
                <img src={newNutrition}></img>
                <input
                  type="text"
                  value={newNutrition}
                  onChange={(e) => setNutrition(e.target.value)}
                />
              </label>
              <label>Last Updated {nutrition.dateUpdated}</label>
              <input type="submit" value="Update Item" />
            </form>
          </div>
          <div className="modal-footer">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    )
  );
}
