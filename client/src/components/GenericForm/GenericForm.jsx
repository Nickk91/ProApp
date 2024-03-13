import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";

const GenericForm = ({ title, submitButtonText, inputs, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Element:", e.target);
    const formData = new FormData(e.target);
    console.log("Form Data:", formData);
    const formProps = Object.formEnteries(formData.entries());
    onSubmit(formProps);
  };
  return (
    <S.form onSubmit={handleSubmit} className="generic-from-wrapper" action="">
      <S.formTitle>{title}</S.formTitle>
      <S.inputsContainer>
        {inputs.map((input, index) => (
          <>
            {input.label && <S.label>{input.label}</S.label>}
            <GenericInput
              key={index}
              type={input.type}
              label={input.label}
              name={input.name}
              attributes={input.attributes}
              placeholder={input.placeholder ? input.placeholder : ""}
            />

            {/* {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            {error.username && <p style={{ color: "red" }}>{error.username}</p>} */}
          </>
        ))}
        <S.submitButton>{submitButtonText}</S.submitButton>
      </S.inputsContainer>
    </S.form>
  );
};
// const loginAndRegisterFormInputs = [
//   {
//     name: "email",
//     type: "email",
//     // label: "Username",

//     placeholder: "jane@example.com",
//     attributes: {
//       required: true,
//       minLength: 4,
//     },
//   },
//   {
//     name: "password",
//     type: "password",
//     placeholder: "password",
//     // label: "Password",
//     attributes: { required: true, minLength: 8 },
//   },
// ];

export default GenericForm;
