//MyProjects.jsx

import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";

const MyProjects = () => {
  const projectList = [
    {
      name: "Harmony",
      status: "IN PROGRESS",
      image: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",
    },
    {
      name: "Arabrew",
      status: "IN PROGRESS",
      image: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",
    },
    {
      name: "OTHER PROJECT",
      status: "DONE",
      image: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",
    },
    {
      name: "TODO",
      status: "TODO",
      image: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",
    },
  ];

  return (
    <S.page>
      <S.projectTitle>My projects</S.projectTitle>
      {projectList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </S.page>
  );
};

export default MyProjects;
