import styled from "styled-components";

export const selectDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid black;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const select = styled.select`
  width: 130px;
  border-width: 0;
  font-weight: 600;
  margin-left: 6px;
  font-size: 14px;
  border-radius: 5px;
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
  cursor: pointer;
`;
