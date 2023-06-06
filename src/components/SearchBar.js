import React, { useState } from "react";

import ItemCard from "./ItemCard";
import "./SearchBar.css";
import { useSelector } from "react-redux";

import { deleteItem } from "../item.action";
import { useDispatch } from "react-redux";

export default function SearchBar({ items, keyword, onChange }) {
  const data = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  return (
    <div className="search-bar">
      <input
        placeholder="Search Items ... "
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="item-card-container">
        {data
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <ItemCard
              key={post.id}
              item={post}
              deleteItem={() => {
                dispatch(deleteItem(index));
              }}
            ></ItemCard>
          ))}
      </div>
    </div>
  );
}
