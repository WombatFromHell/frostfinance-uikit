import React from "react";
import { GiCheckedShield } from "react-icons/gi";
import { Svg, SvgProps } from "../Svg";

const CheckedShieldIcon = (props: SvgProps) => {
  return (
    <Svg {...props}>
      <GiCheckedShield />
    </Svg>
  );
};

export default CheckedShieldIcon;
