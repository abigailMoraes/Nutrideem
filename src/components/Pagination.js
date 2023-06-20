import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button${
            pageNumber === currentPage ? " active" : ""
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
}

export default Pagination;
