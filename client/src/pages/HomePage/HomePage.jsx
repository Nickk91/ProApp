import React from "react";
import "../style/pagestyle.css";
import * as S from "./styles.js";
import heroImg from "../../assets/images/NoProjects.svg";
import addLogo from "../../assets/images/icon _Plus_Circle_.svg";

const HomePage = () => {
  return (
    <section className="page">
      <S.formTitle>My Projects</S.formTitle>
      <S.hero src={heroImg} alt="Hero Image of no projects" />
      <S.h2>Add your first project</S.h2>
      <S.addLogo src={addLogo} alt="Hero Image of no projects" />
    </section>
  );
};

export default HomePage;
