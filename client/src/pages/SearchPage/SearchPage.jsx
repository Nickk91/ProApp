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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData(e.target);
    console.log(formData);

    let searchItem;
    if (searchBy === "project name") {
      searchItem = formData.get("search");
      console.log(searchItem);

      try {
        // console.log("trying to fetch");
        setIsLoading(true);
        // console.log("isLoading:", isLoading);
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
        console.log("response is:", response);

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
          console.log(data);
        } else {
          console.error("Search failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (searchBy === "username") {
      const userName = formData.get("username");
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/users/getuserid`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: userName }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const token = data.accessToken;

          localStorage.setItem("token", token);
          navigate("/");
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
        setDisplayError(true);
      }
    }

    setIsLoading(false);
  };
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
      />
      {/* {data && data.projects.map(() => {})}; */}
      {isLoading ? (
        <Spinner />
      ) : (
        searchResults.projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleClick(project._id)}
          />
        ))
      )}
      <Pagination />
      <FooterMenu />
    </section>
  );
};

export default SearchPage;
