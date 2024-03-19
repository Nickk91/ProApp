import React from "react";
import * as S from "../StyledComponents/styles.jsx";

const GenericTaskInput = ({
  label,
  type,
  name,
  placeholder,
  attributes = {},
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
      />
    </>
  );
};

export default GenericTaskInput;
