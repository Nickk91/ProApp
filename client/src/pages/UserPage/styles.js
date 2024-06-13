import styled from "styled-components";

const page = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  align-items: center;
  min-height: 550px;
  min-width: 300px;
`;

const userTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
  margin-top: 20px;
`;

const username = styled.div`
  max-width: 150px;
`;

const userImg = styled.img`
  width: 135px;
  height: 122px;
  border: 1px solid black;
  margin-top: -10px;

  border-radius: 10px;
  box-shadow: 2px 2px 5px gray;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 5px gray;
  }
`;
const list = styled.ul`
  list-style-type: none;
  margin-top: 5px;
`;
const h3 = styled.h3`
  margin-top: 10px;
  margin-bottom: 3px;
  @media screen and (min-width: 620px) {
    margin-top: -3px;
    margin-bottom: 20px;
  }
`;
const miniWrap = styled.div`
  /* border: 1px solid black; */
  max-height: 230px;

  @media screen and (max-width: 345px) {
    padding-left: 10px;
  }
`;

const listItem = styled.li``;

const container = styled.div`
  margin-left: 40px;
`;
const urlInput = styled.input`
  margin-top: 10px;
  height: 25px;
  width: 190px;
`;

const acceptBtn = styled.button`
  border: 3px solid black;
  margin-top: 20px;
  height: 34px;
  width: 70px;
  color: black;
  background-color: white;
  border-radius: 9px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const chartsContainer = styled.div`
  margin-left: -40px;
  margin-bottom: 70px;
  @media screen and (min-width: 620px) {
    display: flex;
    margin-top: 20px;
    margin-left: 0px;
    gap: 35px;
  }
`;

const userDetailsContainer = styled.div`
  max-width: 794px;
  @media screen and (min-width: 620px) {
    display: flex;
    margin-top: 20px;
  }
`;

const space = styled.div`
  height: 320px;
  width: 200px;
  border: 20px solid black;
`;

export {
  page,
  userTitle,
  username,
  userImg,
  list,
  listItem,
  h3,
  container,
  urlInput,
  acceptBtn,
  chartsContainer,
  miniWrap,
  userDetailsContainer,
  space,
};
