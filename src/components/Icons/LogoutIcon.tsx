import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Svg, SvgProps } from "../Svg";

const LogoutIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="-2 -1 14 14" {...props}>
      <FiLogOut />
    </Svg>
  );
};

export default LogoutIcon;
