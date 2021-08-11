import React from "react";
import { GridTableContainer, GridTableHeader, GridTableBody } from "./styles";

const GridTable = ({ data, tableHead }) => {
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
    </GridTableContainer>
  );
};

export default GridTable;
