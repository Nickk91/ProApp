import React from "react";
import "../style/pagestyle.css";
import "./loggedoutpage.css";
import "../../assets/images/Group.png";
const LoggedOutPage = () => {
  return (
    <section className="page">
      <div className="hero"></div>

      <div className="button-container">
        <button className="login btn">LOG IN</button>
        <button className="register btn">REGISTER</button>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default LoggedOutPage;
