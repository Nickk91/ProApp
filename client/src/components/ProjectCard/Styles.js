import styled from "styled-components";

const statusIconInProg = styled.div`
  height: 14px;
  width: 14px;
  background-color: #ff9900;
  border-radius: 50%;
`;
const statusIconDone = styled.div`
  height: 14px;
  width: 14px;
  background-color: #03d60c;
  border-radius: 50%;
`;
const topLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const statusIconTodo = styled.div`
  height: 14px;
  width: 14px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;

const statusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const projectImg = styled.img`
  width: 300px;
  height: 270px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px gray;

  &:hover {
    box-shadow: 3px 3px 5px gray;
  }
`;

const projectTitle = styled.div`
  padding-bottom: 22px;
  font-size: 35px;
`;

const cardContainer = styled.div`
  margin-top: 50px;
  opacity: 0.97;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    opacity: 1;
  }
`;

const projectname = styled.div`
  max-width: 150px;
`;

// const ImagePlaceholder = styled.div`
//   width: 300px;
//   height: 270px;
//   border: 1px solid black;
//   margin: 10px;
//   border-radius: 10px;
//   box-shadow: 2px 2px 5px gray;
//   background-color: #e0e0e0; /* Light gray to indicate loading state */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   &:hover {
//     box-shadow: 3px 3px 5px gray;
//   }
// `;

const ImagePlaceholder = styled.div`
  width: 250px;
  height: 250px;

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

export {
  ImagePlaceholder,
  statusIconInProg,
  statusIconDone,
  statusIconTodo,
  statusWrapper,
  projectImg,
  topLine,
  projectTitle,
  cardContainer,
  projectname,
};
