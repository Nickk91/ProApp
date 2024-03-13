import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";

const form = styled.form`
  margin-top: 83px;
  border: yellow 2px solid;
  width: 360px;
`;

const formTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

const inputsContainer = styled.div`
  border: green solid 2px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const IconWrapper = styled.div`
  position: relative;

  left: -160px; /* Adjust this value to move the icon horizontally */
  top: 55px; /* Adjust this value to move the icon vertically */
`;

// const ReturnIcon = styled.div`
//   position: relative;
//   background: url("../../assets/images/Union.png");
//   left: -160px; /* Adjust this value to move the icon horizontally */
//   top: 55px; /* Adjust this value to move the icon vertically */
//   width: 20px;
//   height 20px;
// `;

const p = styled.p`
  margin-top: 30px;
  // text-align: center;
  font-size: 11px;
  max-width: 330px;
`;

const ReturnIcon = () => {
  return (
    <IconWrapper>
      <IoReturnUpBack />
    </IconWrapper>
  );
};

const submitButton = styled.button`
  margin-top: 0px;
  border-radius: 7px;
  background: black;
  color: white;
  height: 54px;
  width: 100%;
  font-size: 11px;
  font-weight: 700;
`;

const input = styled.input`
  border: 2px solid black;
  background-color: white;
  height: 50px;
  margin-bottom: 7px;
`;

const label = styled.label`
  margin-bottom: 7px;
`;

export {
  form,
  formTitle,
  inputsContainer,
  ReturnIcon,
  submitButton,
  input,
  label,
  p,
};
