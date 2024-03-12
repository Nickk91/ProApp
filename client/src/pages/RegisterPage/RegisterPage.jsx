import React from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";

const RegisterPage = ({ action }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  return (
    <>
      <S.ReturnIcon />
      <GenericForm
        title="Register"
        inputs={loginAndRegisterFormInputs}
        submitButtonText="NEXT"
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default RegisterPage;
