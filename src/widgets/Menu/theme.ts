import { duneColors, darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.nav,
  backgroundSidebar: lightColors.card,
  backgroundFooter: darkColors.background,
  hover: lightColors.navHover,
};

export const dark: NavTheme = {
  background: darkColors.nav,
  backgroundSidebar: darkColors.card,
  backgroundFooter: darkColors.background,
  hover: darkColors.navHover,
};

export const dune: NavTheme = {
  background: duneColors.nav,
  backgroundSidebar: duneColors.card,
  backgroundFooter: duneColors.background,
  hover: duneColors.navHover,
};
