import React, { useEffect } from "react";
import "../style/pagestyle.css";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/StyledComponents/styles.jsx";

const RegisteredSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const myTimeout = setTimeout(() => navigate("/login"), 2000);
    return () => clearTimeout(myTimeout);
  }, [navigate]);
  return (
    <section className="page">
      <S.pageTitle>User Created</S.pageTitle>
    </section>
  );
};

export default RegisteredSuccessPage;
