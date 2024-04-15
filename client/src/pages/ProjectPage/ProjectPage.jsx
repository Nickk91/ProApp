import React, { useState, useEffect } from "react";
import * as S from "./StyledComponent/StyledComponents.js";
import trash from "../../assets/images/trash_icon.svg";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import arrowIcon from "../../assets/images/icon_chevron_up.svg";
// import { tasks } from "../../constants/data.js";
import GenericModal from "../../components/GenericModal/GenericModal.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import ProjectStatusSelection from "../../components/ProjectStatusSelection/ProjectStatusSelection.jsx";
import TaskStatusSelection from "../../components/TaskStatusSelection/TaskStatusSelection.jsx";

const ProjectPage = ({}) => {
  const [selectedValue, setSelectedValue] = useState("TODO");
  const [extendedTaskList, setExtendedTaskList] = useState([]);
  const [userType, setUserType] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState([]);

  const { projectId } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");

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
        console.log(data.projectTasks);

        const arr = data.projectTasks.map((task) => task.status);
        console.log("Project tasks statuses are:", arr);
        setTaskStatuses(arr);

        setIsLoading(false);

        setSelectedValue(data.projectStatus.toUpperCase());
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  let username = "ELADJMC_82";

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteProject = () => {
    const deleteProject = async () => {
      try {
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
        navigate("/myprojects");
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    };

    deleteProject();
  };

  const addTaskFunc = () => {
    navigate(`/projects/${projectId}/addtask`);
  };

  const handleUser = () => {
    navigate("/userpage");
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
      // navigate(`/projects/${projectId}`);
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

      // taskStatuses, setTaskStatuses
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const src = "https://cdn-icons-png.flaticon.com/512/4345/4345800.png";

  const handleExtendTask = (i) => {
    setExtendedTaskList((extendedTaskList) =>
      extendedTaskList.includes(i)
        ? extendedTaskList.filter((item) => item !== i)
        : [...extendedTaskList, i]
    );
  };

  return (
    <S.page>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <S.topDiv>
            <S.projectTitle>{project.projectName}</S.projectTitle>
            {userType === "Admin" ? (
              <S.userNameButton onClick={handleUser}>
                <strong>{username}</strong>
              </S.userNameButton>
            ) : (
              <S.trashIcon src={trash} onClick={openModal} />
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

            <S.projectImg src={src} alt="" />
          </S.container>

          <S.tasksHeader>
            <h2>TASKS</h2>
            <S.addTaskIcon
              src={addTask}
              onClick={() => addTaskFunc(projectId)}
            />
          </S.tasksHeader>

          <S.tasksContainer>
            <S.taskList>
              {project.projectTasks.map((task, i) => (
                <S.listItem key={i}>
                  <p>{task.name}</p>

                  {extendedTaskList.includes(i) ? (
                    <S.taskStatusExpanded key={i}>
                      <S.statusWrapper>
                        {/* {task.status} */}
                        <TaskStatusSelection
                          selectedValue={taskStatuses[i]}
                          onChange={(newStatus) =>
                            handleTaskStatus(task._id, newStatus, i)
                          }
                          type="task"
                          key={task._id}
                          taskId={task.id}
                          handleTaskStatus={handleTaskStatus}
                        />
                      </S.statusWrapper>
                      <S.taskDescription> {task.description}</S.taskDescription>

                      <S.arrowIconUp
                        onClick={() => {
                          handleExtendTask(i);
                        }}
                        src={arrowIcon}
                      />
                    </S.taskStatusExpanded>
                  ) : (
                    <S.taskStatus key={i}>
                      <S.statusWrapper>
                        {/* tasks */}

                        <TaskStatusSelection
                          selectedValue={taskStatuses[i]}
                          onChange={(newStatus) =>
                            handleTaskStatus(task._id, newStatus, i)
                          }
                          type="task"
                          key={task._id}
                          taskId={task.id}
                          handleTaskStatus={handleTaskStatus}
                        />

                        {/* {task.status} */}
                      </S.statusWrapper>

                      <S.arrowIconDown
                        onClick={() => {
                          handleExtendTask(i);
                        }}
                        src={arrowIcon}
                      />
                    </S.taskStatus>
                  )}
                </S.listItem>
              ))}
            </S.taskList>
          </S.tasksContainer>
          <GenericModal
            toDelete="project"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            onRequestDelete={deleteProject}
          >
            <p>something</p>
          </GenericModal>
        </>
      )}
      <FooterMenu />
    </S.page>
  );
};

export default ProjectPage;
