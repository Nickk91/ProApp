import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectCounts, getTaskCounts } from "../../utils/dataUtils.js";
import { checkIfUrl } from "../../utils/functions.js";
import PieChartComp from "../../components/PieChart/PieChartComp.jsx";
import ImageModal from "../../components/ImageModal/ImageModal.jsx";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import { setUserId } from "../../slices/userIdSlice.js";
import * as ST from "../../components/StyledComponents/styles.jsx";
import "../style/pagestyle.css";

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageError, setImageError] = useState(null);

  const formRef = useRef(null);
  const { userId } = useParams();
  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const currentUserId = useSelector((state) => state.auth.user._id);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ownershipExpression =
    currentUserId === userId ? "My " : `${userData?.username}'s `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) throw new Error("No token found. Please log in");

        const userUrl =
          authLevel === userAuthLevels.admin && userId !== currentUserId
            ? `${import.meta.env.VITE_BASEURL}/users/${userId}`
            : `${import.meta.env.VITE_BASEURL}/users/current`;

        const userResponse = await fetch(userUrl, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!userResponse.ok) throw new Error("Failed to fetch user");

        const userData = await userResponse.json();
        setUserData(userData);

        const projectsResponse = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/project/user/${
            userData._id
          }`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!projectsResponse.ok) throw new Error("Failed to fetch projects");

        const projectsData = await projectsResponse.json();
        setProjects(projectsData.projects);
      } catch (error) {
        setImageError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [authLevel, userId, currentUserId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const url = formData.get("url");
    if (checkIfUrl(url)) {
      changeUserPic(userData._id, url);
      setImageModalOpen(false);
      setImageError(null);
    } else {
      setImageError("INVALID URL!");
    }
  };

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

      setUserData((prev) => ({ ...prev, avatar: url }));
    } catch (error) {
      console.error("Error updating user picture:", error);
      setImageError(`Error updating user picture: ${error.message}`);
    }
  };

  const projectsCounts = getProjectCounts(projects);
  const taskCounts = getTaskCounts(projects);

  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {imageError ? (
            <ST.ErrorBox>{imageError}</ST.ErrorBox>
          ) : (
            <>
              <S.userTitle>User Page:</S.userTitle>
              <S.UserImgWrapper data-tooltip="Click to replace image!">
                <S.UserImg
                  src={userData.avatar}
                  alt={`${userData.username}'s avatar`}
                  onClick={() => setImageModalOpen((prev) => !prev)}
                />
              </S.UserImgWrapper>
              <S.container>
                <S.list>
                  <S.userDetailsContainer>
                    <S.h3>User Details:</S.h3>
                    <S.listItem>Username: {userData?.username}</S.listItem>
                    <S.listItem>User Email: {userData?.email}</S.listItem>
                    <S.listItem>User Id: {userData?._id}</S.listItem>
                  </S.userDetailsContainer>

                  <S.actionsContainer>
                    <S.addProjectContainer>
                      <h3>Add Project:</h3>
                      <S.addProjectIcon
                        src={addTask}
                        onClick={() => {
                          dispatch(setUserId(userData._id));
                          navigate("/addproject");
                        }}
                      />
                    </S.addProjectContainer>
                    {projects.length > 0 && (
                      <S.userPorjectsBtn
                        onClick={() =>
                          navigate(
                            currentUserId === userId
                              ? "/"
                              : `/projects-of-user/${userId}`
                          )
                        }
                      >
                        {ownershipExpression.toUpperCase()}
                        PROJECTS
                      </S.userPorjectsBtn>
                    )}
                  </S.actionsContainer>

                  <S.chartsContainer>
                    {projects.length > 0 ? (
                      <>
                        <S.miniWrap>
                          <S.h32> Projects:</S.h32>
                          <PieChartComp
                            data={projectsCounts}
                            fill="#8884d8"
                            title="User Projects"
                          />
                        </S.miniWrap>

                        {taskCounts.some((obj) => obj.value > 0) && (
                          <S.miniWrap>
                            <S.h32>Tasks:</S.h32>
                            <PieChartComp
                              data={taskCounts}
                              fill="#2bc5da"
                              title="User Tasks"
                            />
                          </S.miniWrap>
                        )}
                      </>
                    ) : (
                      <h3>
                        <i>No projects found</i>
                      </h3>
                    )}
                  </S.chartsContainer>
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
            {imageError && <S.errorMessage>{imageError}</S.errorMessage>}
          </ImageModal>
        </>
      )}
    </section>
  );
};

export default Userpage;
