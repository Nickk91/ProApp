import React, { useEffect, useState } from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard.jsx";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import * as ST from "./styled.js";
import { PiXLight } from "react-icons/pi";
import { handleSortByUsername } from "../../utils/functions.js";

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(4);
  const [projects, setProjects] = useState([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);

  const navigate = useNavigate();
  const authLevel = useSelector((state) => state.auth.user?.authLevel);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const fetchUsers = async () => {
        try {
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
          setUsers(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (users.length === 0) return;
      setIsProjectsLoading(true);
      try {
        if (!token) throw new Error("No token found");

        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsProjectsLoading(false);
      }
    };

    fetchProjects();
  }, [token, users]);

  const handleClick = (userId) => {
    navigate(`/userpage/${userId}`);
  };

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;

  let currentUsers = users.slice(firstUserIndex, lastUserIndex);
  console.log(currentUsers);

  const sortUsers = () => {
    const sortedUsers = handleSortByUsername(users);
    setUsers(sortedUsers);
  };

  return (
    <section className="page">
      {isLoading || isProjectsLoading ? (
        <Spinner />
      ) : (
        <>
          <ST.sortContainer>
            <ST.sortBtn onClick={sortUsers}>Sort by username</ST.sortBtn>
            <ST.sortBtn>Sort by project quantity</ST.sortBtn>
          </ST.sortContainer>
          {users.length > 0 && <S.pageTitle>Users</S.pageTitle>}
          {currentUsers.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              onClick={() => handleClick(user._id)}
              projects={projects.filter((project) => {
                return project.user === user._id;
              })}
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
