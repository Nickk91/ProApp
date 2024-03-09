import React from "react";
import "../style/pagestyle.css";
import "./login.css";
// import ActionComponent from "../../components/ActionComponent/ActionComponent";
import registerFormModel from "../../models/registerFormModel.js";
import loginFormModel from "../../models/loginFormModel.js";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";

const LoginRegisterPage = ({ action }) => {
  // const action = "Register";

  const submitFunction = (e) => {
    e.preventDefault();
    console.log("we submitted");
  };

  // console.log("the action in the LoginRegisterPage is:", action);
  return (
    <main className="page">
      {/* <ActionComponent action={action} /> */}
      {action === "Register" ? (
        <GenericForm
          buttonTitle={"Submit"}
          formTitle={"Register"}
          handleSubmit={submitFunction}
          inputs={registerFormModel}
        />
      ) : (
        <GenericForm
          buttonTitle={"LOG IN"}
          formTitle={"Log in"}
          handleSubmit={submitFunction}
          inputs={loginFormModel}
        />
      )}
      {/* <main className="page"></main> */}
    </main>
  );
};

export default LoginRegisterPage;
