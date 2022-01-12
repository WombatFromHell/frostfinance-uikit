import { auroraColors, fuseColors, duneColors, darkColors, lightColors } from "../../theme/colors";
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

export const fuse: NavTheme = {
  background: fuseColors.nav,
  backgroundSidebar: fuseColors.card,
  backgroundFooter: fuseColors.background,
  hover: fuseColors.navHover,
};

export const aurora: NavTheme = {
  background: auroraColors.nav,
  backgroundSidebar: auroraColors.card,
  backgroundFooter: auroraColors.background,
  hover: auroraColors.navHover,
};
