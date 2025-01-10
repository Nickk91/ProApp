import React, { useEffect, useState } from "react";
import "../style/pagestyle.css";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const NotFoundPage = () => {
  const [secs, setSecs] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const countInterval = setInterval(() => {
      setSecs((prevSecs) => {
        if (prevSecs < 1) {
          clearInterval(countInterval);
          navigate("/");
        }
        return prevSecs - 1;
      });
    }, 1000);
  }, [navigate]);

  return (
    <section className="page">
      <S.hero> PAGE NOT FOUND! </S.hero>
      <S.pageText>You'll be redircted in {secs} secs... </S.pageText>
    </section>
  );
};

export default NotFoundPage;
