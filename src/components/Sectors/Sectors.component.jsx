import React from "react";
import PropTypes from 'prop-types'
import { SectorsContainer, Sector } from "./styles";

const Sectors = ({ sectors }) => {
  return (
    <SectorsContainer>
      {sectors.map((sector, index) => (
        <Sector key={index}>
          <h4>{sector.value}</h4>
          <h5>{sector.type}</h5>
          <div style={{ width: "30px" }}>{sector.icon}</div>
        </Sector>
      ))}
    </SectorsContainer>
  );
};

Sectors.propTypes = {
  sectors: PropTypes.element
}

export default Sectors;
