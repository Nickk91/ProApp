import React from "react";
import { addProjectFormInputs } from "../../constants/formInputsData.js";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";

const AddProjectPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <section className="page">
      <S.ReturnIcon src={ReturnIcon} />
      <GenericForm
        title="Add Project"
        inputs={addProjectFormInputs}
        submitButtonText="ADD"
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default AddProjectPage;
