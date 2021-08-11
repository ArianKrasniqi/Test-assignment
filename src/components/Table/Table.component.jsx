import React from "react";
import { TableContainer, TableHeader, TableBody } from "./styles";

const Table = ({ children, title }) => {
  return (
    <TableContainer>
      <TableHeader>
        <h4>{title}</h4>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </TableContainer>
  );
};

export default Table;
