import React, { useState, useEffect, useRef } from "react";
import * as S from "./StyledComponent/StyledComponents.js";
import * as ST from "../../components/StyledComponents/styles.jsx";
import trash from "../../assets/images/trash_icon.svg";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import GenericModal from "../../components/GenericModal/GenericModal.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import ProjectStatusSelection from "../../components/ProjectStatusSelection/ProjectStatusSelection.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Task from "../../components/Task/Task.jsx";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useSelector } from "react-redux";
import ImageModal from "../../components/ImageModal/ImageModal.jsx";
import { checkIfUrl } from "../../utils/functions.js";

const ProjectPage = () => {
  const [selectedValue, setSelectedValue] = useState("TODO");
  const [expandedTaskList, setExpandedTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState([]);
  const [fetchProject, setFetchProject] = useState(false);
  const [username, setUsername] = useState();
  const [userIdProp, setUserIdProp] = useState();
  const [projectPicSrc, setProjectPicSrc] = useState(
    "https://cdn-icons-png.flaticon.com/512/4345/4345800.png"
  );
  const [imageIsLoaded, setIamgeIsLoaded] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const formRef = useRef(null);
  const [imageError, setImageError] = useState(null);
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleImageLoad = function () {
    setIamgeIsLoaded(true);
  };

  const { projectId } = useParams();

  const authLevel = useSelector((state) => state.auth.user?.authLevel);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // throw new Error("Simulated error for testing");
        // Fetch project data
        const response = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/project/${projectId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProject(data);
        data.projectImage && setProjectPicSrc(data.projectImage);
        const userId = data.user;

        const arr = data.projectTasks.map((task) => task.status);
        setTaskStatuses(arr);

        setSelectedValue(data.projectStatus.toUpperCase());

        const userResponse = await fetch(
          `${import.meta.env.VITE_BASEURL}/users/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();
        setUsername(userData.username);
        setUserIdProp(userData._id);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects or user data:", error);
        console.log("error.message:", error.message);
        setIsLoading(false);
        setErrorMessage(error.message);
      }
    };

    fetchProjects();
  }, [fetchProject, projectId, avatarUpdated]);

  const navigate = useNavigate();

  const [isProjectModalOpen, setProjectIsModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskIsModalOpen] = useState(false);
  const [taskToDeleteId, setTaskToDeleteId] = useState();

  const openModal = (item, taskId) => {
    console.log(taskId);
    if (item === "project") {
      setProjectIsModalOpen(true);
    }
    if (item === "task") {
      setTaskToDeleteId(taskId);

      setTaskIsModalOpen(true);
    }
  };
  const closeModal = (item) => {
    if (item === "project") setProjectIsModalOpen(false);
    if (item === "task") setTaskIsModalOpen(false);
  };

  const deleteTask = async (taskToDeleteId) => {
    try {
      console.log(taskToDeleteId);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/projects/${projectId}/deletetask`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ taskId: taskToDeleteId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch relevant project");
      }

      closeModal("task");
      setIsLoading(true);
      setFetchProject((fetchProject) => !fetchProject);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const deleteProject = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/projects/${projectId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      navigate("/");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const addTaskFunc = () => {
    navigate(`/projects/${projectId}/addtask`);
  };

  const handleUser = () => {
    navigate(`/userpage/${userIdProp}`);
  };

  const handleProjectStatus = async (e) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/projects/${projectId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ selectedValue: e }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update project status");
      }

      setSelectedValue(e.toUpperCase());
    } catch (error) {
      console.error("Error updating project status:", error);
    }
  };

  const handleTaskStatus = async (taskId, newStatus, i) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/projects/${projectId}/taskstatus`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ taskId: taskId, status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update task status");
      }

      setTaskStatuses((prevStatuses) => {
        const updatedStatuses = [...prevStatuses];
        updatedStatuses[i] = newStatus;
        return updatedStatuses;
      });
      console.log(taskStatuses);
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleExtendTask = (i) => {
    setExpandedTaskList((expandedTaskList) =>
      expandedTaskList.includes(i)
        ? expandedTaskList.filter((item) => item !== i)
        : [...expandedTaskList, i]
    );
  };

  const handleEditTask = async (taskId, taskName, taskDesc, taskStatus) => {
    const edit = true;
    navigate(`/projects/${projectId}/edit-task/${taskId}`, {
      state: { taskId, taskName, taskDesc, taskStatus, edit },
    });
  };

  const changeProjectPic = async (projectId, url) => {
    try {
      if (!token) throw new Error("No token found");

      const response = await fetch(
        `${
          import.meta.env.VITE_BASEURL
        }/projects/project/${projectId}/change-pic`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ projectId, url }),
        }
      );

      if (!response.ok) throw new Error("Failed to update user picture");

      setAvatarUpdated((prev) => !prev);
    } catch (error) {
      console.error("Error updating project picture:", error);
      setImageError(`Error updating project picture: ${error}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const url = formData.get("url");
    if (checkIfUrl(url)) {
      changeProjectPic(projectId, url);
      setImageModalOpen(false);
      setImageError(null);
    } else {
      console.log("Invalid URL");
      setImageError("Invalid URL");
    }
  };

  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <ST.ErrorBox>{errorMessage}</ST.ErrorBox>
      ) : (
        <>
          <S.topDiv>
            <S.projectTitle>{project.projectName}</S.projectTitle>
            {authLevel === userAuthLevels.admin ? (
              <S.userNameButton onClick={handleUser}>
                <strong>{username}</strong>
              </S.userNameButton>
            ) : (
              <S.trashIcon src={trash} onClick={() => openModal("project")} />
            )}
          </S.topDiv>
          <S.container>
            <S.selectDiv>
              <ProjectStatusSelection
                selectedValue={selectedValue}
                onChange={handleProjectStatus}
                type="project"
              />
            </S.selectDiv>

            {!imageIsLoaded && <S.ImagePlaceholder />}

            <S.projectImg
              onLoad={handleImageLoad}
              src={projectPicSrc}
              alt=""
              style={{ display: imageIsLoaded ? "block" : "none" }}
              onClick={() => setImageModalOpen((prev) => !prev)}
            />
          </S.container>

          <S.tasksHeader>
            <h2>TASKS</h2>
            <S.addTaskIcon
              src={addTask}
              onClick={() => addTaskFunc(projectId)}
            />
          </S.tasksHeader>

          <S.tasksContainer>
            {project.projectTasks.length === 0 ? (
              <S.noTasks>NO TASKS FOR CURRENT PROJECT :( </S.noTasks>
            ) : (
              <S.taskList>
                {project.projectTasks.map((task, i) => (
                  <S.listItem key={i}>
                    <S.taskName>{task.name}</S.taskName>

                    {expandedTaskList.includes(i) ? (
                      <Task
                        key={i}
                        task={task}
                        i={i}
                        taskStatuses={taskStatuses}
                        handleTaskStatus={handleTaskStatus}
                        openModal={openModal}
                        handleEditTask={handleEditTask}
                        handleExtendTask={handleExtendTask}
                        expanded={true}
                      />
                    ) : (
                      <Task
                        key={i}
                        task={task}
                        i={i}
                        taskStatuses={taskStatuses}
                        handleTaskStatus={handleTaskStatus}
                        openModal={openModal}
                        handleEditTask={handleEditTask}
                        handleExtendTask={handleExtendTask}
                        arrowIcon
                        expanded={false}
                      />
                    )}
                  </S.listItem>
                ))}
              </S.taskList>
            )}
          </S.tasksContainer>
          <GenericModal
            toDelete="project"
            isOpen={isProjectModalOpen}
            onRequestClose={() => closeModal("project")}
            onRequestDelete={deleteProject}
          />
          <GenericModal
            toDelete="task"
            isOpen={isTaskModalOpen}
            onRequestClose={() => closeModal("task")}
            onRequestDelete={() => deleteTask(taskToDeleteId)}
          />
        </>
      )}
      <FooterMenu />

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

export default ProjectPage;
