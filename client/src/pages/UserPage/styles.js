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

const ImagePlaceholder = styled.div`
  width: 122px;
  height: 122px;

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid gray;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const list = styled.ul`
  list-style-type: none;
  margin-top: 5px;
`;
const h3 = styled.h3`
  margin-top: 10px;
  margin-bottom: 25px;
  @media screen and (min-width: 620px) {
    margin-top: -3px;
    margin-bottom: 20px;
  }
`;

const h32 = styled.h3`
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 40px;
  @media screen and (min-width: 620px) {
    margin-top: -3px;
    margin-bottom: 20px;
  }
`;
const miniWrap = styled.div`
  max-height: 230px;
  width: 300px;

  @media screen and (max-width: 345px) {
    /* padding-left: 10px; */
  }
`;

const listItem = styled.li`
  margin-top: 5px;
`;

const container = styled.div`
  /* margin-left: 40px; */
  /* border: 1px solid black; */
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: -40px;
  margin-bottom: 70px;
  @media screen and (min-width: 620px) {
    display: flex;
    flex-direction: row;

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
  /* height: 320px; */
  height: 50px;
  width: 200px;
`;

const errorMessage = styled.div`
  height: 50px;
  width: 100px;
  color: red;
  border: 2px dotted red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const errorMessageHidden = styled.div`
  display: hidden;
  height: 50px;
  width: 65%;
  color: red;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const addProjectIcon = styled.img`
  height: 24px;
  transition: transform 0.2s;
  cursor: pointer;
  z-index: 990;

  &:hover {
    transform: scale(1.3);
  }
`;
const addProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 200px;
  gap: 10px;
  margin-top: 4px;
  margin: 0 auto;
`;
const minDiv = styled.div``;

export {
  addProjectContainer,
  minDiv,
  page,
  userTitle,
  username,
  userImg,
  list,
  listItem,
  h3,
  h32,
  container,
  urlInput,
  acceptBtn,
  chartsContainer,
  miniWrap,
  userDetailsContainer,
  space,
  errorMessage,
  errorMessageHidden,
  addProjectIcon,
  ImagePlaceholder,
};
