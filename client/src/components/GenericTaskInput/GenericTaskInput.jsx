import React from "react";
import * as S from "../StyledComponents/styles.jsx";

const GenericTaskInput = ({
  label,
  type,
  name,
  placeholder,
  attributes = {},
  value,
  formError,
  displayFormError,
  serverError,
}) => {
  console.log("GenericTaskInput: formError", formError);

  return (
    <>
      {label && <S.label htmlFor={name}></S.label>}
      <S.inputBox
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        {...attributes}
        defaultValue={value}
      />

      {!serverError && displayFormError && (
        <S.errorText>{formError}</S.errorText>
      )}
    </>
  );
};

export default GenericTaskInput;
