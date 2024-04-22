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
`;

export { page, userTitle };
