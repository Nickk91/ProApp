import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
import { useSelector } from "react-redux";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useParams } from "react-router-dom";
import { getProjectCounts, getTaskCounts } from "../../utils/dataUtils.js";
import { checkIfUrl } from "../../utils/functions.js";
import PieChartComp from "../../components/PieChart/PieChartComp.jsx";
import ImageModal from "../../components/ImageModal/ImageModal.jsx";

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [userIdToSearchBy, setUserIdToSearchBy] = useState();
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const formRef = useRef(null);

  const { userId } = useParams();
  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const id = useSelector((state) => state.auth.user._id);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async (url) => {
      try {
        if (!token) throw new Error("No token found");

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user");

        const data = await response.json();
        setUserData(data);
        setUserIdToSearchBy(data._id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const url =
      authLevel === userAuthLevels.admin && userId !== id
        ? `${import.meta.env.VITE_BASEURL}/users/${userId}`
        : `${import.meta.env.VITE_BASEURL}/users/current`;

    fetchUser(url);
  }, [authLevel, userId, id, token, avatarUpdated]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!userIdToSearchBy) return;
      setIsProjectsLoading(true);
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
      } finally {
        setIsProjectsLoading(false);
      }
    };

    fetchProjects();
  }, [userIdToSearchBy, token]);

  const changeUserPic = async (userId, url) => {
    try {
      if (!token) throw new Error("No token found");

      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/update-pic`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId, url }),
        }
      );

      if (!response.ok) throw new Error("Failed to update user picture");

      console.log("User picture updated successfully");
      setAvatarUpdated((prev) => !prev);
    } catch (error) {
      console.error("Error updating user picture:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const url = formData.get("url");
    if (checkIfUrl(url)) {
      changeUserPic(userId, url);
      setImageModalOpen(false);
    } else {
      console.log("Invalid URL");
    }
  };

  const projectsCounts = getProjectCounts(projects);
  const taskCounts = getTaskCounts(projects);

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
            onClick={() => setImageModalOpen((prev) => !prev)}
          />
          <S.container>
            <S.list>
              <S.userDetailsContainer>
                <S.h3>User Details:</S.h3>
                <li>Username: {userData?.username}</li>
                <li>User Email: {userData?.email}</li>
                <li>User Id: {userData?._id}</li>
              </S.userDetailsContainer>

              {isProjectsLoading ? (
                <Spinner />
              ) : (
                <S.chartsContainer>
                  <S.miniWrap>
                    <S.h3>User Projects:</S.h3>
                    <PieChartComp
                      data={projectsCounts}
                      fill="#8884d8"
                      title="User Projects"
                    />
                  </S.miniWrap>
                  <S.miniWrap>
                    <S.h3>User Tasks:</S.h3>
                    <PieChartComp
                      data={taskCounts}
                      fill="#2bc5da"
                      title="User Tasks"
                    />
                  </S.miniWrap>
                </S.chartsContainer>
              )}
            </S.list>
          </S.container>
          <FooterMenu />
        </>
      )}
      <ImageModal
        toDelete="project"
        isOpen={imageModalOpen}
        onRequestClose={() => setImageModalOpen(false)}
        onRequestChangeUrl={handleSubmit}
      >
        <form ref={formRef} onSubmit={handleSubmit}>
          Please enter the URL of your image
          <S.urlInput type="url" name="url" required />
          <S.acceptBtn type="submit">Accept</S.acceptBtn>
        </form>
      </ImageModal>
    </section>
  );
};

export default Userpage;
