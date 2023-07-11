import React, { useState } from "react";
import { Button } from "./Button";
import "./ItemModal.css";
import { useDispatch } from "react-redux";
import { updateItemsAsync } from "../redux/thunks";

export default function ItemModal({ item, show, onClose }) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [brand, setBrand] = useState(item.brand);
  const [donor, setDonor] = useState(item.donor);
  const [weight, setWeight] = useState(item.weight);
  const [imagelink, setImageLink] = useState(item.img);
  const [bestbefore, setBestBefore] = useState(item.bestbefore);
  const [delivery, setDelivery] = useState(item.delivery);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    var itemUpdate = {
      _id: item._id,
      name: name,
      description: description,
      brand: brand,
      donor: donor,
      weight: weight,
      img: imagelink,
      bestbefore: bestbefore,
      delivery: delivery,
    };
    console.log(itemUpdate);
    dispatch(updateItemsAsync(itemUpdate));
  };

  return (
    show === true && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{item.name}</h4>
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
                <textarea
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
                <textarea
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
