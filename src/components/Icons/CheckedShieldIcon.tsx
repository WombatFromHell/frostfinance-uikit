import React from "react";
import { GiCheckedShield } from "react-icons/gi";
import { Svg, SvgProps } from "../Svg";

const CheckedShieldIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 -4 18 19" {...props}>
      <GiCheckedShield />
    </Svg>
  );
};

export default CheckedShieldIcon;
