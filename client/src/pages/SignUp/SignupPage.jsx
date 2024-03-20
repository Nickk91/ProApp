import React from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { RegisterFormInputsPartTwo } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";

const SignupPage = ({ action }) => {
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
        inputs={RegisterFormInputsPartTwo}
        submitButtonText="SIGN UP"
        onSubmit={handleFormSubmit}
      />
      <S.p>
        By siging up, you agree to Photo's <u>Terms of Service</u> and{" "}
        <u>Privacy Policy.</u>
      </S.p>
    </section>
  );
};

export default SignupPage;
