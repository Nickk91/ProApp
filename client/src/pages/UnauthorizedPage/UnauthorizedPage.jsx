import React, { useEffect } from "react";
import "../style/pagestyle.css";
import * as S from "../../components/StyledComponents/styles.jsx";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(navigate("/"), 5000);
  }, []);
  return (
    <section className="page">
      <S.errorBox>Unauthorized Access!</S.errorBox>
    </section>
  );
};

export default UnauthorizedPage;
