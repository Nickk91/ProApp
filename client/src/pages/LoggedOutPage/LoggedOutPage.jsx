import React from "react";
import "../style/pagestyle.css";
import "./loggedoutpage.css";
const LoggedOutPage = () => {
  return (
    <section className="page">
      <div className="hero">ProApp</div>

      <div className="button-container">
        <button className="login btn">Login</button>
        <button className="register btn">Register</button>
      </div>
    </section>
  );
};

export default LoggedOutPage;
