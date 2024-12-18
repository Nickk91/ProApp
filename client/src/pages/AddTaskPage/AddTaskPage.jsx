import React, { useEffect, useState } from "react";
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
  const [serverError, setServerError] = useState(undefined);

  useEffect(() => {
    if (!projectId) {
      navigate("/projects"); // Redirect if no projectId
    }
  }, [projectId, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");

    try {
      const selectedTaskStatus = localStorage.getItem("taskStatus") || "TODO";
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/projects/project/${projectId}/addtask`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, description, selectedTaskStatus }),
        }
      );

      if (response.ok) {
        navigate(`/projects/${projectId}`);
      } else {
        setServerError("Failed to add task. Please try again.");
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="page">
      <S.ReturnIcon
        onClick={() => navigate(`/projects/${projectId}`)}
        src={ReturnIcon}
      />
      <GenericTaskForm
        title="Add Task"
        inputs={addTaskFormInputs}
        submitButtonText="ADD TASK"
        onSubmit={handleFormSubmit}
        serverError={serverError}
      />
      <FooterMenu />
    </section>
  );
};

export default AddTaskPage;
