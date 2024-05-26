import React, { useEffect } from "react";
import "./styled.css";

// totalItems={projects.length}
// ItemsPerPage

const Pagination = ({
  totalItems,
  ItemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / ItemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    console.log("currentPage:", currentPage, "typeof:", typeof currentPage);
  }, [currentPage]);

  return (
    <div>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => {
            console.log("Clicked page:", page);
            setCurrentPage(page);
          }}
          className={
            page === currentPage ? "pagebutton pagebuttonactive" : "pagebutton"
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
