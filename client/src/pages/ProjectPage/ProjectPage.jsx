import React from "react";
import * as S from "./StyledComponent/StyledComponents.js";
import trash from "../../assets/images/trash_icon.svg";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import downIcon from "../../assets/images/icon_chevron_down.svg";

const ProjectPage = () => {
  const src = "https://cdn-icons-png.flaticon.com/512/4345/4345800.png";
  const tasks = [
    {
      name: "Create HomePage",
      description: "bla bla bla bla bla bla bla bla",
      status: "TODO",
    },
    {
      name: "Create Schema",
      description: "bla bla bla bla bla bla bla bla",
      status: "TODO",
    },
    {
      name: "Add Button HomePage",
      description: "In home page add a button with the text 'Add'",
      status: "TODO",
    },
    {
      name: "Create LoginPage",
      description: "bla bla bla bla bla bla bla bla",
      status: "IN PROGRESS",
    },
    {
      name: "Create Login button",
      description: "bla bla bla bla bla bla bla bla",
      status: "IN PROGRESS",
    },
    {
      name: "Create Route for login",
      description: "In the backend bla bla bla bla bla bla'",
      status: "DONE",
    },
    {
      name: "Start a new node server",
      description: "bla bla bla bla bla bla bla bla",
      status: "DONE",
    },
    {
      name: "Create a new Vite Project",
      description: "bla bla bla bla bla bla bla bla",
      status: "DONE",
    },
  ];
  return (
    <S.page>
      <S.topDiv>
        <S.projectTitle>Harmony</S.projectTitle>
        <S.trashIcon src={trash} />
      </S.topDiv>
      <S.container>
        <S.selectDiv>
          <select
            style={{
              width: "130px",
              borderWidth: 0,
              fontWeight: "600",
              marginLeft: "6px",
            }}
            name="tasks"
            id="tasks"
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
        <S.addTaskIcon src={addTask} />
      </S.tasksHeader>

      <S.tasksContainer>
        <S.taskList>
          {tasks.map((task, i) => (
            <S.listItem key={i}>
              <p>{task.name}</p>
              <S.taskStatus>
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

                <S.arrowIcon src={downIcon} />
              </S.taskStatus>
            </S.listItem>
          ))}
        </S.taskList>
      </S.tasksContainer>
    </S.page>
  );
};

// statusIconInProg,
// statusIconDone,
// statusIconTodo,

export default ProjectPage;
