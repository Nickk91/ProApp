import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";

const form = styled.form`
  margin-top: 83px;
  border: yellow 2px solid;
  width: 360px;
  overflow: visible;
  position: relative;
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
  overflow: visible;
`;

const ReturnIcon = styled.img`
  position: relative;
  left: -160px; /* Adjust this value to move the icon horizontally */
  top: 55px; /* Adjust this value to move the icon vertically */
  width: 20px;
  height: 20px;
`;

const p = styled.p`
  margin-top: 30px;
  // text-align: center;
  font-size: 11px;
  max-width: 330px;
`;

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

const inputBox = styled.input`
  border: 2px solid black;
  background-color: white;
  height: 150px;
  margin-bottom: 7px;
`;

const label = styled.label`
  margin-bottom: 7px;
`;

const statusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const statusButton = styled.img`
  // height: 50px;
`;
const statusButtonCasule = styled.div`
  background: #d5ddf8;
  height: 22px;
  padding-left: 3px;
  padding-right: 10px;
  padding-top: 4px;
  border-radius: 5px;
`;

const del = styled.img`
  margin-top: -30px;
`;
const topContainer = styled.div`
  border: orange 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const deleteModal = styled.div`
  position: absoulute;
  height: 250px;
  width: 250px;
  border: 1px solid gray;
  border-radius: 6px;
  background: #ffffff;
  z-index: 999;
`;
const delBigger = styled.img`
  height: 75px;
  width: 75px;
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
  inputBox,
  statusesContainer,
  statusButton,
  statusButtonCasule,
  del,
  topContainer,
  deleteModal,
  delBigger,
};
