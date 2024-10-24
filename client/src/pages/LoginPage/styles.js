import styled from "styled-components";

const formTitle = styled.div`
  padding-bottom: 22px;

  font-size: 32px;
  margin-right: 130px;
  margin-top: 60px;
`;

const formTitleInv = styled.div`
  display: hidden;
  padding-bottom: 22px;

  font-size: 32px;
  margin-right: 130px;
  margin-top: 60px;
`;

const hero = styled.img`
  width: 360px;
  margin-top: 60px;

  @media screen and (min-width: 900px) {
    margin-top: 0px;
  }
`;
const h2 = styled.h2`
  margin-top: 50px;
  font-size: 25px;

  @media screen and (min-width: 900px) {
    margin-top: 20px;
  }
`;
const addLogo = styled.img`
  margin-top: 30px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Increase size by 10% on hover */
  }
`;

const space = styled.div`
  height: 150px;
`;

export { space, formTitle, hero, h2, addLogo, formTitleInv };
