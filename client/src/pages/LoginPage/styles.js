import styled from "styled-components";

export const formTitle = styled.div`
  padding-bottom: 22px;
  font-size: 32px;
  margin-right: 130px;
  margin-top: 60px;
`;

export const formTitleInv = styled.div`
  display: hidden;
  padding-bottom: 22px;
  font-size: 32px;
  margin-right: 130px;
  margin-top: 60px;
`;

export const hero = styled.img`
  width: 360px;
  margin-top: 60px;

  @media screen and (min-width: 900px) {
    margin-top: 0px;
  }
`;
export const h2 = styled.h2`
  margin-top: 50px;
  font-size: 25px;

  @media screen and (min-width: 900px) {
    margin-top: 20px;
  }
`;
export const addLogo = styled.img`
  margin-top: 30px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const space = styled.div`
  height: 150px;
`;
