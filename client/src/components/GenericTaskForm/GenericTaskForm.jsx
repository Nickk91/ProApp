import React from "react";
import GenericInput from "../GenericInput/GenericInput.jsx";
import * as S from "../StyledComponents/styles.jsx";
import GenericTaskInput from "../GenericTaskInput/GenericTaskInput.jsx";
import todo from "../../assets/images/status_todo.svg";
import inProgress from "../../assets/images/status_inprogress.svg";
import done from "../../assets/images/status_done.svg";
import trash from "../../assets/images/trash_icon.svg";
import GenericModal from "../GenericModal/GenericModal.jsx";
import { useState } from "react";
import StatusesContainer from "../StatusesContainer/StatusesContainer.jsx";

const GenericTaskForm = ({
  title,
  toDelete,
  submitButtonText,
  inputs,
  onSubmit,
  taskName,
  taskDesc,
  taskStatus,
  edit,
  formErrors,
  displayFormError,
  serverError,
}) => {
  !edit && (taskStatus = "todo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(taskStatus || "todo");

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
    formProps.taskStatus = selectedStatus;
    localStorage.setItem("taskStatus", formProps.taskStatus);
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
          {inputs.map((input) => {
            let Component =
              input.name === "name" ? GenericInput : GenericTaskInput;
            return (
              <Component
                key={input.name}
                type={input.type}
                name={input.name}
                attributes={input.attributes}
                placeholder={input.placeholder || ""}
                value={edit ? taskName : ""}
              />
            );
          })}

          <StatusesContainer
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

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
