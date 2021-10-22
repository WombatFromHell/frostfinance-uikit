import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#60D5DC",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#6DD784",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#ffffff",
//   secondary: "#52D784", //
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#191326",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputSecondary: "#d7caec",
//   tertiary: "#EFF4F5",
//   text: "#452A7A", //
//   farmBackground: "#F4F3F6", //
//   toggleBackground: "#E6FDFE", //
//   textDisabled: "#544786",
//   textSubtle: "#46357B",
//   borderColor: "#E9EAEB",
//   card: "#FFFFFF",
//   nav: "#333333", //
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };

// DELETE THIS ONE IF YOU WANT TO ACTIVATE THE TOGGLE THEME
export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#52D784", //
  background: "#1F2B46", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#0D0F22",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#452A7A", //
  farmBackground: "#F4F3F6", //
  toggleBackground: "#E6FDFE", //
  textDisabled: "#544786",
  textSubtle: "#46357B",
  borderColor: "#61634b",
  card: "#0D0F22", //
  nav: "#0D0F22", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#52D784", //
  background: "#1F2B46", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#0D0F22",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#fcfae2", //
  farmBackground: "#452A7A", //
  toggleBackground: "#0D0F22", //
  textDisabled: "#717161", //
  textSubtle: "#6DD784", //
  borderColor: "#61634b",
  card: "#0D0F22", //
  nav: "#0D0F22", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
  },
};

export const frostfiColors: Colors = {
  ...baseColors,
  ...brandColors,
  // darker text
  secondary: "#40c2e9",
  // dropdown/toggle back color
  tertiary: "#493F5A",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#c9c0f5",
  invertedContrast: "#191326",
  farmBackground: "#100C18",
  toggleBackground: "#100C18",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#A28BD4",
  text: "#EAE2FC",
  textDisabled: "#666171",
  // button text
  textSubtle: "#A28BD4",
  // badge border
  borderColor: "#859BBA",
  card: "#27262c",
  nav: "#100C18",
  // cardBorder: '',
  // dropdown: '',
  // dropdownDeep: '',
  // alwaysWhite: '',
  // button color
  // button: '#859BBA',
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    // cardHeader: '',
    // blue: '',
    // violet: '',
    // violetAlt: '',
  },
};
