import React, { useState } from "react";
import "./ItemCard.css";
import { Button } from "./Button";
import ItemModal from "./ItemModal";
import { useDispatch } from "react-redux";
import { deleteItemsAsync } from "../itemSlice";

export default function ItemCard({ item, handleDelete }) {
  const [details, setDetails] = useState(false);
  const viewDetails = () => {
    setDetails(true);
  };

  const dispatch = useDispatch();

  return (
    <div className="item-card">
      <img src={item.img}></img>
      <p>{item.name}</p>
      <p>wt:{item.weight}</p>
      <p>bb:{item.bestbefore}</p>
      <Button onClick={viewDetails}>Details</Button>
      <Button onClick={handleDelete}>Delete</Button>
      {details === true && (
        <ItemModal
          item={item}
          show={details}
          onClose={() => setDetails(false)}
        />
      )}
    </div>
  );
}
