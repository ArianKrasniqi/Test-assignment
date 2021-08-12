import React from "react";
import PropTypes from 'prop-types'
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

Table.propTypes = {
  children: PropTypes.element,
  title: PropTypes.node,
}

export default Table;
