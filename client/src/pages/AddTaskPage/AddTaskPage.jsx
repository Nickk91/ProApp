import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../style/pagestyle.css";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";

const AddTaskPage = () => {
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
        `${import.meta.env.VITE_BASEURL}/projects/project/${projectId}/addtask`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            description,
            selectedTaskStatus,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate(`/projects/${projectId}`);
      } else {
        console.error("Adding task failed:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="page">
      <S.ReturnIcon onClick={handleBack} src={ReturnIcon} />
      <GenericTaskForm
        title="Add Task"
        toDelete="task"
        inputs={addTaskFormInputs}
        submitButtonText="ADD TASK"
        onSubmit={handleFormSubmit}
      />
      <FooterMenu />
    </section>
  );
};

export default AddTaskPage;
