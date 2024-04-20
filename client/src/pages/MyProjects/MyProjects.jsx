//MyProjects.jsx

import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";

const MyProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState();

  // ${import.meta.env.VITE_BASEURL}/projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/user`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          navigate("/noprojects");
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        console.log(data);
        if (data.length === 0) {
          navigate("/noprojects");
        }
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const navigate = useNavigate();

  const handleClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <S.page>
      <S.projectTitle>My projects</S.projectTitle>

      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleClick(project._id)}
          />
        ))
      )}
      <FooterMenu />
    </S.page>
  );
};

export default MyProjects;
