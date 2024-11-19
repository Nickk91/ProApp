import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import * as ST from "./styled.js";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useParams } from "react-router-dom";

const MyProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userName, setUserName] = useState(null);
  const { userId } = useParams();
  console.log("userId:", userId);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchProjects = async () => {
        try {
          // throw new Error("Simulated error for testing");

          let url = `${import.meta.env.VITE_BASEURL}/projects/user`;

          // If userId is truthy, add it as a query parameter
          if (userId) {
            url += `?userId=${userId}`;
          }

          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

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

      const fetchUser = async () => {
        try {
          const userResponse = await fetch(
            `${import.meta.env.VITE_BASEURL}/users/${userId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!userResponse.ok) {
            throw new Error("Failed to fetch user data");
          }

          const userData = await userResponse.json();
          setUserName(userData.username);

          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching projects or user data:", error);
          setIsLoading(false);
          setErrorMessage(error.message);
        }
      };

      fetchProjects();

      if (userId) {
        fetchUser();
      }
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
        <S.ErrorBox>{errorMessage}</S.ErrorBox>
      ) : (
        <>
          {projects.length > 0 && (
            <S.pageTitle>{userId ? "User's" : "My"} projects</S.pageTitle>
          )}
          {userId && (
            <ST.userNameButton
              onClick={() => {
                navigate(`/userpage/${userId}`);
              }}
            >
              <strong>{userName}</strong>
            </ST.userNameButton>
          )}
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
