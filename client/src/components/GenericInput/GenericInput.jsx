import React from "react";
import * as S from "../StyledComponents/styles.jsx";

const GenericInput = ({
  label,
  type,
  name,
  placeholder,
  error,
  displayError,
  attributes = {},
  value,
}) => {
  return (
    <>
      {label && <S.label htmlFor={name}>{label}</S.label>}
      <S.input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        {...attributes}
        defaultValue={value}
      />
      {displayError && <S.errorText>{error}</S.errorText>}
    </>
  );
};

export default GenericInput;
