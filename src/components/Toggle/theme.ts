import { auroraColors, fuseColors, duneColors, darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.card,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.card,
};

export const dune: ToggleTheme = {
  handleBackground: duneColors.card,
};

export const fuse: ToggleTheme = {
  handleBackground: fuseColors.card,
};

export const aurora: ToggleTheme = {
  handleBackground: auroraColors.card,
};
