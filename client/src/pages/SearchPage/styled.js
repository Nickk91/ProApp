import styled from "styled-components";

const searchTitle = styled.div`
  /* padding-bottom: 22px; */
  font-size: 25px;
  margin-top: 50px;

  @media screen and (max-width: 365px) {
    margin-left: 1px;
  }
`;

const activeButton = styled.button`
  color: black;
  background: white;
  width: 140px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s;
`;

const inactiveButton = styled.button`
  background: black;
  color: white;
  width: 140px;
  height: 52px;
  border-radius: 7px;
  border: 2px solid;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3;
`;

const buttonsContainer = styled.button`
  display: flex;
  flex-direction: row;
  gap: 7px;
  margin-top: 10px;
`;

const searchInput = styled.input`
  margin-top: 20px;
  width: 280px;
  height: 52px;
`;

const submitButton = styled.button`
  margin-top: 20px;
  border-radius: 7px;
  background: black;
  color: white;
  height: 54px;
  width: 280px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 365px) {
    width: 95%;
    align-self: center;
  }
  @media screen and (min-width: 600px) {
    width: 95%;
    align-self: center;
  }
`;

export {
  searchTitle,
  activeButton,
  inactiveButton,
  buttonsContainer,
  searchInput,
  submitButton,
};
