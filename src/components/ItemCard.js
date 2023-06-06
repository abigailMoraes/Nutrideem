import React, { useState } from "react";
import "./ItemCard.css";
import { Button } from "./Button";
import ItemModal from "./ItemModal";

export default function ItemCard({ item, deleteItem }) {
  const [details, setDetails] = useState(false);
  const viewDetails = () => {
    setDetails(true);
  };
  return (
    <div className="item-card">
      <img src={item.img}></img>
      <p>{item.name}</p>
      <p>wt:{item.weight}</p>
      <p>bb:{item.bestbefore}</p>
      <Button onClick={viewDetails}>Details</Button>
      <Button onClick={deleteItem}>Delete</Button>
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
