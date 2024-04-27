//MyProjects.jsx

import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";

const MyProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchProjects = async () => {
        try {
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
          navigate("/noprojects");
        }
      };

      fetchProjects();
    } else {
      navigate("/loggedout");
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;

  let currentProjects = [];

  if (projects) {
    currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);
  }

  return (
    <section className="page">
      <S.projectTitle>My projects</S.projectTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleClick(project._id)}
          />
        ))
      )}
      <Pagination
        totalProjects={projects.length}
        projectsPerPage={projectsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <S.spaceDiv />

      <FooterMenu />
    </section>
  );
};

export default MyProjects;
