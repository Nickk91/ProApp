import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/project");
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
    </section>
  );
};

export default AddTaskPage;
