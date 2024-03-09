import React from "react";
import "./actioncomponent.css";

const ActionComponent = ({ action }) => {
  return (
    <div className="inputs-container">
      <h1 className="login">{action === "Log In" ? "Login" : "Register"}</h1>
      <input className="email" type="email" id="email" name="email" />
      <input
        type="password"
        id="pass"
        name="password"
        minLength="8"
        required
        placeholder="Type your password"
        className="password"
      />
      {action === "Log In" ? "Log In" : "Register"}
      <input
        id="login-submit"
        type="submit"
        value={action === "Log In" ? "Log In" : "Register"}
      />
    </div>
  );
};

export default ActionComponent;
