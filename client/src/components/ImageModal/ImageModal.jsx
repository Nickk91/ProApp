import React from "react";
import * as S from "./GenericModalStyles.js";
export default function ImageModal({ children, isOpen, onRequestClose }) {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <S.ModalBody onClick={(e) => e.stopPropagation()}>
                <S.modalText>{children}</S.modalText>
                <S.btnsContainer>
                  <S.noBtn onClick={onRequestClose}>Cancel</S.noBtn>
                </S.btnsContainer>
              </S.ModalBody>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
}
