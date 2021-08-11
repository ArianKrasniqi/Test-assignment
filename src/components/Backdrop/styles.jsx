import styled from "styled-components";

export const BackdropContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
