import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  GridTableContainer,
  GridTableHeader,
  GridTableBody,
  GridTableFooter,
  AddButton,
} from "./styles";

const GridTable = ({ data, tableHead, history }) => {
  const handleAddCompany = () => {
    history.push("/company/add");
  };

  return (
    <GridTableContainer>
      <GridTableHeader>
        <tr>
          {tableHead?.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </GridTableHeader>
      <GridTableBody>
        {data?.map((el, index) => (
          <tr key={index}>
            {/* 
              There can be another solution to render these programatically, 
              but first we should order properties of company in Landing page, 
              by using keys as nunber 1, 2, 3, 4 
            */}
            <td>{el?.name}</td>
            <td>{el?.stage}</td>
            <td>{el?.sector}</td>
            <td>{el?.investmentSize}</td>
          </tr>
        ))}
      </GridTableBody>
      <GridTableFooter>
        <tr>
          <td colSpan="4">
            <AddButton onClick={handleAddCompany}>Add new Company</AddButton>
          </td>
        </tr>
      </GridTableFooter>
    </GridTableContainer>
  );
};

GridTable.propTypes = {
  data: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  history: PropTypes.object,
}

export default withRouter(GridTable);
