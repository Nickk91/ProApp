import styled from "styled-components";

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
`;

const projectImg = styled.img`
  width: 330px;
  height: 270px;
  border: 1px solid black;
  margin: 10px;
`;

const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

const cardContainer = styled.div`
  margin-top: 50px;
`;

export {
  statusIconInProg,
  statusIconDone,
  statusIconTodo,
  statusWrapper,
  projectImg,
  topLine,
  projectTitle,
  cardContainer,
};
