import React from "react";
import "./styled.css";

const Pagination = ({
  totalProjects,
  projectsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page == currentPage ? "pagebuttonactive" : "pagebutton"}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
