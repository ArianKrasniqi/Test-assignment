import React from "react";
import Table from "components/Table/Table.component";
import styled from "styled-components";
import Doughnut from "components/Doughnut/Doughnut.component.jsx";

import data from "./data.js";

const LandingPage = () => {
  const InnerTable = styled.div`
    padding: 40px;
  `;

  return (
    <Table title="Companies by Sectors">
      <InnerTable>
        <Doughnut data={data} titleInside={"COMPANIES"} />
      </InnerTable>
    </Table>
  );
};

export default LandingPage;
