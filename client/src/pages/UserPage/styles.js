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
  margin-top: 30px;
`;

const username = styled.div`
  max-width: 150px;
`;

const userImg = styled.img`
  width: 135px;
  height: 122px;
  border: 1px solid black;
  margin: 10px;
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
`;

const listItem = styled.li``;

const container = styled.div`
  /* border: 5px solid black; */
  margin-left: 40px;
`;

export { page, userTitle, username, userImg, list, listItem, h3, container };
