import React from "react";

import { SectorsContainer, Sector } from "./styles";

const Sectors = ({ sectors }) => {
  return (
    <SectorsContainer>
      {sectors.map((sector) => (
        <Sector>
          <h4>{sector.value}</h4>
          <h5>{sector.type}</h5>
          <div style={{ width: "30px" }}>{sector.icon}</div>
        </Sector>
      ))}
    </SectorsContainer>
  );
};

export default Sectors;
