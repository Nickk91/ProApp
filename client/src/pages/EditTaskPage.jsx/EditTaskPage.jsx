import React from "react";
import * as S from "../../components/StyledComponents/styles.jsx";
import GenericTaskForm from "../../components/GenericTaskForm/GenericTaskForm.jsx";
import { addTaskFormInputs } from "../../constants/formInputsData.js";
import ReturnIcon from "../../assets/images/back_icon.svg";

const EditTaskPage = () => {
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
      />
    </section>
  );
};

export default EditTaskPage;
