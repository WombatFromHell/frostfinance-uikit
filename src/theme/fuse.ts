import { DefaultTheme } from "styled-components";
import { fuse as darkAlert } from "../components/Alert/theme";
import { fuse as darkCard } from "../components/Card/theme";
import { fuse as darkRadio } from "../components/Radio/theme";
import { fuse as darkToggle } from "../components/Toggle/theme";
import { fuse as darkNav } from "../widgets/Menu/theme";
import { fuse as darkModal } from "../widgets/Modal/theme";
import { fuse as darkTooltip } from "../components/Tooltip/theme";
import base from "./base";
import { fuseColors } from "./colors";

const fuseTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  colors: fuseColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export default fuseTheme;
