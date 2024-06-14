import React from "react";
import * as S from "./Styles"; // Ensure the correct path
import { toPercentage } from "../../utils/functions";

const UserCard = ({ user, projects, onClick }) => {
  const todoProjects = projects.filter((project) => {
    return project.projectStatus === "todo";
  });
  const inProgressProjects = projects.filter((project) => {
    return project.projectStatus === "in progress";
  });
  const doneProjects = projects.filter((project) => {
    return project.projectStatus === "done";
  });

  return (
    <S.cardContainer onClick={onClick}>
      <S.topLine>
        <S.username>
          <strong>{user.username.toUpperCase()}</strong>
        </S.username>
      </S.topLine>
      <S.midLine>
        <S.userImg src={user.avatar} />
        <S.list>
          <S.li>id: {user._id}</S.li>
          <S.li>username: {user.username}</S.li>
          <S.li>email: {user.email}</S.li>
        </S.list>
      </S.midLine>
      <S.bottomContainer>
        <S.list>
          <S.statusWrapper>
            <h4>
              Total projects: {projects.length}
              {projects.length > 0 ? " (100%)" : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconTodo />
            <h4>
              Todos: {todoProjects.length}{" "}
              {todoProjects.length > 0
                ? toPercentage(todoProjects.length / projects.length)
                : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconInProg />
            <h4>
              In progress: {inProgressProjects.length}{" "}
              {inProgressProjects.length > 0
                ? toPercentage(inProgressProjects.length / projects.length)
                : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconDone />
            <h4>
              Done: {doneProjects.length}{" "}
              {doneProjects.length > 0
                ? toPercentage(doneProjects.length / projects.length)
                : ""}
            </h4>
          </S.statusWrapper>
        </S.list>
      </S.bottomContainer>
    </S.cardContainer>
  );
};

// statusIconInProg,
// statusIconDone,
// statusIconTodo,

export default UserCard;
