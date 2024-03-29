import React, { useState } from "react";
import * as S from "./StyledComponent/StyledComponents.js";
import trash from "../../assets/images/trash_icon.svg";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import arrowIcon from "../../assets/images/icon_chevron_up.svg";
import tasks from "../../constants/data.js";

const ProjectPage = () => {
  const [selectedValue, setSelectedValue] = useState("IN PROGRESS");
  const [extendedTaskList, setExtendedTaskList] = useState([]);

  const src = "https://cdn-icons-png.flaticon.com/512/4345/4345800.png";

  const handleExtendTask = (i) => {
    setExtendedTaskList((extendedTaskList) =>
      extendedTaskList.includes(i)
        ? extendedTaskList.filter((item) => item !== i)
        : [...extendedTaskList, i]
    );
  };

  return (
    <S.page>
      <S.topDiv>
        <S.projectTitle>Harmony</S.projectTitle>
        <S.trashIcon src={trash} />
      </S.topDiv>
      <S.container>
        <S.selectDiv>
          {selectedValue === "IN PROGRESS" && <S.statusIconInProg />}
          {selectedValue === "TODO" && <S.statusIconTodo />}
          {selectedValue === "DONE" && <S.statusIconDone />}
          <select
            style={{
              width: "130px",
              borderWidth: 0,
              fontWeight: "600",
              marginLeft: "6px",
              fontSize: "14px",
            }}
            name="tasks"
            id="tasks"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="TODO">TODO</option>
            <option value="DONE">DONE</option>
          </select>
        </S.selectDiv>

        <S.projectImg src={src} alt="" />
      </S.container>

      <S.tasksHeader>
        <h2>TASKS</h2>
        <S.addTaskIcon src={addTask} onClick={addTask} />
      </S.tasksHeader>

      <S.tasksContainer>
        <S.taskList>
          {tasks.map((task, i) => (
            <S.listItem key={i}>
              <p>{task.name}</p>

              {extendedTaskList.includes(i) ? (
                <S.taskStatusExpanded key={i}>
                  <S.statusWrapper>
                    {task.status === "IN PROGRESS" ? (
                      <S.statusIconInProg />
                    ) : task.status === "TODO" ? (
                      <S.statusIconTodo />
                    ) : (
                      <S.statusIconDone />
                    )}
                    {task.status}
                  </S.statusWrapper>
                  <S.taskDescription> {task.description}</S.taskDescription>

                  <S.arrowIconUp
                    onClick={() => {
                      handleExtendTask(i);
                    }}
                    src={arrowIcon}
                  />
                </S.taskStatusExpanded>
              ) : (
                <S.taskStatus key={i}>
                  <S.statusWrapper>
                    {task.status === "IN PROGRESS" ? (
                      <S.statusIconInProg />
                    ) : task.status === "TODO" ? (
                      <S.statusIconTodo />
                    ) : (
                      <S.statusIconDone />
                    )}

                    {task.status}
                  </S.statusWrapper>

                  <S.arrowIconDown
                    onClick={() => {
                      handleExtendTask(i);
                    }}
                    src={arrowIcon}
                  />
                </S.taskStatus>
              )}
            </S.listItem>
          ))}
        </S.taskList>
      </S.tasksContainer>
    </S.page>
  );
};

export default ProjectPage;
