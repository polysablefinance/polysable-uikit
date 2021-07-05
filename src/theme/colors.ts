import { Colors } from "./types";

export const baseColors = {
  failure: "#c71a25",
  primary: "#8e95e8",
  primaryBright: "#8e95e8",
  primaryDark: "#427bf5",
  secondary: "#a37960",
  success: "#9B9694",
  warning: "#b07b27",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#add6f0",
  backgroundDisabled: "#dde6da",
  contrast: "#b08a66",
  invertedContrast: "#f1faee",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#2b636e",
  textDisabled: "#a4a9ab",
  textSubtle: "#2b636e",
  borderColor: "#8C342B",
  card: "#b08a66",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#a37960",
  background: "#8e95e8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#00628B",
  tertiary: "#f7e9dc",
  text: "#857a48",
  textDisabled: "#BDC2C4",
  textSubtle: "#a37960",
  borderColor: "#524B63",
  card: "#00628B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
