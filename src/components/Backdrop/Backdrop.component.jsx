import React from "react";

import { BackdropContainer } from "./styles";

const Backdrop = ({ show, children, style, clicked }) => {
  return show ? (
    <BackdropContainer style={style} onClick={clicked}>
      {children}
    </BackdropContainer>
  ) : null;
};

export default Backdrop;
