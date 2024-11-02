import { CiEdit } from "react-icons/ci";
import styled from "styled-components";

const AnimatedCiEdit = styled(CiEdit)`
  /* height: 20px; */
  font-size: 20px;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

export default AnimatedCiEdit;
