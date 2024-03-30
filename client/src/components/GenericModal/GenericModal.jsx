import React from "react";
import * as S from "./GenericModalStyles.js";
import trash from "../../assets/images/trash_icon.svg";
export default function GenericModal({
  children,
  isOpen,
  onRequestClose,
  toDelete,
  closeModal,
}) {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <S.ModalBody onClick={(e) => e.stopPropagation()}>
                <S.delBigger src={trash} />
                <S.modalText>
                  Are you sure you want to delete this {toDelete}?
                </S.modalText>
                <S.btnsContainer>
                  <S.yesBtn>YES</S.yesBtn>
                  <S.noBtn onClick={onRequestClose}>NO</S.noBtn>
                </S.btnsContainer>{" "}
                {/* <S.XButton onClick={onRequestClose}>X</S.XButton> */}
              </S.ModalBody>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
}
