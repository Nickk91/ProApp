import React from "react";
import * as S from "./GenericModalStyles.js";
import { IoMdCloseCircle } from "react-icons/io";

export default function ImageModal({ children, isOpen, onRequestClose }) {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <S.ModalBody onClick={(e) => e.stopPropagation()}>
                <IoMdCloseCircle onClick={() => onRequestClose()} />

                <S.modalText>{children}</S.modalText>
                <S.btnsContainer></S.btnsContainer>
              </S.ModalBody>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
}
