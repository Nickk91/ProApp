import React from "react";
import "../style/pagestyle.css";
import "./loggedoutpage.css";
import "../../assets/images/Group.png"
const LoggedOutPage = () => {
  return (
    <section className="page">
      <div className="hero">

      </div>

      <div className="button-container">
        <button className="login btn">Log In</button>
        <button className="register btn">Register</button>
      </div>
    </section>
  );
};

export default LoggedOutPage;
