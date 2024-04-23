//MyProjects.jsx

import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";

const MyProjects = ({ userLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState();

  // ${import.meta.env.VITE_BASEURL}/projects
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const token = localStorage.getItem("token");

  //       const response = await fetch(
  //         `${import.meta.env.VITE_BASEURL}/projects/user`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch projects");
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //       if (data.length === 0) {
  //         navigate("/noprojects");
  //       }
  //       setProjects(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //       navigate("/noprojects");
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  // useEffect(() => {
  //   if (userLoggedIn) {
  //     const fetchProjects = async () => {
  //       try {
  //         const token = localStorage.getItem("token");

  //         const response = await fetch(
  //           `${import.meta.env.VITE_BASEURL}/projects/user`,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );

  //         if (!response.ok) {
  //           throw new Error("Failed to fetch projects");
  //         }

  //         const data = await response.json();
  //         console.log(data);
  //         if (data.length === 0) {
  //           navigate("/noprojects");
  //         }
  //         setProjects(data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching projects:", error);
  //         navigate("/noprojects");
  //       }
  //     };

  //     fetchProjects();
  //   } else {
  //     navigate("/loggedout");
  //   }
  // }, [userLoggedIn]);

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

  return (
    <section className="page">
      <S.projectTitle>My projects</S.projectTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleClick(project._id)}
          />
        ))
      )}
      <S.spaceDiv />

      <FooterMenu />
    </section>
  );
};

export default MyProjects;
