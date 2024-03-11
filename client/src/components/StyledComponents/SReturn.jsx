import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

const IconWrapper = styled.div`
  position: relative;

  left: 20px; /* Adjust this value to move the icon horizontally */
  top: 55px; /* Adjust this value to move the icon vertically */
`;

const SReturn = () => {
  return (
    <IconWrapper>
      <IoReturnUpBack />
    </IconWrapper>
  );
};

export default SReturn;
