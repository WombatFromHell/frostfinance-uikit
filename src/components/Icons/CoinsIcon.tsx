import React from "react";
import { FaCoins } from "react-icons/fa";
import { Svg, SvgProps } from "../Svg";

const CoinsIcon = (props: SvgProps) => {
  return (
    <Svg {...props}>
      <FaCoins />
    </Svg>
  );
};

export default CoinsIcon;
