import React from "react";
import PropTypes from 'prop-types'

import { BackdropContainer } from "./styles";

const Backdrop = ({ show, children, style, clicked }) => {
  return show ? (
    <BackdropContainer style={style} onClick={clicked}>
      {children}
    </BackdropContainer>
  ) : null;
};

Backdrop.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func,
  style: PropTypes.any,
}

export default Backdrop;
