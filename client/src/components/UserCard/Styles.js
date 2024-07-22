import styled from "styled-components";
import { ul } from "../FooterMenu/Styled";

const statusIconInProg = styled.div`
  height: 14px;
  width: 14px;
  background-color: #ff9900;
  border-radius: 50%;
`;
const statusIconDone = styled.div`
  height: 14px;
  width: 14px;
  background-color: #03d60c;
  border-radius: 50%;
`;
const topLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const midLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const statusIconTodo = styled.div`
  height: 14px;
  width: 14px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;

const statusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

const userImg = styled.img`
  width: 50px;
  height: 54px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 10px;
`;

const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

const cardContainer = styled.div`
  margin-top: 50px;
  width: 300px;
  height: 270px;
  border: 1px solid black;
  border-radius: 10px;
  opacity: 0.97;
  transition: transform 0.2s;
  cursor: pointer;

  box-shadow: 2px 2px 5px gray;

  &:hover {
    box-shadow: 3px 3px 5px gray;
    transform: scale(1.02);
    opacity: 1;
  }
`;
const list = styled.ul`
  list-style-type: none;
  /* border: 1px black solid; */
  margin-right: 35px;
`;
const li = styled.li`
  font-size: 13px;
  font-weight: bold;
  align-self: left;
`;

const username = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  max-width: 150px;
`;
const bottomContainer = styled.div`
  margin-left: 10px;
`;

export {
  statusIconInProg,
  statusIconDone,
  statusIconTodo,
  statusWrapper,
  userImg,
  topLine,
  projectTitle,
  cardContainer,
  username,
  midLine,
  list,
  li,
  bottomContainer,
};
