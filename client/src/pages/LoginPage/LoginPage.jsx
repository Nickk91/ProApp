import React from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";

const LoginPage = ({ action }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  return (
    <section className="page">
      <S.ReturnIcon />

      <GenericForm
        title="Log in"
        inputs={loginAndRegisterFormInputs}
        submitButtonText="LOG IN"
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default LoginPage;
