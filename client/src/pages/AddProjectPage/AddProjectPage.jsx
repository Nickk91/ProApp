import React from "react";
import MyForm from "../../components/StyledComponents/MyForm.jsx";
import InputsContainer from "../../components/StyledComponents/InputsContainer.jsx";
import Input from "../../components/StyledComponents/Input.jsx";
import TextInputsContainer from "../../components/StyledComponents/TextInputsContainer.jsx";
import SubmitButton from "../../components/StyledComponents/SubmitButton.jsx";

const AddProjectPage = () => {
  return (
    <MyForm>
      <InputsContainer>
        <h1>Add Project</h1>
        <TextInputsContainer>
          <label id="projectName" htmlFor="">
            Project name
          </label>
          <Input type="text" name="Project name" placeholder="project name" />
          <label id="projectDescription" htmlFor="">
            Project description
          </label>
          <Input
            type="text"
            name="Project name"
            placeholder="project description"
          />
          <label id="projectImage" htmlFor="">
            Project image URL
          </label>

          <Input
            type="text"
            name="Project name"
            placeholder="project image URL"
          />
          <SubmitButton>ADD</SubmitButton>
        </TextInputsContainer>
      </InputsContainer>
    </MyForm>
  );
};

export default AddProjectPage;
