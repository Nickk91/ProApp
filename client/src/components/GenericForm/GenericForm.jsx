/* eslint-disable react/prop-types */
import React from "react";
import "./GenericForm.css";

import styled from "styled-components";

const SubmitButton = styled.button`
  margin-top: 20px;
  border-radius: 7px;
  background: black;
  color: white;
  height: 54px;
  width: 355px;
  font-size: 11px;
  font-weight: 700;
`;

const Input = styled.input`
  border: 2px solid black;
  background-color: white;
`;

const TextInputsContainer = styled.div`
  border: green solid 2px;
  margin-top: 27px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InputsContainer = styled.div`
  border: red solid 2px;
  height: 400px;
`;

const MyForm = styled.div`
  margin-top: 100px;
  border: yellow 2px solid;
  height: 100vh;
`;

const GenericForm = ({ buttonTitle, handleSubmit, formTitle, inputs }) => {
  return (
    <MyForm onSubmit={handleSubmit}>
      <InputsContainer>
        <h2>{formTitle}</h2>
        <TextInputsContainer>
          {inputs.map((inpt, index) => {
            return (
              <Input
                key={index}
                id={inpt.type}
                type={inpt.type}
                name={inpt.name ? inpt.name : ""}
              />
            );
          })}
          <SubmitButton className="submit" type="submit">
            {buttonTitle}
          </SubmitButton>
        </TextInputsContainer>
      </InputsContainer>
    </MyForm>
  );
};

export default GenericForm;
