import styled from "styled-components";

const menu = styled.div`
  position: fixed;
  bottom: 0;
  height: 100px;
  border: 1px solid black;
  z-index: 999;
  display: flex;
  width: 100%;
  background-color: rgb(240, 240, 240);
  min-width: 300px;
  justify-content: center;
  align-items: center;
`;

const ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  max-width: 500px;
`;
const li = styled.ul`
  align-self: center;
  text-align: center;
  margin-top: 3px;
`;

const plus = styled.div`
  height: 30px;
  width: 50px;
  background-image: linear-gradient(to bottom left, #ff00d6, #ff4d00);
  color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { menu, ul, plus, li };
