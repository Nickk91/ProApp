import styled from "styled-components";

const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

const projectImg = styled.img`
  width: 330px;
  height: 270px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
`;

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

const statusIconTodo = styled.div`
  height: 14px;
  width: 14px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;
const topDiv = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const trashIcon = styled.img`
  height: 24.84px;
  width: 19.05px;
`;
const smallTrashIcon = styled.img`
  height: 12.42px;
  width: 9.525px;
  margin-top: 2px;
`;

const page = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid black 2px; */
  align-items: center;
  min-height: 550px;
`;

const tasksHeader = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  /* border: 2px solid red; */
  margin-bottom: 31px;
`;

const addTaskIcon = styled.img`
  height: 24px;
`;
const tasksContainer = styled.div`
  /* border: 2px solid rebeccapurple; */

  width: 350px;
  margin-bottom: 100px;
`;

const container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
  align-items: center;
`;

const selectDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  justify-content: flex-start;
  align-items: center;
`;

const taskStatus = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1px;
  font-size: 13px;
  font-weight: bold;
  justify-content: space-between;
  padding-top: 5px;
`;

const taskStatusExpanded = styled.div`
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

const statusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const taskList = styled.ul`
  list-style-type: none;
`;
const listItem = styled.li`
  margin-top: 1px;
  border: 0.5px dotted rgba(0, 0, 0, 0.3);
  padding-top: 15px;
  width: 99%;
`;

const taskName = styled.h3``;

const arrowIconUp = styled.img`
  height: 15px;
  transform: rotate(180deg);
`;

const arrowIconDown = styled.img`
  height: 15px;
`;

const taskDescription = styled.div`
  position: absolute;
  /* border: solid 1px red; */
  top: 10px;
  color: #404040;
  font-size: 15px;
`;
const userNameButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  color: black;
  background: #d5ddf8;
  border-radius: 10px;
  box-shadow: 1px 1px 4px gray;
`;

export {
  projectTitle,
  projectImg,
  statusIconInProg,
  statusIconDone,
  statusIconTodo,
  topDiv,
  trashIcon,
  page,
  tasksHeader,
  addTaskIcon,
  tasksContainer,
  container,
  selectDiv,
  taskStatus,
  taskName,
  arrowIconUp,
  arrowIconDown,
  statusWrapper,
  taskList,
  listItem,
  taskStatusExpanded,
  taskDescription,
  userNameButton,
  smallTrashIcon,
};
