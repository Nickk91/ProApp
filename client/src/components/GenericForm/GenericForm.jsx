//

import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";
import validateForm from "../../Validation/validateForm.js";

const GenericForm = ({
  title,
  submitButtonText,
  inputs,
  onSubmit,
  displayError,
  search,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    onSubmit(e, formProps);
  };

  const errors = validateForm({});

  const FormComponent = search ? S.searchForm : S.form;

  return (
    <FormComponent
      onSubmit={handleSubmit}
      className="generic-from-wrapper"
      action=""
    >
      <S.formTitle>{title}</S.formTitle>
      <S.inputsContainer>
        {inputs.map((input, index) => (
          <React.Fragment key={index}>
            {/* {input.label && (
              // <S.label key={`${index} label`}>{input.label}</S.label>
              <S.label>{input.label}</S.label>
            )} */}
            <GenericInput
              key={index}
              type={input.type}
              label={input.label}
              name={input.name}
              attributes={input.attributes}
              placeholder={input.placeholder ? input.placeholder : ""}
              error={errors[input.name]}
              displayError={displayError}
            />
          </React.Fragment>
        ))}
        <S.submitButton>{submitButtonText}</S.submitButton>
      </S.inputsContainer>
    </FormComponent>
  );
};

export default GenericForm;
