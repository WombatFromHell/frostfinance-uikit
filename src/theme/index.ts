import { AlertTheme } from "../components/Alert/types";
import { CardTheme } from "../components/Card/types";
import { RadioTheme } from "../components/Radio/types";
import { ToggleTheme } from "../components/Toggle/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { NavTheme } from "../widgets/Menu/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as light } from "./light";
export { default as dark } from "./dark";
export { default as dune } from "./dune";
export { default as fuse } from "./fuse";
export { default as aurora } from "./aurora";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
export { duneColors } from "./colors";
export { fuseColors } from "./colors";
export { auroraColors } from "./colors";
