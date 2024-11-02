import styled from "styled-components";
// import { ul } from "../FooterMenu/Styled";

export const statusIconInProg = styled.div`
  height: 14px;
  width: 14px;
  background-color: #ff9900;
  border-radius: 50%;
`;
export const statusIconDone = styled.div`
  height: 14px;
  width: 14px;
  background-color: #03d60c;
  border-radius: 50%;
`;
export const topLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const midLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const statusIconTodo = styled.div`
  height: 14px;
  width: 14px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;

export const statusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

export const userImg = styled.img`
  width: 50px;
  height: 54px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 10px;
`;

export const ImagePlaceholder = styled.div`
  width: 54px;
  height: 54px;

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

export const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

export const cardContainer = styled.div`
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
export const list = styled.ul`
  list-style-type: none;
  margin-right: 35px;
`;
export const li = styled.li`
  font-size: 13px;
  font-weight: bold;
  align-self: left;
`;

export const username = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  max-width: 150px;
`;
export const bottomContainer = styled.div`
  margin-left: 10px;
`;
