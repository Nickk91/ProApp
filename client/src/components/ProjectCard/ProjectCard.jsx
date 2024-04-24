import React from "react";
import * as S from "./Styles.js";

const ProjectCard = ({ project, onClick }) => {
  return (
    <S.cardContainer onClick={onClick}>
      <S.topLine>
        <p>
          <strong>{project.projectName.toUpperCase()}</strong>
        </p>
        <S.statusWrapper>
          {project.projectStatus === "in progress" ? (
            <S.statusIconInProg />
          ) : project.projectStatus === "todo" ? (
            <S.statusIconTodo />
          ) : (
            <S.statusIconDone />
          )}
          {project.projectStatus}
        </S.statusWrapper>
      </S.topLine>

      <S.projectImg src={project.projectImage} />
    </S.cardContainer>
  );
};

export default ProjectCard;
