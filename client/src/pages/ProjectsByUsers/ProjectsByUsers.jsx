//ProjectsByUsers.jsx

import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";

const ProjectsByUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(2);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchUsers = async () => {
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
            throw new Error("Failed to fetch users");
          }

          const data = await response.json();
          console.log(data);
          if (data.length === 0) {
            navigate("/noprojects");
          }
          setUsers(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching users:", error);
          navigate("/noprojects");
        }
      };

      fetchUsers();
    } else {
      navigate("/loggedout");
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = (userId) => {
    navigate(`/projects/${userId}`);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemIndex - itemsPerPage;

  let currentUsers = [];

  if (users) {
    currentUsers = users.slice(firstItemsIndex, lastItemIndex);
  }

  return (
    <section className="page">
      <S.projectTitle>Users</S.projectTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        currentUsers.map((user, index) => (
          <ProjectCard
            key={index}
            project={user}
            onClick={() => handleClick(user._id)}
          />
        ))
      )}
      <Pagination
        totalItems={users.length}
        ItemsPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <S.spaceDiv />

      <FooterMenu />
    </section>
  );
};

export default ProjectsByUsers;
