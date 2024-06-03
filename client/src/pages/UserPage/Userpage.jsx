import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
import { useSelector } from "react-redux";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useParams } from "react-router-dom";
import { countProjectByStatus } from "../../constants/functions.js";

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [userIdToSearchBy, setUserIdToSearchBy] = useState();

  const { userId } = useParams();

  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const id = useSelector((state) => state.auth.user._id);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        console.log(token);
        if (!token) throw new Error("No token found");

        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/users/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch different user");

        const data = await response.json();
        setUserData(data);
        setUserIdToSearchBy(userId);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        if (!token) throw new Error("No token found");

        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/users/current`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch current user");

        const data = await response.json();
        setUserData(data);
        setUserIdToSearchBy(id);
        console.log(userIdToSearchBy);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (authLevel === userAuthLevels.admin && userId !== id) {
      fetchUserById();
    } else {
      fetchUser();
    }
  }, [authLevel, userId, id]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!userIdToSearchBy) return;
      try {
        console.log(userIdToSearchBy);
        console.log(token);

        if (!token) throw new Error("No token found");

        const response = await fetch(
          `${
            import.meta.env.VITE_BASEURL
          }/projects/project/user/${userIdToSearchBy}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        setProjects(data.projects);
        console.log("projects[0]", projects[0].projectStatus);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [userIdToSearchBy]);

  const inProgressProjectCount = countProjectByStatus(projects, "in progress");
  const todoProjectCount = countProjectByStatus(projects, "todo");
  const doneProjectCount = countProjectByStatus(projects, "todo");

  return (
    <section className="page">
      <S.userTitle>User Details:</S.userTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ul>
            <li>User Id: {userData?._id}</li>
            <li>Username: {userData?.username}</li>
            <li>User Email: {userData?.email}</li>
            <li>User's Total Projects: {projects.length}</li>
            <p>Out of these projects:</p>
            <li>
              {inProgressProjectCount === 1
                ? "1 project is in progress"
                : `${inProgressProjectCount} projects are in progress`}
            </li>
            <li>
              {todoProjectCount === 1
                ? "1 project is to do"
                : `${todoProjectCount} projects are to do`}
            </li>
            <li>
              {doneProjectCount === 1
                ? "1 project is done"
                : `${doneProjectCount} projects are done`}
            </li>
          </ul>
        </>
      )}
      <FooterMenu />
    </section>
  );
};

export default Userpage;
