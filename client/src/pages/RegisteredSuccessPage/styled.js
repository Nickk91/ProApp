import styled from "styled-components";

export const hero = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12vw;
  line-height: 1.2;
  text-align: center;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 5vw;
  }
  @media (max-height: 500px) {
    top: 50%; /* Adjust position for very short viewports */
  }
`;
export const pageText = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  line-height: 1.2;
  text-align: center;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 3.5vw;
  }
  @media (max-height: 500px) {
    top: 50%; /* Adjust position for very short viewports */
  }
`;
