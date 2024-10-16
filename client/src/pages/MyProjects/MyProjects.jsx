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
  const [projectsPerPage, setProjectsPerPage] = useState(4);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchProjects = async () => {
        try {
          // throw new Error("Simulated error for testing");
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
            throw new Error(
              "Failed to fetch projects. Please try to reload the page"
            );
          }

          const data = await response.json();

          if (data.length === 0) {
            navigate("/noprojects");
          }
          setProjects(data);
        } catch (error) {
          console.error("Error fetching projects:", error);
          setErrorMessage(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProjects();
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;

  const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);
  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <S.errorBox>{errorMessage}</S.errorBox>
      ) : (
        <>
          {projects.length > 0 && <S.pageTitle>My projects</S.pageTitle>}
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleClick(project._id)}
            />
          ))}
          <Pagination
            totalItems={projects.length}
            ItemsPerPage={projectsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}

      <S.spaceDiv />
      <FooterMenu />
    </section>
  );
};

export default MyProjects;
