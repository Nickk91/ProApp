import React from "react";
import GenericFormElad from "../../components/GenericFormElad/GenericFormElad.jsx";
import loginFormInputs from "../../models/registerFormInputs.js";
import SReturn from "../../components/StyledComponents/SReturn.jsx";
const TestPage = ({ action }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <>
      <SReturn />

      {action === "Register" ? (
        <GenericFormElad
          title="Register"
          inputs={registerFormInputs}
          submitButtonText="NEXT"
          onSubmit={handleFormSubmit}
        />
      ) : (
        <GenericFormElad
          title="Log in"
          inputs={loginFormInputs}
          submitButtonText="LOG IN"
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

// const loginFormInputs = [
//   {
//     name: "email",
//     type: "email",
//     attributes: { required: true, minLength: 4 },
//   },
//   {
//     name: "password",
//     type: "password",
//     attributes: { required: true, minLength: 8 },
//   },
// ];

export default TestPage;
