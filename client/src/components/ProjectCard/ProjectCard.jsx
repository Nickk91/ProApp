import React from "react";
import * as S from "./Styles.js";

const ProjectCard = ({ project, onClick }) => {
  return (
    <S.cardContainer>
      <S.topLine>
        <p>
          <strong>{project.projectName.toUpperCase()}</strong>
        </p>
        <S.statusWrapper>
          {project.projectStatus === "IN PROGRESS" ? (
            <S.statusIconInProg />
          ) : project.projectStatus === "TODO" ? (
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
