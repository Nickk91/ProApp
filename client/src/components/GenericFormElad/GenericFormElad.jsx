import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import SformTitle from "../StyledComponents/SformTitle.jsx";
import Sform from "../StyledComponents/SForm.jsx";
import SinputsContainer from "../StyledComponents/SinputsContainer.jsx";
import SSubmitButton from "../StyledComponents/SSubmitButton.jsx";
SSubmitButton;

const GenericFormElad = ({ title, submitButtonText, inputs, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Element:", e.target);
    const formData = new FormData(e.target);
    console.log("Form Data:", formData);
    const formProps = Object.formEnteries(formData.entries());
    onSubmit(formProps);
  };
  return (
    <Sform onSubmit={handleSubmit} className="generic-from-wrapper" action="">
      <SformTitle>{title}</SformTitle>
      {/* <h2 className="form-title">{title}</h2> */}
      <SinputsContainer>
        {inputs.map((input, index) => (
          <GenericInput
            key={index}
            type={input.type}
            label={input.label}
            name={input.name}
            attributes={input.attributes}
            placeholder={input.placeHolder ? input.placeHolder : ""}
          />
        ))}
        <SSubmitButton>{submitButtonText}</SSubmitButton>
      </SinputsContainer>
    </Sform>
  );
};

export default GenericFormElad;
