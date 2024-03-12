import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";

const GenericFormElad = ({ title, submitButtonText, inputs, onSubmit }) => {
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
      {/* <SformTitle>{title}</SformTitle> */}
      {/* <h2 className="form-title">{title}</h2> */}
      <S.inputsContainer>
        {inputs.map((input, index) => (
          <GenericInput
            key={index}
            type={input.type}
            label={input.label}
            name={input.name}
            attributes={input.attributes}
            placeholder={input.placeholder ? input.placeholder : ""}
          />
        ))}
        <S.submitButton>{submitButtonText}</S.submitButton>
      </S.inputsContainer>
    </S.form>
  );
};

export default GenericFormElad;
