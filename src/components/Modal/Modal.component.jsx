import React from "react";
import PropTypes from 'prop-types'

import { ModalContainer } from "./styles";

const Modal = ({ children, style, show, clicked }) =>
  show ? (
    <ModalContainer onClick={clicked} style={style}>
      {children}
    </ModalContainer>
  ) : null;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func,
  style: PropTypes.any,
}

export default Modal;
