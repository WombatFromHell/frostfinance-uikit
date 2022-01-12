import type { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  // button/text/highlight primary color
  primary: "#EBE1FC",
  primaryBright: "#fa8b03",
  // secondary button color
  primaryDark: "#353547",
  secondary: "#8B5B20",
  // radio checked
  success: "#a28bd4",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
  avalanche: "",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundMenubar: "",
  backgroundWallet: "",
  farmBackground: "#FAF9FA",
  toggleBackground: "",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#46557d",
  tertiary: "#EFF4F5",
  text: "#8B5B20",
  textDisabled: "#BDC2C4",
  textSubtle: "#6356B1",
  borderColor: "#E9EAEB",
  card: "#030323",
  cardBorder: "",
  dropdown: "",
  dropdownAlt: "",
  alwaysWhite: "",
  button: "",
  nav: "#FAF9FA",
  navHover: "#EEEAF4",
  // chrome track color
  thumb: "#a28bd4",
  // chrome track shadow
  thumbAlt: "#483f5a",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "",
    cardHeader: "",
    blue: "",
    violet: "",
    violetAlt: "",
    gold: "",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  // darker text
  secondary: "#40c2e9",
  // dropdown/toggle back color
  tertiary: "#483f5a",
  background: "#1A202C",
  backgroundDisabled: "#3c3742",
  backgroundMenubar: "rgba(16, 12, 24, 0.8)",
  backgroundWallet: "rgb(50, 50, 70)",
  farmBackground: "#1A202C",
  toggleBackground: "",
  contrast: "#c9c0f5",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#A28BD4",
  text: "#EAE2FC",
  textDisabled: "#666171",
  // button text
  textSubtle: "#A28BD4",
  // badge border
  borderColor: "#859BBA",
  card: "#27262C",
  cardBorder: "",
  dropdown: "",
  dropdownAlt: "",
  alwaysWhite: "",
  // button background color
  button: "#a28bd4",
  // menu background color
  nav: "#100C18",
  navHover: "#473d5d",
  // chrome track color
  thumb: "#a28bd4",
  // chrome track shadow
  thumbAlt: "#483f5a",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "",
    cardHeader: "",
    blue: "",
    violet: "",
    violetAlt: "",
    gold: "",
  },
};

export const duneColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#FFFFFA",
  primaryDark: "#A28BD4",
  success: "#a1654d",
  // darker text
  secondary: "#edc891",
  // dropdown/toggle back color
  tertiary: "#a1654d",
  background: "#1A202C",
  backgroundDisabled: "#3c3742",
  backgroundMenubar: "rgba(26, 32, 44, 0.8)",
  backgroundWallet: "#243047",
  farmBackground: "#EB8258",
  toggleBackground: "",
  contrast: "#ffdead",
  invertedContrast: "#191326",
  input: "#272e3b",
  inputSecondary: "#323c4d",
  text: "#FFFFFA",
  textDisabled: "#736551",
  // row header text
  textSubtle: "#edc891",
  // badge border
  borderColor: "#859BBA",
  card: "#2D3748",
  cardBorder: "",
  dropdown: "",
  dropdownAlt: "",
  alwaysWhite: "",
  // button background color
  button: "#EB8258",
  // menu background color
  nav: "#100C18",
  navHover: "#473d5d",
  // chrome track color
  thumb: "#354461",
  // chrome track shadow
  thumbAlt: "#1A202C",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "",
    cardHeader: "",
    blue: "",
    violet: "",
    violetAlt: "",
    gold: "",
  },
  shadows: {
    level1: "rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #C9A08F, 0px 0px 0px 4px rgba(201, 160, 143, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
  },
};

export const fuseColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#E9E9E9",
  primaryDark: "#A8ADAD",
  success: "#7CC76E",
  // darker text
  secondary: "#A8ADAD",
  // dropdown/toggle back color
  tertiary: "#5E9450",
  background: "#0E1214",
  backgroundDisabled: "rgba(31, 38, 41, 0.66)",
  backgroundMenubar: "rgba(31, 38, 41, 0.85)",
  backgroundWallet: "#232C2F",
  farmBackground: "#5E9450",
  toggleBackground: "",
  contrast: "#85BC87",
  invertedContrast: "#191326",
  input: "#202629",
  inputSecondary: "#262E31",
  text: "#E9E9E9",
  textDisabled: "rgba(168, 173, 173, 0.25)",
  // row header text
  textSubtle: "#879C88",
  // badge border
  borderColor: "#324140",
  card: "#192023",
  cardBorder: "",
  dropdown: "",
  dropdownAlt: "",
  alwaysWhite: "",
  // button background color
  button: "#5E9450",
  // menu background color
  nav: "#181D1F",
  navHover: "#473d5d",
  // chrome track color
  thumb: "#354461",
  // chrome track shadow
  thumbAlt: "#1A202C",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "",
    cardHeader: "",
    blue: "",
    violet: "",
    violetAlt: "",
    gold: "",
  },
  shadows: {
    level1: "",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px rgba(124, 199, 110, 1), 0px 0px 0px 4px rgba(124, 199, 110, 0.5)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
  },
};

export const auroraColors: Colors = {
  ...baseColors,
  ...brandColors,
  // darker text
  secondary: "#40c2e9",
  // dropdown/toggle back color
  tertiary: "#483f5a",
  background: "#1A202C",
  backgroundDisabled: "#3c3742",
  backgroundMenubar: "rgba(16, 12, 24, 0.8)",
  backgroundWallet: "rgb(50, 50, 70)",
  farmBackground: "#1A202C",
  toggleBackground: "",
  contrast: "#c9c0f5",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#A28BD4",
  text: "#EAE2FC",
  textDisabled: "#666171",
  // button text
  textSubtle: "#A28BD4",
  // badge border
  borderColor: "#859BBA",
  card: "#27262C",
  cardBorder: "",
  dropdown: "",
  dropdownAlt: "",
  alwaysWhite: "",
  // button background color
  button: "#a28bd4",
  // menu background color
  nav: "#100C18",
  navHover: "#473d5d",
  // chrome track color
  thumb: "#a28bd4",
  // chrome track shadow
  thumbAlt: "#483f5a",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "",
    cardHeader: "",
    blue: "",
    violet: "",
    violetAlt: "",
    gold: "",
  },
};
