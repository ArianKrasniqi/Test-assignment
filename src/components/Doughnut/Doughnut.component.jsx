import React from "react";
import PieChart, { Legend, Series } from "devextreme-react/pie-chart";

const CenterTemplate = ({ data, title }) => {
  return (
    <svg>
      <circle cx="100" cy="100" fill="#eee"></circle>
      <text
        textAnchor="middle"
        x="100"
        y="120"
        style={{ fontSize: 18, fill: "#494949" }}
      >
        <tspan x="100" style={{ fontWeight: 800, fontSize: "40px" }}>
          {data.length}
        </tspan>
        <tspan x="100" dy="20px">
          {title}
        </tspan>
      </text>
    </svg>
  );
};

const Doughnut = ({ data, titleInside }) => {
  return (
    <div className="pies-container" style={{ marginRight: "150px" }}>
      <PieChart
        id="pie-chart"
        dataSource={data}
        resolveLabelOverlapping="shift"
        sizeGroup="piesGroup"
        centerRender={() => <CenterTemplate data={data} title={titleInside} />}
        type="doughnut"
      >
        <Series argumentField="commodity" valueField="total"></Series>
        <Legend
          margin={100}
          horizontalAlignment="right"
          verticalAlignment="top"
          columnCount={2}
          columnItemSpacing={100}
          rowItemSpacing={25}
        />
      </PieChart>
    </div>
  );
};

export default Doughnut;
