import styled from "styled-components";

export const sortContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 5px;
  margin-bottom: -10px;
`;

export const sortBtn = styled.button`
  color: black;
  background: white;
  width: 140px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, transform 0.3s ease-in-out; /* Corrected transition properties */
  cursor: pointer;
  will-change: transform; /* Helps the browser optimize the rendering */

  &:hover {
    transform: scale(1.03);
    background-color: beige;
    font-weight: 900;
  }
`;
