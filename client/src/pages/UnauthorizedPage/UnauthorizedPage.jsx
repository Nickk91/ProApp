import React, { useEffect } from "react";
import "../style/pagestyle.css";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="page">
      <S.ErrorBox>Unauthorized Access! Redirecting in 5 seconds...</S.ErrorBox>
    </section>
  );
};

export default UnauthorizedPage;
