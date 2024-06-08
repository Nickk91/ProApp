import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
import { useSelector } from "react-redux";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useParams } from "react-router-dom";
import { countTasks, sum } from "../../utils/functions.js";
import { getProjectCounts, getTaskCounts } from "../../utils/dataUtils.js";
import PieChartComp from "../../components/PieChart/PieChartComp.jsx";

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
  }, [authLevel, userId, id, token]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!userIdToSearchBy) return;
      try {
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [userIdToSearchBy, token]);

  const projectsCounts = getProjectCounts(projects);
  const taskCounts = getTaskCounts(projects);

  const totalTaskCount = sum(countTasks(projects));

  return (
    <section className="page">
      <S.userTitle>User Page:</S.userTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <S.userImg
            src={userData.avatar}
            alt={`${userData.username}'s avatar`}
          />
          <S.container>
            <S.list>
              <S.h3>User Details:</S.h3>
              <li>Username: {userData?.username}</li>
              <li>User Email: {userData?.email}</li>
              <li>User Id: {userData?._id}</li>
              <S.h3>User Projects:</S.h3>
              <PieChartComp
                data={projectsCounts}
                fill="#8884d8"
                title="Projects Breakdown"
              />
              <S.h3>Total tasks: {totalTaskCount}</S.h3>
              <PieChartComp
                data={taskCounts}
                fill="#2bc5da"
                title="Projects Breakdown"
              />
            </S.list>
          </S.container>
          <FooterMenu />
        </>
      )}
    </section>
  );
};

export default Userpage;
