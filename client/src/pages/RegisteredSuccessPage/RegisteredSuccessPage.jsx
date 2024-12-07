import React, { useEffect, useState } from "react";
import "../style/pagestyle.css";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import "../style/pagestyle.css";
const RegisteredSuccessPage = () => {
  const [secs, setSecs] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecs((prevSecs) => {
        if (prevSecs < 1) {
          clearInterval(intervalId);
          navigate("/login");
        }
        return prevSecs - 1;
      });
    }, 1000);
  }, [navigate]);
  return (
    <section className="page">
      <S.hero> User Created </S.hero>
      <S.pageText>You'll be redircted in {secs} secs... </S.pageText>
    </section>
  );
};

export default RegisteredSuccessPage;
