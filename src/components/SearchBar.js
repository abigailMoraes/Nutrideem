import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ItemCard from "./ItemCard";
import "./SearchBar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "../redux/thunks";
import { deleteItemsAsync } from "../redux/thunks";
import { getNutritionAsync } from "../redux/nutritionThunk";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.list);
  const isLoading = useAppSelector((state) => state.items.loading);
  const currentPage = useAppSelector((state) => state.items.currentPage);
  const totalPages = useAppSelector((state) => state.items.totalPages);
  const PAGESIZE = 6;

  const [query, setQuery] = useState("");

  const handleDeleteItem = (id) => {
    console.log(id);
    dispatch(deleteItemsAsync(id));
  };

  const handlePageChange = (page) => {
    dispatch(
      getItemsAsync({
        currentPage: page,
        pageSize: PAGESIZE,
      })
    );
  };

  const handleSearch = (q) => {
    setQuery(q);
    if (q === "") {
      dispatch(
        getItemsAsync({
          pageSize: PAGESIZE,
        })
      );
    }
    if (q !== "") {
      dispatch(
        getItemsAsync({
          pageSize: PAGESIZE,
          query: query,
        })
      );
    }
  };
  useEffect(() => {
    dispatch(
      getItemsAsync({
        currentPage: currentPage,
        pageSize: PAGESIZE,
      })
    );
  }, [dispatch, currentPage]);

  return (
    <div className="search-bar">
      <input
        placeholder="Search Items..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      {isLoading ? (
        <div>... Loading</div>
      ) : (
        <div>
          <div className="item-card-container">
            {items.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleDelete={() => handleDeleteItem(item._id)}
              />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
