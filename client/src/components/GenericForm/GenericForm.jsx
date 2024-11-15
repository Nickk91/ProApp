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
  serverError,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    onSubmit(e, formProps);
  };

  const errors = validateForm({});

  const FormComponent = search ? S.searchForm : S.form;

  return (
    <FormComponent
      onSubmit={handleSubmit}
      className="generic-form-wrapper"
      action=""
    >
      <S.formTitle>{title}</S.formTitle>
      <S.inputsContainer>
        {inputs.map((input) => (
          <React.Fragment key={input.name}>
            <GenericInput
              type={input.type}
              label={input.label}
              name={input.name}
              attributes={input.attributes}
              placeholder={input.placeholder ? input.placeholder : ""}
              error={errors[input.name]}
              serverError={serverError}
              displayError={displayError}
            />
          </React.Fragment>
        ))}

        {<S.errorText>{serverError && serverError}</S.errorText>}

        <S.submitButton>{submitButtonText}</S.submitButton>
      </S.inputsContainer>
    </FormComponent>
  );
};

export default GenericForm;
