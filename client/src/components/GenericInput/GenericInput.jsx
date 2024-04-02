//GenericInput.jsx

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
}) => {
  return (
    <>
      {label && <S.label htmlFor={name}></S.label>}
      <S.input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        {...attributes}
      />
      {displayError && <S.errorText>{error}</S.errorText>}
    </>
  );
};

export default GenericInput;
