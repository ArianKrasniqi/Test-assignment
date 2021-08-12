import React from "react";

import SVGfintech from "assets/Icons/ico_fintech.svg";
import SVGinsurtech from "assets/Icons/ico_insurtech.svg";
import SVGiot from "assets/Icons/ico_iot.svg";
import SVGroboadvisory from "assets/Icons/ico_roboadvisory.svg";

export const sectorsData = [
  {
    type: "Fintech",
    icon: <SVGfintech />,
    value: 0,
  },
  {
    type: "Insuretech",
    icon: <SVGinsurtech />,
    value: 0,
  },
  {
    type: "Roboadvisory",
    icon: <SVGroboadvisory />,
    value: 0,
  },
  {
    type: "IOT",
    icon: <SVGiot />,
    value: 0,
  },
];

export const stages = ["Idea", "Prototype", "Series A"];

export const tableHead = ["Company Name", "Stage", "Sector", "Investment Size"];
