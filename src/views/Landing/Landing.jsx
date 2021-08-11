import React, { useState } from "react";
import Table from "components/Table/Table.component";
import GridTable from "components/GridTable/GridTable.component";
import styled from "styled-components";
import Doughnut from "components/Doughnut/Doughnut.component.jsx";
import Sectors from "components/Sectors/Sectors.component";

import { GET_COMPANIES } from "../../Page.queries";
import { useQuery } from "@apollo/client";

import SVGfintech from "../../assets/Icons/ico_fintech.svg";
import SVGinsurtech from "../../assets/Icons/ico_insurtech.svg";
import SVGiot from "../../assets/Icons/ico_iot.svg";
import SVGroboadvisory from "../../assets/Icons/ico_roboadvisory.svg";

const sectors = [
  {
    type: "Fintech",
    icon: <SVGfintech />,
    value: 2,
  },
  {
    type: "Insurtech",
    icon: <SVGinsurtech />,
    value: 3,
  },
  {
    type: "Roboadvisory",
    icon: <SVGroboadvisory />,
    value: 1,
  },
  {
    type: "IOT",
    icon: <SVGiot />,
    value: 5,
  },
];

const tableHead = ["Company Name", "Stage", "Sector", "Investment Size"]

const LandingPage = () => {
  const { loading, error, data: companyData } = useQuery(GET_COMPANIES);

  const dataReorder = companyData?.companies?.map((company) => {
    const pickData = (({ name, stage, sector, investmentSize }) => ({ name, investmentSize, sector, stage }))(company);
    pickData.commodity = pickData.name;
    pickData.total = pickData.investmentSize;
    return pickData;
  })

  const InnerTable = styled.div`
    padding: 40px;
  `;

  return (
    <div>
      <Table title="Companies by Sectors">
        <Sectors sectors={sectors} />
      </Table>
      <Table title="Companies by Investment Size">
        <InnerTable>
          <Doughnut data={dataReorder} titleInside={"COMPANIES"} />
        </InnerTable>
      </Table>
      <GridTable tableHead={tableHead} data={dataReorder}/>
    </div>
  );
};

export default LandingPage;
