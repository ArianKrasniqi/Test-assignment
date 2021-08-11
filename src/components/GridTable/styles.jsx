import styled from "styled-components";

export const GridTableContainer = styled.table`
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #267384;
  width: calc(100% - 60px);

  th, td {
    padding: 20px 10px;
  }
`;

export const GridTableHeader = styled.thead`
  background: #f6f9fc;
  height: 70px;
  text-transform: uppercase;
  text-align: left;
  font-size: 15px;

  th {
    font-weight: 500;
  }
`;

export const GridTableBody = styled.tbody`
  background: #fff;
  color: black;
`;
