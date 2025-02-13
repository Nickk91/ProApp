//

import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";
import validateForm from "../../Validation/validateForm.js";

const SearchForm = ({ title, submitButtonText, inputs, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    onSubmit(e, formProps);
  };

  const errors = validateForm({});

  return (
    <S.form onSubmit={handleSubmit} className="generic-from-wrapper" action="">
      <S.formTitle>{title}</S.formTitle>
      <S.inputsContainer>
        {inputs.map((input, index) => (
          <>
            {input.label && <S.label>{input.label}</S.label>}
            <GenericInput
              type={input.type}
              label={input.label}
              name={input.name}
              attributes={input.attributes}
              placeholder={input.placeholder ? input.placeholder : ""}
              error={errors[input.name]}
            />
          </>
        ))}
        <S.submitButton>
          <strong>{submitButtonText.toUpperCase()}</strong>
        </S.submitButton>
      </S.inputsContainer>
    </S.form>
  );
};

export default SearchForm;
