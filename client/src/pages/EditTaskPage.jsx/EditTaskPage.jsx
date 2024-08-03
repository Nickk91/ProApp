import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import "../style/pagestyle.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
const EditTaskPage = () => {
  const location = useLocation();
  const { taskId, taskName, taskDesc, taskStatus, edit } = location.state;

  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("taskName");
    const description = formData.get("taskDescription");

    try {
      const selectedTaskStatus = localStorage.getItem("taskStatus");

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${
          import.meta.env.VITE_BASEURL
        }/projects/project/${projectId}/edit-task`,

        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            taskId,
            name,
            description,
            selectedTaskStatus,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate(`/projects/${projectId}`); // Redirect to the project page after adding the task
      } else {
        console.error("Editing task failed:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
      setDisplayError(true);
    }
  };

  return (
    <section className="page">
      <S.ReturnIcon
        src={ReturnIcon}
        onClick={() => navigate(`/projects/${projectId}`)}
      />
      <GenericTaskForm
        title="Edit Task"
        inputs={addTaskFormInputs}
        submitButtonText="EDIT TASK"
        onSubmit={handleFormSubmit}
        taskId={taskId}
        taskName={taskName}
        taskDesc={taskDesc}
        taskStatus={taskStatus}
        edit={edit}
      />
      <FooterMenu />
    </section>
  );
};

export default EditTaskPage;
