import { DefaultTheme } from "styled-components";
import { dune as darkAlert } from "../components/Alert/theme";
import { dune as darkCard } from "../components/Card/theme";
import { dune as darkRadio } from "../components/Radio/theme";
import { dune as darkToggle } from "../components/Toggle/theme";
import { dune as darkNav } from "../widgets/Menu/theme";
import { dune as darkModal } from "../widgets/Modal/theme";
import { dune as darkTooltip } from "../components/Tooltip/theme";
import base from "./base";
import { duneColors } from "./colors";

const duneTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  colors: duneColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export default duneTheme;
