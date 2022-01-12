import { auroraColors, fuseColors, duneColors, darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    blue: lightColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: lightColors.gradients.violet,
  },
  dropShadow: lightColors.dropShadow,
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    blue: darkColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: darkColors.gradients.violet,
  },
  dropShadow: darkColors.dropShadow,
};

export const dune: CardTheme = {
  background: duneColors.card,
  boxShadow: duneColors.shadows?.level1 || shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: duneColors.gradients.cardHeader,
    blue: duneColors.gradients.blue,
    bubblegum: duneColors.gradients.bubblegum,
    violet: duneColors.gradients.violet,
  },
  dropShadow: duneColors.dropShadow,
};

export const fuse: CardTheme = {
  background: fuseColors.card,
  boxShadow: fuseColors.shadows?.level1 || shadows.level1,
  boxShadowActive: fuseColors.shadows?.active || shadows.active,
  boxShadowSuccess: fuseColors.shadows?.success || shadows.success,
  boxShadowWarning: fuseColors.shadows?.warning || shadows.warning,
  cardHeaderBackground: {
    default: fuseColors.gradients.cardHeader,
    blue: fuseColors.gradients.blue,
    bubblegum: fuseColors.gradients.bubblegum,
    violet: fuseColors.gradients.violet,
  },
  dropShadow: fuseColors.dropShadow,
};

export const aurora: CardTheme = {
  background: auroraColors.card,
  boxShadow: auroraColors.shadows?.level1 || shadows.level1,
  boxShadowActive: auroraColors.shadows?.active || shadows.active,
  boxShadowSuccess: auroraColors.shadows?.success || shadows.success,
  boxShadowWarning: auroraColors.shadows?.warning || shadows.warning,
  cardHeaderBackground: {
    default: auroraColors.gradients.cardHeader,
    blue: auroraColors.gradients.blue,
    bubblegum: auroraColors.gradients.bubblegum,
    violet: auroraColors.gradients.violet,
  },
  dropShadow: auroraColors.dropShadow,
};
