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
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  farmBackground: "#a28bd4",
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
