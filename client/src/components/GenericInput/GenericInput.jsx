import React from "react";
import * as S from "../StyledComponents/styles.jsx";

const GenericInput = ({ label, type, name, placeholder, attributes = {} }) => {
  return (
    <>
      {label && <label htmlFor={name}></label>}
      <S.input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        {...attributes}
      />
    </>
  );
};

export default GenericInput;
