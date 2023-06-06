import React, { useState } from "react";
import { Button } from "./Button";
import "./DonateModal.css";
import { addItem, persistItems } from "../item.action";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

export default function DonateModal({ show, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [donor, setDonor] = useState("");
  const [weight, setWeight] = useState("");
  const [imagelink, setImageLink] = useState("");
  const [bestbefore, setBestBefore] = useState("");
  const [delivery, setDelivery] = useState("");

  const dispatch = useDispatch();
  const clearFields = () => {
    setName("");
    setDescription("");
    setBestBefore("");
    setBrand("");
    setDelivery("");
    setDonor("");
    setImageLink("");
    setWeight("");
  };

  const handleSubmit = (e) => {
    console.log("donate");
    e.preventDefault();
    dispatch(
      addItem({
        name: name,
        description: description,
        brand: brand,
        donor: donor,
        weight: weight,
        img: imagelink,
        bestbefore: bestbefore,
        delivery: delivery,
      })
    );
    dispatch(persistItems());
  };

  return (
    show === true && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Donation Details</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                />
              </label>
              <label>
                Brand:
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  name="brand"
                />
              </label>
              <label>
                Donor:
                <input
                  type="text"
                  value={donor}
                  onChange={(e) => setDonor(e.target.value)}
                  name="donor"
                />
              </label>
              <label>
                Weight:
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  name="weight"
                />
              </label>
              <label>
                Image Link:
                <input
                  type="text"
                  value={imagelink}
                  onChange={(e) => setImageLink(e.target.value)}
                  name="img"
                />
              </label>
              <label>
                Best Before:
                <input
                  type="text"
                  value={bestbefore}
                  onChange={(e) => setBestBefore(e.target.value)}
                  name="bestbefore"
                />
              </label>
              <label>
                Delivery:
                <input
                  type="text"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  name="delivery"
                />
              </label>
              <input type="submit" value="Donate" />
            </form>
          </div>
          <div className="modal-footer">
            <Button onClick={onClose}>Close</Button>
            <Button onClick={clearFields}>Clear</Button>
          </div>
        </div>
      </div>
    )
  );
}
