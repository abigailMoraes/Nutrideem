import React from "react";
import "./Order.css";
import SearchBar from "../components/SearchBar";
export default function Order() {
  return (
    <div id="order" className="order">
      <div className="order-description">
        <h1>Order Now</h1>
        <h2>Reserve items for pickup or delivery</h2>
        <p>Items can be filtered by best before dates, weight and brand</p>
        <SearchBar />
      </div>
    </div>
  );
}
