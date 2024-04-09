import React, { useState } from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";
import GenericTaskInput from "../GenericTaskInput/GenericTaskInput.jsx";
import todo from "../../assets/images/status_todo.svg";
import inProgress from "../../assets/images/status_inprogress.svg";
import done from "../../assets/images/status_done.svg";
import trash from "../../assets/images/trash_icon.svg";
import GenericModal from "../GenericModal/GenericModal.jsx";

const GenericTaskForm = ({
  title,
  toDelete,
  submitButtonText,
  inputs,
  onSubmit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    onSubmit(e, formProps);
  };

  return (
    <>
      <S.form
        onSubmit={handleSubmit}
        className="generic-from-wrapper"
        action=""
      >
        <S.topContainer>
          <S.formTitle>{title}</S.formTitle>
          <S.del onClick={openModal} src={trash} alt="#######" />
        </S.topContainer>
        <S.inputsContainer>
          <GenericInput
            key={inputs[0].name}
            type={inputs[0].type}
            name={inputs[0].name}
            attributes={inputs[0].attributes}
            placeholder={inputs[0].placeholder ? inputs[0].placeholder : ""}
          />
          <GenericTaskInput
            key={inputs[1].name}
            type={inputs[1].type}
            name={inputs[1].name}
            attributes={inputs[1].attributes}
            placeholder={inputs[1].placeholder ? inputs[1].placeholder : ""}
          />
          <S.statusesContainer>
            <S.statusButtonCasule>
              <S.statusButton src={todo} alt="status todo button" />
            </S.statusButtonCasule>
            <S.statusButtonCasule>
              <S.statusButton
                src={inProgress}
                alt="status in progress button"
              />
            </S.statusButtonCasule>
            <S.statusButtonCasule>
              <S.statusButton src={done} alt="status done button" />
            </S.statusButtonCasule>
          </S.statusesContainer>

          <S.submitButton>{submitButtonText}</S.submitButton>
        </S.inputsContainer>
      </S.form>
      <GenericModal
        toDelete={toDelete}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <p>something</p>
      </GenericModal>
    </>
  );
};

export default GenericTaskForm;
