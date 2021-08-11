import React from "react";

import { ModalContainer, Close } from "./styles";

const Modal = ({ children, style, show, close, clicked }) =>
  show ? (
    <ModalContainer onClick={clicked} style={style}>
      {children}
    </ModalContainer>
  ) : null;

export default Modal;
