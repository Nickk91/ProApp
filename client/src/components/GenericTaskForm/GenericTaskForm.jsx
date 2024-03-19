import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";
import GenericTaskInput from "../GenericTaskInput/GenericTaskInput.jsx";

const GenericTaskForm = ({ title, submitButtonText, inputs, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Element:", e.target);
    const formData = new FormData(e.target);
    console.log("Form Data:", formData);
    const formProps = Object.fromEntries(formData.entries());
    onSubmit(formProps);
  };

  console.log("THE INPUTS ARE:", inputs[1].placeholder);

  return (
    <S.form onSubmit={handleSubmit} className="generic-from-wrapper" action="">
      <S.formTitle>{title}</S.formTitle>
      <S.inputsContainer>
        <GenericInput
          key={inputs[0].name}
          type={inputs[0].type}
          name={inputs[0].name}
          attributes={inputs[0].attributes}
          placeholder={inputs[0].placeholder ? inputs[0].placeholder : ""}
        />
        <GenericTaskInput
          key={inputs[1].name}
          type={inputs[1].type}
          name={inputs[1].name}
          attributes={inputs[1].attributes}
          placeholder={inputs[1].placeholder ? inputs[1].placeholder : ""}
        />
        <S.submitButton>{submitButtonText}</S.submitButton>
      </S.inputsContainer>
    </S.form>
  );
};

// const addTaskFormInputs = [
//     {
//       name: "task name",
//       type: "text",
//       placeholder: "Task Name",
//       attributes: { required: true, minLength: 1 },
//     },
//     {
//       name: "task description",
//       type: "text",
//       label: "Task description",
//       placeholder: "Task name",
//       attributes: { required: true, minLength: 1 },
//     },
//   ];

export default GenericTaskForm;
