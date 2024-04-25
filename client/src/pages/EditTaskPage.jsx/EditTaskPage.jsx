import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import "../style/pagestyle.css";
import { useLocation } from "react-router-dom";

const EditTaskPage = () => {
  const location = useLocation();
  const { taskId, taskName, taskDescription, taskStatus, edit } =
    location.state;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <section className="page">
      <S.ReturnIcon src={ReturnIcon} />
      <GenericTaskForm
        title="Edit Task"
        inputs={addTaskFormInputs}
        submitButtonText="EDIT TASK"
        onSubmit={handleFormSubmit}
        taskId={taskId}
        taskName={taskName}
        taskDescription={taskDescription}
        taskStatus={taskStatus}
        edit={edit}
      />
    </section>
  );
};

export default EditTaskPage;
