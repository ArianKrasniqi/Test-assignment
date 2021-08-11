import React from "react";
import Table from "components/Table/Table.component";
import styled from "styled-components";
import Doughnut from "components/Doughnut/Doughnut.component.jsx";
import Sectors from "components/Sectors/Sectors.component";

import {GET_COMPANIES} from '../../Page.queries'
import {useQuery} from '@apollo/client'

import SVGfintech from '../../assets/Icons/ico_fintech.svg';
import SVGinsurtech from '../../assets/Icons/ico_insurtech.svg';
import SVGiot from '../../assets/Icons/ico_iot.svg';
import SVGroboadvisory from '../../assets/Icons/ico_roboadvisory.svg';

import data from "./data.js";

const sectors = [
  {
    type: "Fintech",
    icon: <SVGfintech />,
    value: 2
  },
  {
    type: "Insurtech",
    icon: <SVGinsurtech />,
    value: 3
  },
  {
    type: "Roboadvisory",
    icon: <SVGroboadvisory />,
    value: 1
  },
  {
    type: "IOT",
    icon: <SVGiot />,
    value: 5
  },
];

const LandingPage = () => {
  const {loading, error, data: companyData} = useQuery(GET_COMPANIES)

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
          <Doughnut data={data} titleInside={"COMPANIES"} />
        </InnerTable>
      </Table>
    </div>
  );
};

export default LandingPage;
