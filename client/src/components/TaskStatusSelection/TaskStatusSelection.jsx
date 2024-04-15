import React from "react";
import * as S from "./styled.js";

const TaskStatusSelection = ({
  selectedValue,
  onChange,
  key,
  taskId,
  // handleTaskStatus,
}) => {
  return (
    <S.selectDiv>
      {selectedValue === "in progress" && <S.statusIconInProg />}
      {selectedValue === "todo" && <S.statusIconTodo />}
      {selectedValue === "done" && <S.statusIconDone />}
      <S.select
        key={key}
        value={selectedValue}
        onChange={(e) => {
          onChange(e.target.value.toLowerCase());
          {
            handleTaskStatus(taskId, e.target.value.toLowerCase());
          }
        }}
      >
        <option value="in progress">in progress</option>
        <option value="todo">todo</option>
        <option value="done">done</option>
      </S.select>
    </S.selectDiv>
  );
};

export default TaskStatusSelection;
