import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

  const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid blue;
    border-bottom: 16px solid blue;
    width: 120px;
    height: 120px;
    margin: auto 0%;
    animation: ${spin} 2s linear infinite;
  `;

  return <Loader />;
};

export default Spinner;
