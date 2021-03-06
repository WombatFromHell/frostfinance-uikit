import { auroraColors, fuseColors, duneColors, darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.card,
  text: darkColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const dark: TooltipTheme = {
  background: lightColors.card,
  text: lightColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const dune: TooltipTheme = {
  background: duneColors.card,
  text: duneColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const fuse: TooltipTheme = {
  background: fuseColors.card,
  text: fuseColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const aurora: TooltipTheme = {
  background: auroraColors.card,
  text: auroraColors.text,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
