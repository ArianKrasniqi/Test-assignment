import styled from "styled-components";

export const GridTableContainer = styled.table`
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #267384;
  width: calc(100% - 60px);

  th,
  td {
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
  color: #77868f;
`;

export const GridTableFooter = styled.tfoot`
  background: #fff;
  color: black;
`;

export const AddButton = styled.button`
  border: 2px solid #d4dfe480;
  background: transparent;
  color: #77868f;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
