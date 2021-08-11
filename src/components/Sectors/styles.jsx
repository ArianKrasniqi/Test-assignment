import styled from "styled-components";

export const SectorsContainer = styled.div`
  display: flex;
`;

export const Sector = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 14px 0px;

  h4 {
    font-size: 30px;
    color: black;
  }

  h5 {
    text-transform: uppercase;
  }

  & svg path {
    fill: #267384;
    stroke: #267384;
  }

  &:not(:last-child) {
    border-right: 2px solid #d4dfe480;
  }
`;
