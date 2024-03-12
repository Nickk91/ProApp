import React from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { RegisterFormInputsPartTwo } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";

const SignupPage = ({ action }) => {
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
        inputs={RegisterFormInputsPartTwo}
        submitButtonText="SIGN UP"
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default SignupPage;
