import React from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";

const RegisterPage = ({ action }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  return (
    <section className="page">
      <S.ReturnIcon src={ReturnIcon} />
      <GenericForm
        title="Register"
        inputs={loginAndRegisterFormInputs}
        submitButtonText="NEXT"
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default RegisterPage;
