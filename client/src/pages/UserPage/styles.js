import styled from "styled-components";

export const page = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  align-items: center;
  min-height: 550px;
  min-width: 300px;
`;

export const userTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
  margin-top: 20px;
`;

export const username = styled.div`
  max-width: 150px;
`;

export const UserImgWrapper = styled.div`
  position: relative;
  display: inline-block; /* Ensure the tooltip is positioned relative to the image */

  /* Tooltip styles */
  &::after {
    content: attr(
      data-tooltip
    ); /* Use the custom attribute for the tooltip text */
    visibility: hidden;
    opacity: 0;
    background-color: gray;
    color: white;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    bottom: 120%; /* Position above the image */
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; /* Prevents text wrapping */
    transition: opacity 0.3s ease-in-out;
    z-index: 10;
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

export const UserImg = styled.img`
  width: 135px;
  height: 122px;
  border: 1px solid black;
  margin-top: -10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px gray;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 5px gray;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 122px;
  height: 122px;

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid gray;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const list = styled.ul`
  list-style-type: none;
  margin-top: 5px;
`;
export const h3 = styled.h3`
  margin-top: 15px;
  padding-top: 5px;
  margin-bottom: 25px;
  @media screen and (min-width: 620px) {
    margin-top: -3px;
    margin-bottom: 20px;
  }
`;

export const h32 = styled.h3`
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 40px;
  @media screen and (min-width: 620px) {
    margin-top: -3px;
    margin-bottom: 20px;
  }
`;
export const miniWrap = styled.div`
  max-height: 230px;
  width: 300px;

  @media screen and (max-width: 345px) {
    /* padding-left: 10px; */
  }
`;

export const listItem = styled.li`
  margin-top: 5px;
  padding-right: 10px;
`;

export const container = styled.div`
  /* margin-left: 40px; */
  /* border: 1px solid black; */
`;
export const urlInput = styled.input`
  margin-top: 10px;
  height: 25px;
  width: 190px;
`;

export const acceptBtn = styled.button`
  border: 3px solid black;
  margin-top: 20px;
  height: 34px;
  width: 70px;
  color: black;
  background-color: white;
  border-radius: 9px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;
export const chartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: -40px;
  margin-bottom: 70px;
  @media screen and (min-width: 620px) {
    display: flex;
    flex-direction: row;

    margin-top: 20px;
    margin-left: 0px;
    gap: 35px;
  }
`;

export const userDetailsContainer = styled.div`
  max-width: 794px;
  display: flex;
  padding-left: 15px;
  flex-direction: column;

  @media screen and (min-width: 620px) {
    flex-direction: row;
    margin-top: 20px;
  }
`;

export const space = styled.div`
  height: 50px;
  width: 200px;
`;

export const errorMessage = styled.div`
  height: 50px;
  width: 100px;
  color: red;
  border: 2px dotted red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
export const errorMessageHidden = styled.div`
  display: hidden;
  height: 50px;
  width: 65%;
  color: red;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
export const addProjectIcon = styled.img`
  height: 24px;
  transition: transform 0.2s;
  cursor: pointer;
  z-index: 990;

  &:hover {
    transform: scale(1.3);
  }
`;
export const addProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: justify-content;
  max-width: 200px;
  gap: 10px;
  margin-top: 4px;
  margin: 0 auto;
  transition: transform 0.2s;
`;
export const minDiv = styled.div``;
export const actionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90px;
`;

export const userPorjectsBtn = styled.button`
  border: 3px solid black;
  z-index: 300;
  height: 50px;
  width: 170px;
  color: black;
  background-color: white;
  border-radius: 9px;
  font-weight: bold;
  font-size: 17px;
  margin: 0 auto;
  transition: color 0.2s, background-color 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
    transform: scale(1.05);
  }
`;
