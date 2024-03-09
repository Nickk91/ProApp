import React from "react";
import "../style/pagestyle.css";
import "./register.css";

const RegisterPage = () => {
  return (
    <section className="page">
      {/* <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z"
          fill="black"
          fill-opacity="0.8"
        />
      </svg> */}

      <h1 className="register">Register</h1>
      <div className="inputs-container">
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
        <input id="register-submit" type="submit" value="Register" />
      </div>
      <div className="line"></div>
    </section>
  );
};

export default RegisterPage;
