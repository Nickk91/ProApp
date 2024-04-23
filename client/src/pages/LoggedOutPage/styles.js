import styled from "styled-components";

const topContainer = styled.div`
  height: 100%;
  width: 100%;
  /* border: solid red 2px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 50vh;
`;
const bottomContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  /* border: solid green 2px; */
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
`;

const hero = styled.img`
  // background: url("../../assets/images/Group.png");
  width: 224px;
  height: 54px;
`;

const btnLogin = styled.button`
  color: black;
  background: white;
  width: 170px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s; /* Add transition for background-color and color */
`;

const btnRegister = styled.button`
  background: black;
  color: white;
  width: 170px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s; /* Add transition for background-color and color */
`;

const buttonContainer = styled.button`
  position: absolute;
  bottom: 27px;
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export {
  topContainer,
  hero,
  btnLogin,
  btnRegister,
  buttonContainer,
  bottomContainer,
};
