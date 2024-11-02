import React from "react";
import * as S from "./styled.js";

const ProjectStatusSelection = ({ selectedValue, onChange, type, key }) => {
  return (
    <S.selectDiv>
      {selectedValue === "IN PROGRESS" && <S.statusIconInProg />}
      {selectedValue === "TODO" && <S.statusIconTodo />}
      {selectedValue === "DONE" && <S.statusIconDone />}
      <S.select
        key={key}
        name={type}
        id={type}
        value={selectedValue}
        onChange={(e) => {
          onChange(e.target.value.toLowerCase());
          {
            handleProjectStatus(e.target.value);
          }
        }}
      >
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="TODO">TODO</option>
        <option value="DONE">DONE</option>
      </S.select>
    </S.selectDiv>
  );
};

export default ProjectStatusSelection;
