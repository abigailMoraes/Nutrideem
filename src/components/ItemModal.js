import React, { useState } from "react";
import { Button } from "./Button";
import "./ItemModal.css";

export default function ItemModal({ item, show, onClose }) {
  return (
    show === true && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{item.name}</h4>
          </div>
          <div className="modal-body">
            <p>{item.description}</p>
            <p>weight:{item.weight}</p>
            <p>best before:{item.bestbefore}</p>
            <p>brand:{item.brand}</p>
            <p>donor:{item.donor}</p>
            <p>delivery:{item.delivery}</p>
          </div>
          <div className="modal-footer">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    )
  );
}
