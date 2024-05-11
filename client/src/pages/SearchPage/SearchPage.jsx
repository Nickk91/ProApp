import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "./styled.js";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("project name");
  const [searchResults, setSearchResults] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  const [displayError, setDisplayError] = useState(false);

  const searchProjectsInputs = [
    {
      name: `search`,
      type: "text",
      placeholder: `search by ${searchBy}`,
      attributes: { required: true, minLength: 1 },
    },
  ];

  const navigate = useNavigate();

  const searchByProjectName = async (searchItem, token) => {
    try {
      setIsLoading(true);
      console.log(token);
      const response = await fetch(
        `${
          import.meta.env.VITE_BASEURL
        }/projects/project/projectname/${searchItem}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        console.log(data);
      } else {
        console.error("Search failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchByUsername = async (userName, token) => {
    try {
      console.log(userName);
      console.log(token);
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/search/getuserid/${userName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // setSearchResults(data);
        console.log(data);
        setSearchResults(data);
      } else {
        console.error("Search failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData(e.target);
    console.log(formData);

    if (searchBy === "project name") {
      const searchItem = formData.get("search");
      await searchByProjectName(searchItem, token);
    } else if (searchBy === "username") {
      const userName = formData.get("search");
      await searchByUsername(userName, token);
    }
  };

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;

  let currentProjects = [];

  if (searchResults.projects) {
    currentProjects = searchResults.projects.slice(
      firstProjectIndex,
      lastProjectIndex
    );
  }

  const handleClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  console.log(searchResults.projects);
  return (
    <section className="page">
      <S.searchTitle>Search projects by:</S.searchTitle>
      <S.buttonsContainer>
        {searchBy === "username" ? (
          <S.activeButton>USERNAME</S.activeButton>
        ) : (
          <S.inactiveButton onClick={() => setSearchBy("username")}>
            USERNAME
          </S.inactiveButton>
        )}

        {searchBy === "project name" ? (
          <S.activeButton>PROJECT NAME</S.activeButton>
        ) : (
          <S.inactiveButton onClick={() => setSearchBy("project name")}>
            PROJECT NAME
          </S.inactiveButton>
        )}
      </S.buttonsContainer>
      <GenericForm
        inputs={searchProjectsInputs}
        submitButtonText="Search"
        onSubmit={handleFormSubmit}
        displayError={displayError}
        search={true}
      />
      {isLoading ? (
        <Spinner />
      ) : !searchResults.projects ? null : (
        <>
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleClick(project._id)}
            />
          ))}
          <Pagination
            totalProjects={searchResults.projects.length}
            projectsPerPage={projectsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      <S.spaceDiv />

      <FooterMenu />
    </section>
  );
};

export default SearchPage;