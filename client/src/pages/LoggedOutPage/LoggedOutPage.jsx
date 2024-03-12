import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/pagestyle.css";
import "./loggedoutpage.css";
import "../../assets/images/Group.png";
import { useDispatch } from "react-redux";
import { setAction } from "../../slices/actionSlice.js";

import * as S from "./styles.js";

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
      <S.topContainer>
        <div className="hero"></div>
        <S.hero />
      </S.topContainer>
      <S.bottomContainer>
        <S.buttonContainer>
          <S.btnLogin
            to={{
              pathname: "/login",
            }}
            className="login btn"
            onClick={handleLoginClick}
          >
            LOG IN
          </S.btnLogin>
          <S.btnRegister
            to={{
              pathname: "/register",
            }}
            className="register btn"
            onClick={handleRegisterClick}
          >
            REGISTER
          </S.btnRegister>
        </S.buttonContainer>
      </S.bottomContainer>

      {/* <div className="line"></div> */}
    </section>
  );
};

export default LoggedOutPage;

{
  /* <S.bottomContainer>
<S.buttonContainer>
  <S.btnLogin>
    <Link
      to={{
        pathname: "/login",
      }}
      className="login btn"
      onClick={handleLoginClick}
    >
      LOG IN
    </Link>
  </S.btnLogin>
  <S.btnRegister>
    <Link
      to={{
        pathname: "/register",
      }}
      className="register btn"
      onClick={handleRegisterClick}
    >
      REGISTER
    </Link>
  </S.btnRegister>
</S.buttonContainer> */
}
