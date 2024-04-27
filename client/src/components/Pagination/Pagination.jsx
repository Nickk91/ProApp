import React from "react";
import * as S from "./styled.js";

const Pagination = ({ totalProjects, projectsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <S.pageButton onClick={() => setCurrentPage(page)} key={index}>
            {page}
          </S.pageButton>
        );
      })}
    </div>
  );
};

export default Pagination;
