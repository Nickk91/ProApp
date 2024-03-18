import React from "react";
import "../style/pagestyle.css";
import * as S from "./styles.js";
import heroImg from "../../assets/images/NoProjects.png";

const HomePage = () => {
  return <section className="page">
      <S.formTitle>My Projects</S.formTitle>
      <S.hero src={heroImg} alt="Hero Image of no projects" />

  </section>
};

export default HomePage;
