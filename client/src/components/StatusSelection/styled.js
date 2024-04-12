import styled from "styled-components";

const selectDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid black;
  justify-content: flex-start;
  align-items: center;
`;

const select = styled.select`
  width: 130px;
  border-width: 0;
  font-weight: 600;
  margin-left: 6px;
  font-size: 14px;
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

export { selectDiv, select, statusIconInProg, statusIconDone, statusIconTodo };
