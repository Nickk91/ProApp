import React from "react";
import { addProjectFormInputs } from "../../constants/formInputsData.js";
import GenericFormElad from "../../components/GenericForm/GenericForm.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";

const AddProjectPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <>
      <S.ReturnIcon />
      <GenericFormElad
        title="Add Project"
        inputs={addProjectFormInputs}
        submitButtonText="NEXT"
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default AddProjectPage;
