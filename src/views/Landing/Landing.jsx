import React, { useEffect, useState } from "react";
import Table from "components/Table/Table.component";
import GridTable from "components/GridTable/GridTable.component";
import styled from "styled-components";
import Doughnut from "components/Doughnut/Doughnut.component";
import Sectors from "components/Sectors/Sectors.component";

import { GET_COMPANIES } from "../../Page.queries";
import { useQuery } from "@apollo/client";
import { sectorsData, tableHead } from "../../data/data";

const LandingPage = () => {
  const { loading, error, data: companyData } = useQuery(GET_COMPANIES);

  const [sectors, setSectors] = useState(sectorsData);
  const [companiesData, setCompaniesData] = useState(null);

  useEffect(() => {
    const companiesData = reorderDataFunc();
    setCompaniesData(companiesData);
  }, [companyData]);

  const reorderDataFunc = () => {
    return companyData?.companies?.map((company) => {
      let newSectors = [...sectors];
      let sectorIndex = newSectors.findIndex(
        (sector) => sector.type == company.sector
      );
      if (newSectors[sectorIndex]) {
        newSectors[sectorIndex].value += 1;
      }
      // can be use something like cloneDeep from lodash for correct implementation here
      setSectors(newSectors);

      const pickData = (({ name, stage, sector, investmentSize }) => ({
        name,
        investmentSize,
        sector,
        stage,
      }))(company);
      pickData.commodity = pickData.name;
      pickData.total = pickData.investmentSize;
      return pickData;
    });
  };

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
          <Doughnut data={companiesData} titleInside={"COMPANIES"} />
        </InnerTable>
      </Table>
      <GridTable tableHead={tableHead} data={companiesData} />
    </div>
  );
};

export default LandingPage;
