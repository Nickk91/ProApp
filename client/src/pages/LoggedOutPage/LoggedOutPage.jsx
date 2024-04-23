import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pagestyle.css";
import "../../assets/images/Group.png";
import heroImg from "../../assets/images/Group.png";
import * as S from "./styles.js";
import "../style/pagestyle.css";

const LoggedOutPage = () => {
  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate(`/${value}`);
  };

  return (
    <section className="page">
      <S.topContainer>
        <S.hero src={heroImg} alt="Hero Image" />
      </S.topContainer>
      <S.bottomContainer>
        <S.buttonContainer>
          <S.btnLogin onClick={() => handleClick("login")}>LOG IN</S.btnLogin>
          <S.btnRegister onClick={() => handleClick("register")}>
            REGISTER
          </S.btnRegister>
        </S.buttonContainer>
      </S.bottomContainer>
    </section>
  );
};

export default LoggedOutPage;
