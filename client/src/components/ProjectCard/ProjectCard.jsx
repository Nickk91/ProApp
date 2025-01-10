import React, { useState } from "react";
import * as S from "./Styles.js";

const ProjectCard = ({ project, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <S.cardContainer onClick={onClick}>
      <S.topLine>
        <S.projectname>
          <strong>{project.projectName.toUpperCase()}</strong>
        </S.projectname>
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

      {!isImageLoaded && <S.ImagePlaceholder />}
      <S.projectImg
        src={project.projectImage}
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? "block" : "none" }}
        alt={project.projectName}
      />
    </S.cardContainer>
  );
};

export default ProjectCard;
