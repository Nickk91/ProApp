import React, { useEffect, useState } from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import UserCard from "../../components/UserCard/UserCard.jsx";
import * as ST from "./styled.js";
import {
  handleSortByUsername,
  handleSortByProjectQuantity,
  handleSortByProjectTodosQuantity,
} from "../../utils/functions.js";

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const fetchUsers = async () => {
        try {
          // throw new Error("Simulated error for testing");
          const response = await fetch(
            `${import.meta.env.VITE_BASEURL}/users/`,
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

          if (data.length === 0) {
            navigate("/");
          }

          // Fetch projects after users are fetched
          const projectsResponse = await fetch(
            `${import.meta.env.VITE_BASEURL}/projects/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!projectsResponse.ok) {
            throw new Error("Failed to fetch projects");
          }

          const projectsData = await projectsResponse.json();
          setProjectsData(projectsData);

          // Populate projects in users
          const usersWithProjects = data.map((user) => ({
            ...user,
            projects: projectsData.filter(
              (project) => project.user === user._id
            ),
          }));

          setUsers(usersWithProjects);
        } catch (error) {
          console.error("Error fetching users or projects:", error);
          setErrorMessage(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchUsers();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  const handleClick = (userId) => {
    navigate(`/userpage/${userId}`);
  };

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  let currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const sortUsersByUsername = () => {
    const sortedUsers = handleSortByUsername(users);
    setUsers(sortedUsers);
  };

  const sortByProjectQuantity = () => {
    const sortedUsers = handleSortByProjectQuantity(users);
    setUsers(sortedUsers);
  };

  const sortByStatusProjectQuantity = (status) => {
    const sortedUsers = handleSortByProjectTodosQuantity(
      users,
      projectsData,
      status
    );
    setUsers(sortedUsers);
  };

  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <S.ErrorBox>{errorMessage}</S.ErrorBox>
      ) : (
        <>
          {users.length > 0 && <S.pageTitle>Users</S.pageTitle>}
          <ST.sortContainer>
            <ST.sortBtn onClick={sortUsersByUsername}>
              Sort by username
            </ST.sortBtn>
            <ST.sortBtn onClick={sortByProjectQuantity}>
              Sort by project quantity
            </ST.sortBtn>
            <ST.sortBtn onClick={() => sortByStatusProjectQuantity("todo")}>
              Sort by todo project quantity
            </ST.sortBtn>
            <ST.sortBtn
              onClick={() => sortByStatusProjectQuantity("in progress")}
            >
              Sort by in-prog. project quantity
            </ST.sortBtn>
            <ST.sortBtn onClick={() => sortByStatusProjectQuantity("done")}>
              Sort by done project quantity
            </ST.sortBtn>
          </ST.sortContainer>
          {currentUsers.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              onClick={() => handleClick(user._id)}
              projects={user.projects}
            />
          ))}
          <Pagination
            totalItems={users.length}
            ItemsPerPage={usersPerPage}
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

export default UsersPage;
