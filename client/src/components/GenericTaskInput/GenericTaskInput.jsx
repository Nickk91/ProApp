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
  serverError,
}) => {
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

      {!serverError && formError && <S.errorText>{formError}</S.errorText>}
    </>
  );
};

export default GenericTaskInput;
