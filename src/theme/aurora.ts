import { DefaultTheme } from "styled-components";
import { aurora as darkAlert } from "../components/Alert/theme";
import { aurora as darkCard } from "../components/Card/theme";
import { aurora as darkRadio } from "../components/Radio/theme";
import { aurora as darkToggle } from "../components/Toggle/theme";
import { aurora as darkNav } from "../widgets/Menu/theme";
import { aurora as darkModal } from "../widgets/Modal/theme";
import { aurora as darkTooltip } from "../components/Tooltip/theme";
import base from "./base";
import { auroraColors } from "./colors";

const auroraTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  colors: auroraColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export default auroraTheme;
