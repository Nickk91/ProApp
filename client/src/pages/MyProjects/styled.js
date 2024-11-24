import styled from "styled-components";

export const filterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const userNameButton = styled.div`
  position: absolute;
  /* display: flex; */
  margin-top: 90px;
  margin-right: -90px;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-width: 50px;
  max-width: 190px;
  height: 30px;
  color: black;
  background: #d5ddf8;
  border-radius: 10px;
  box-shadow: 1px 1px 4px gray;
  margin-left: 100px;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const filterBtn = styled.button``;
