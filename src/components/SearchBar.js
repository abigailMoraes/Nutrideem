import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ItemCard from "./ItemCard";
import "./SearchBar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "../redux/thunks";
import { deleteItemsAsync } from "../redux/thunks";

export default function SearchBar() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.list);
  const isLoading = useSelector((state) => state.loading);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const PAGESIZE = 6;

  const [query, setQuery] = useState("");

  const handleDeleteItem = (id) => {
    dispatch(deleteItemsAsync(id));
    dispatch(
      getItemsAsync({
        currentPage: currentPage,
        pageSize: PAGESIZE,
        query: query,
      })
    );
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
                key={item.id}
                item={item}
                handleDelete={() => handleDeleteItem(item.id)}
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
