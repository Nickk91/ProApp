import styled from "styled-components";

export const form = styled.form`
  margin-top: 83px;
  width: 360px;
  overflow: visible;
  position: relative;

  @media screen and (max-height: 650px) {
    margin-top: 50px;
  }
`;

export const searchForm = styled.form`
  width: 360px;
  overflow: visible;
  position: relative;

  @media screen and (max-height: 650px) {
    margin-top: 50px;
  }
`;

export const formTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
  @media screen and (max-width: 365px) {
    margin-left: 25px;
  }
`;

export const inputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: visible;

  @media screen and (max-width: 365px) {
    width: 340px;
    margin: 0 auto;
  }
`;

export const ReturnIcon = styled.img`
  position: relative;
  left: -160px;
  top: 55px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (max-height: 650px) {
    top: 40px;
  }
`;

export const p = styled.p`
  margin-top: 30px;
  font-size: 11px;
  max-width: 330px;
`;

export const submitButton = styled.button`
  margin-top: 0px;
  border-radius: 7px;
  background: black;
  color: white;
  height: 54px;
  width: 100%;
  font-size: 11px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s ease-in-out,
    transform 0.2s; /* Box-shadow transition */
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adds a subtle shadow */
    font-weight: 900;
    transform: scale(1.03);
  }

  @media screen and (max-width: 365px) {
    width: 95%;
    align-self: center;
  }
  @media screen and (min-width: 600px) {
    width: 95%;
    align-self: center;
  }
`;

export const input = styled.input`
  border: 2px solid black;
  background-color: white;
  height: 50px;
  margin-bottom: 7px;
  min-width: 200px;
  padding-left: 5px;

  @media screen and (max-width: 365px) {
    width: 95%;
    align-self: center;
  }
  @media screen and (min-width: 600px) {
    width: 95%;
    align-self: center;
  }
`;

export const inputBox = styled.textarea`
  border: 2px solid black;
  background-color: white;
  height: 150px;
  margin-bottom: 7px;
  padding: 5px;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  resize: none; /* Prevent resizing if unnecessary */

  @media screen and (max-width: 365px) {
    width: 95%;
    align-self: center;
  }

  @media screen and (min-width: 600px) {
    width: 95%;
    align-self: center;
  }
`;

export const label = styled.label`
  margin-bottom: 7px;
  min-width: 200px;

  @media screen and (max-width: 365px) {
    width: 95%;
    align-self: center;
  }

  @media screen and (min-width: 600px) {
    width: 95%;
    align-self: center;
  }
`;

export const statusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const statusButton = styled.img`
  // height: 50px;
  cursor: pointer;
`;
export const statusButtonCasule = styled.div`
  /* background: #d5ddf8; */
  height: 22px;
  padding-left: 3px;
  padding-right: 10px;
  padding-top: 4px;
  border-radius: 5px;
  cursor: pointer;
`;

export const selectedStatusButtonCasule = styled.div`
  background: #d5ddf8;
  height: 22px;
  padding-left: 3px;
  padding-right: 10px;
  padding-top: 4px;
  border-radius: 5px;
  cursor: pointer;
`;

export const del = styled.img`
  margin-top: -30px;
`;
export const topContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 365px) {
    width: 340px;

    margin: 0 auto;
  }
`;
export const deleteModal = styled.div`
  position: absoulute;
  height: 250px;
  width: 250px;
  border: 1px solid gray;
  border-radius: 6px;
  background: #ffffff;
  z-index: 999;
`;
export const delBigger = styled.img`
  height: 75px;
  width: 75px;
`;

export const errorText = styled.p`
  width: 100%;
  color: red;
  font-size: 15px;
  height: 27px;
  text-align: center;
  padding-bottom: 35px;
  box-sizing: border-box;
`;
export const page = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  align-items: center;
  min-height: 550px;
  min-width: 300px;
  max-width: 1400px;
`;

export const pageTitle = styled.div`
  /* padding-bottom: 22px; */
  font-size: 35px;
  margin-left: -150px;
  margin-top: 50px;

  @media screen and (max-width: 365px) {
    margin-left: 1px;
  }
`;

export const spaceDiv = styled.div`
  height: 100px;
`;

export const spacer = styled.div`
  height: 30px;
`;

export const ErrorBox = styled.div`
  opacity: 0.97;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  text-align: center;

  @media screen and (min-width: 300px) {
    font-size: 20px;
  }

  @media screen and (min-width: 600px) {
    font-size: 35px;
  }
`;
