import styled from "styled-components";

export const topContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 50vh;
`;
export const bottomContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
`;

export const hero = styled.img`
  // background: url("../../assets/images/Group.png");
  width: 224px;
  height: 54px;
`;

export const btnLogin = styled.button`
  color: black;
  background: white;
  width: 170px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-weight: 900;
  }
`;

export const btnRegister = styled.button`
  background: black;
  color: white;
  width: 170px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-weight: 900;
  }
`;

export const buttonContainer = styled.div`
  position: absolute;
  bottom: 27px;
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
