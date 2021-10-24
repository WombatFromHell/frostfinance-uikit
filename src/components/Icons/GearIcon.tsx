import React from "react";
import { BsGear } from "react-icons/bs";
import { Svg, SvgProps } from "../Svg";

const GearIcon = (props: SvgProps) => {
  return (
    <Svg {...props}>
      <BsGear />
    </Svg>
  );
};

export default GearIcon;
