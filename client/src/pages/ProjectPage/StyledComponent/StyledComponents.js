import styled, { keyframes } from "styled-components";

export const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

export const projectImg = styled.img`
  width: 330px;
  height: 270px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
  cursor: pointer;
`;

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

export const statusIconTodo = styled.div`
  height: 14px;
  width: 14px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;
export const topDiv = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 350px) {
    width: 95%;
  }
`;

export const tiltAndScale = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.3) rotate(-10deg); }
  50% { transform: scale(1.3) rotate(10deg); }
  75% { transform: scale(1.3) rotate(-10deg); }
  100% { transform: scale(1.3) rotate(0deg); }
`;

export const trashIcon = styled.img`
  height: 24.84px;
  width: 19.05px;
  cursor: pointer;
  display: block;

  &:hover {
    animation: ${tiltAndScale} 0.5s ease-in-out forwards;
    transform-origin: center;
  }
`;

export const smallTrashIcon = styled.img`
  height: 12.42px;
  width: 9.525px;
  margin-top: 2px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

export const page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 550px;
`;

export const tasksHeader = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 31px;

  @media screen and (max-width: 350px) {
    width: 95%;
  }
`;

export const addTaskIcon = styled.img`
  height: 24px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;
export const tasksContainer = styled.div`
  width: 350px;
  margin-bottom: 100px;
`;

export const container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const selectDiv = styled.div`
  width: 150px;
  display: flex;
  color: white;
  margin-right: 180px;
`;

export const taskStatus = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1px;
  font-size: 13px;
  font-weight: bold;
  justify-content: space-between;
  padding-top: 5px;
`;

export const taskStatusExpanded = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  font-weight: bold;
  justify-content: space-between;
  padding-top: 5px;
  height: 100px;
  align-items: flex-end;
  position: relative;
`;

export const statusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const taskList = styled.ul`
  list-style-type: none;

  @media screen and (max-width: 350px) {
    width: 95%;
    margin: 0 auto;
  }
`;
export const listItem = styled.li`
  border: 0.5px dotted rgba(0, 0, 0, 0.3);
  padding-top: 15px;
  width: 99%;
`;

export const noTasks = styled.div`
  text-align: center;
  font-style: italic;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 5px;
`;

export const taskName = styled.h3``;

export const arrowIconUp = styled.img`
  height: 15px;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const arrowIconDown = styled.img`
  height: 15px;
  cursor: pointer;
`;

export const taskDescription = styled.div`
  position: absolute;
  margin-bottom: 70px;
  max-width: 300px;
  text-align: left;
  color: #404040;
  font-size: 15px;
`;
export const userNameButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  max-width: 190px;
  height: 30px;
  color: black;
  background: #d5ddf8;
  border-radius: 10px;
  box-shadow: 1px 1px 4px gray;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 250px;
  height: 250px;

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
export const urlInput = styled.input`
  margin-top: 10px;
  height: 25px;
  width: 190px;
`;

export const acceptBtn = styled.button`
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

export const errorMessage = styled.div`
  height: 50px;
  width: 100px;
  border: 2px solid red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
export const errorMessageHidden = styled.div`
  display: hidden;
  height: 50px;
  width: 65%;
  color: red;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const iconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
