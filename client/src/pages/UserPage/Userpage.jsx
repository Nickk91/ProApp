import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
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

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [userIdToSearchBy, setUserIdToSearchBy] = useState();
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const [imageError, setImageError] = useState(null);
  const formRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { userId } = useParams();
  console.log("userId:", userId);
  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const id = useSelector((state) => state.auth.user._id);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async (url) => {
      try {
        if (!token) throw new Error("No token found. Please log in");

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
        setErrorMessage(error.message);
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
      if (!userIdToSearchBy) {
        return;
      }
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
        setErrorMessage(error.message);
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

      setAvatarUpdated((prev) => !prev);
    } catch (error) {
      console.error("Error updating user picture:", error);
      setImageError(`Error updating user picture: ${error.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const url = formData.get("url");
    if (checkIfUrl(url)) {
      changeUserPic(userId, url);
      setImageModalOpen(false);
      setImageError(null);
    } else {
      setImageError("INVALID URL!");
    }
  };

  const projectsCounts = getProjectCounts(projects);

  const taskCounts = getTaskCounts(projects);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProject = (user_id) => {
    dispatch(setUserId(user_id));
    navigate("/addproject");
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="page">
      <S.userTitle>User Page:</S.userTitle>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <ST.ErrorBox>{errorMessage}</ST.ErrorBox>
      ) : (
        <>
          {!isImageLoaded && <S.ImagePlaceholder />}
          <S.userImg
            src={userData.avatar}
            alt={`${userData.username}'s avatar`}
            onClick={() => setImageModalOpen((prev) => !prev)}
            onLoad={handleImageLoad}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
          <S.container>
            <S.list>
              <S.userDetailsContainer>
                <S.h3>User Details:</S.h3>
                <S.listItem>Username: {userData?.username}</S.listItem>
                <S.listItem>User Email: {userData?.email}</S.listItem>
                <S.listItem>User Id: {userData?._id}</S.listItem>
              </S.userDetailsContainer>

              {isProjectsLoading ? (
                <Spinner />
              ) : (
                <>
                  <S.actionsContainer>
                    <S.addProjectContainer>
                      <h3>Add Project:</h3>

                      <S.addProjectIcon
                        src={addTask}
                        onClick={() => {
                          handleAddProject(userData._id);
                        }}
                      />
                    </S.addProjectContainer>
                    {projects.length > 0 ? (
                      <S.userPorjectsBtn
                        onClick={() => navigate(`/projects-of-user/${userId}`)}
                      >
                        User's Projects
                      </S.userPorjectsBtn>
                    ) : null}
                  </S.actionsContainer>

                  <S.chartsContainer>
                    {projects.length > 0 ? (
                      <>
                        <S.miniWrap>
                          <S.h32>User Projects:</S.h32>
                          <PieChartComp
                            data={projectsCounts}
                            fill="#8884d8"
                            title="User Projects"
                          />
                        </S.miniWrap>

                        {taskCounts.some((obj) => obj.value > 0) && (
                          <S.miniWrap>
                            <S.h32>User Tasks:</S.h32>
                            <PieChartComp
                              data={taskCounts}
                              fill="#2bc5da"
                              title="User Tasks"
                            />
                          </S.miniWrap>
                        )}
                      </>
                    ) : (
                      <>
                        <h3>
                          <i>No projects found</i>
                        </h3>
                      </>
                    )}
                  </S.chartsContainer>
                </>
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
        {imageError ? (
          <S.errorMessage>{imageError}</S.errorMessage>
        ) : (
          <S.errorMessageHidden />
        )}
      </ImageModal>
    </section>
  );
};

export default Userpage;
