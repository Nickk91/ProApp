import React, { useState } from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../style/pagestyle.css";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import validateTaskAdding from "../../Validation/validateTaskAdding.js";

const AddTaskPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [displayFormError, setDisplayFormError] = useState(false);
  const [formErrors, setFormErrors] = useState(undefined);
  const [serverError, setServerError] = useState(undefined);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const description = formData.get("description");
    // console.log("name:", name);
    // console.log("description:", description);

    const errors = validateTaskAdding({ name, description });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setDisplayFormError(true);
    }
    // console.log("formErrors.name:", formErrors.name);
    // console.log("formErrors.description:", formErrors.description);

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
      setServerError(
        `${error.message}. Please try again.` || "An unexpected error occurred."
      );
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
        formErrors={formErrors}
        displayFormError={displayFormError}
        serverError={serverError}
      />
      <FooterMenu />
    </section>
  );
};

export default AddTaskPage;
