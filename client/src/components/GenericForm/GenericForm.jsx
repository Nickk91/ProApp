// /* eslint-disable react/prop-types */
// import React from "react";
// // import "./GenericForm.css";
// import SSubmitButton from "../StyledComponents/SSubmitButton.jsx";
// import Input from "../StyledComponents/Input.jsx";
// // import TextInputsContainer from "../StyledComponents/TextInputsContainer.jsx";
// import InputsContainer from "../StyledComponents/SinputsContainer.jsx";
// import MyForm from "../StyledComponents/MyForm.jsx";

// const GenericForm = ({ buttonTitle, handleSubmit, formTitle, inputs }) => {
//   return (
//     <MyForm onSubmit={handleSubmit}>
//       <InputsContainer>
//         <h2>{formTitle}</h2>
//         <TextInputsContainer>
//           {inputs.map((inpt, index) => {
//             return (
//               <Input
//                 key={index}
//                 id={inpt.type}
//                 type={inpt.type}
//                 name={inpt.name ? inpt.name : ""}
//                 placeholder={inpt.name ? inpt.name : ""}
//               />
//             );
//           })}
//           <SSubmitButton className="submit" type="submit">
//             {buttonTitle}
//           </SSubmitButton>
//         </TextInputsContainer>
//       </InputsContainer>
//     </MyForm>
//   );
// };

// export default GenericForm;
