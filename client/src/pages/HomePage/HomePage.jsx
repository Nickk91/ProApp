import React, { useState } from "react";
import "../style/pagestyle.css";
import * as S from "../LoginPage/styles.js";
import heroImg from "../../assets/images/NoProjects.svg";
import addLogo from "../../assets/images/icon_Plus_Circle_.svg";
import { useNavigate } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
import Spinner from "../../components/Spinner/Spinner.jsx";

const HomePage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate("/addproject");
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <section className="page">
      {isImageLoaded && <S.formTitleInv>My Projects</S.formTitleInv>}
      <S.hero
        src={heroImg}
        alt="Hero Image of no projects"
        onLoad={handleImageLoad}
      />
      {isImageLoaded ? (
        <>
          <S.h2>Add your first project</S.h2>
          <S.addLogo
            src={addLogo}
            onClick={handleAddProject}
            alt="Hero Image of no projects"
          />
          <S.space />
        </>
      ) : (
        <Spinner />
      )}

      <FooterMenu />
    </section>
  );
};

export default HomePage;
