import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/pagestyle.css";
import "./loggedoutpage.css";
import "../../assets/images/Group.png";
import LoginRegisterPage from "../LoginRegisterPage/LoginRegisterPage";
import { useDispatch } from "react-redux";
import { setAction } from "../../slices/actionSlice.js";

const LoggedOutPage = () => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(setAction("Log In"));
  };

  const handleRegisterClick = () => {
    dispatch(setAction("Register"));
  };

  return (
    <section className="page">
      <div className="hero"></div>

      <div className="button-container">
        <Link
          to={{
            pathname: "/login",
          }}
          className="login btn"
          onClick={handleLoginClick}
        >
          LOG IN
        </Link>
        <Link
          to={{
            pathname: "/register",
          }}
          className="register btn"
          onClick={handleRegisterClick}
        >
          REGISTER
        </Link>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default LoggedOutPage;
