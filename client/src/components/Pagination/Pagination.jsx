import React, { useEffect } from "react";
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
