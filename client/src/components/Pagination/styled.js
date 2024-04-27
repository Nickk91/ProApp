import styled from "styled-components";

const pageButton = styled.button`
  background-color: ${(props) => (props.isActive ? "red" : "blue")};
  min-width: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-inline: 5px;
`;

export { pageButton };
