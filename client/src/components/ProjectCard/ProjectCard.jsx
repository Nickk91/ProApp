import React from "react";
import * as S from "./Styles.js";

const ProjectCard = ({ project }) => {
  return (
    <S.cardContainer>
      <S.topLine>
        <p>
          <strong>{project.name.toUpperCase()}</strong>
        </p>
        <S.statusWrapper>
          {project.status === "IN PROGRESS" ? (
            <S.statusIconInProg />
          ) : project.status === "TODO" ? (
            <S.statusIconTodo />
          ) : (
            <S.statusIconDone />
          )}
          {project.status}
        </S.statusWrapper>
      </S.topLine>

      <S.projectImg />
    </S.cardContainer>
  );
};

export default ProjectCard;
