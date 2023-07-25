import React, { useState } from "react";
import { Button } from "./Button";
import "./DonateModal.css";
import { postItemsAsync } from "../redux/thunks";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "../redux/thunks";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";

export default function DonateModal({ show, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [donor, setDonor] = useState("");
  const [weight, setWeight] = useState("");
  const [imagelink, setImageLink] = useState("");
  const [bestbefore, setBestBefore] = useState("");
  const [delivery, setDelivery] = useState("");
  const [nutrition, setNutrition] = useState("");
  const currentPage = useAppSelector((state) => state.currentPage);
  const PAGESIZE = 6;

  const dispatch = useAppDispatch();
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
    e.preventDefault();
    console.log(
      "postItemsAsync arguments:",
      JSON.stringify({
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
    dispatch(
      postItemsAsync({
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
    console.log(
      "getItemsAsync arguments:",
      JSON.stringify({
        currentPage: currentPage,
        pageSize: PAGESIZE,
      })
    );
    dispatch(
      getItemsAsync({
        currentPage: currentPage,
        pageSize: PAGESIZE,
      })
    );
  };

  return (
    show === true && (
      <div data-testid="donate-modal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Donation Details</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  data-testid="name-label"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Description:
                <input
                  data-testid="desc-label"
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
              <input data-testid="donate-label" type="submit" value="Donate" />
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
