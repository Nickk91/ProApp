import React from "react";
import * as S from "./styled.js";

const StatusSelection = ({
  inProg,
  todo,
  done,
  selectedValue,
  onChange,
  type,
  key,
}) => {
  return (
    <S.selectDiv>
      {selectedValue === inProg && <S.statusIconInProg />}
      {selectedValue === todo && <S.statusIconTodo />}
      {selectedValue === done && <S.statusIconDone />}
      <S.select
        key={key}
        name={type}
        id={type}
        value={selectedValue}
        onChange={(e) => {
          onChange(e.target.value.toLowerCase());
          {
            type === "project"
              ? handleProjectStatus(e.target.value)
              : handleTaskStatus(e.target.value);
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

export default StatusSelection;
