import React from "react";
import Sinput from "../StyledComponents/Sinput";

const GenericInput = ({ label, type, name, attributes = {} }) => {
  return (
    <>
      {label && <label htmlFor={name} className="generic-input-label"></label>}
      <Sinput
        type={type}
        name={name}
        id={name}
        className="generic-input"
        {...attributes}
      />
    </>
  );
};

export default GenericInput;
