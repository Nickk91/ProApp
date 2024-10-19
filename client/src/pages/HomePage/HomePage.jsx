import React from "react";
import "../style/pagestyle.css";
import * as S from "./styles.js";
import heroImg from "../../assets/images/NoProjects.svg";
import addLogo from "../../assets/images/icon_Plus_Circle_.svg";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate("/addproject");
  };
  return (
    <section className="page">
      <S.formTitleInv>My Projects</S.formTitleInv>
      <S.hero src={heroImg} alt="Hero Image of no projects" />
      <S.h2>Add your first project</S.h2>
      <S.addLogo
        src={addLogo}
        onClick={handleAddProject}
        alt="Hero Image of no projects"
      />
      <S.space />
      <FooterMenu />
    </section>
  );
};

export default HomePage;
