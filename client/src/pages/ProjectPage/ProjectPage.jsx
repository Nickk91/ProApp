import React, { useState, useEffect } from "react";
import * as S from "./StyledComponent/StyledComponents.js";
import trash from "../../assets/images/trash_icon.svg";
import addTask from "../../assets/images/icon_Plus_Circle_.svg";
import arrowIcon from "../../assets/images/icon_chevron_up.svg";
import { tasks } from "../../constants/data.js";
import GenericModal from "../../components/GenericModal/GenericModal.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProjectPage = ({}) => {
  const [selectedValue, setSelectedValue] = useState("IN PROGRESS");
  const [extendedTaskList, setExtendedTaskList] = useState([]);
  const [userType, setUserType] = useState("not");
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);

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
        setIsLoading(false);
        console.log("THE DATA IS:", data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  let username = "ELADJMC_82";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const addTaskFunc = () => {
    navigate(`/projects/${projectId}/addtask`);
    // path = "/projects/:projectId/addtask";
  };

  const handleUser = () => {
    navigate("/userpage");
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
              {selectedValue === "IN PROGRESS" && <S.statusIconInProg />}
              {selectedValue === "TODO" && <S.statusIconTodo />}
              {selectedValue === "DONE" && <S.statusIconDone />}
              <select
                style={{
                  width: "130px",
                  borderWidth: 0,
                  fontWeight: "600",
                  marginLeft: "6px",
                  fontSize: "14px",
                }}
                name="tasks"
                id="tasks"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="TODO">TODO</option>
                <option value="DONE">DONE</option>
              </select>
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
                        {task.status === "IN PROGRESS" ? (
                          <S.statusIconInProg />
                        ) : task.status === "TODO" ? (
                          <S.statusIconTodo />
                        ) : (
                          <S.statusIconDone />
                        )}
                        {task.status}
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
                        {task.status === "IN PROGRESS" ? (
                          <S.statusIconInProg />
                        ) : task.status === "TODO" ? (
                          <S.statusIconTodo />
                        ) : (
                          <S.statusIconDone />
                        )}

                        {task.status}
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
          >
            <p>something</p>
          </GenericModal>
        </>
      )}
    </S.page>
  );
};

export default ProjectPage;
