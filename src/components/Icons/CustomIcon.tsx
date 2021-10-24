import React from "react";
import { Svg, SvgProps } from "../Svg";

const CustomIcon = (props: SvgProps) => {
  const { children, ...rest } = props;
  return <Svg {...rest}>{children}</Svg>;
};

export default CustomIcon;
