import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import "../style/pagestyle.css";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import validateTaskAdding from "../../Validation/validateTaskAdding.js";
import { useState } from "react";

const EditTaskPage = () => {
  const [formErrors, setFormErrors] = useState(undefined);
  const [displayFormError, setDisplayFormError] = useState(false);
  const [serverError, setServerError] = useState(undefined);
  const [typedInInput, setTypedInInput] = useState(false);

  const location = useLocation();
  const { taskId, taskName, taskDesc, taskStatus, edit } = location.state;
  console.log("taskName:", taskName);
  console.log("taskDesc:", taskDesc);

  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("taskName");
    const description = formData.get("taskDescription");
    console.log("name:", name);
    console.log("description:", description);

    // const errors = validateTaskAdding({ name, description });
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   setDisplayFormError(true);
    //   return;
    // }

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
        navigate(`/projects/${projectId}`);
      } else {
        console.error("Editing task failed:", await response.json());
        setServerError("Failed to save changes for task. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
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
        formError={formErrors}
        displayFormError={displayFormError}
        serverError={serverError}
      />
      <FooterMenu />
    </section>
  );
};

export default EditTaskPage;
