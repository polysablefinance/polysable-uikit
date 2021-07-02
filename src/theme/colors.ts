import { Colors } from "./types";

export const baseColors = {
  failure: "#c71a25",
  primary: "#b59631",
  primaryBright: "#b59631",
  primaryDark: "#e01616",
  secondary: "#a3ab30",
  success: "#9B9694",
  warning: "#b07b27",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#eda185",
  backgroundDisabled: "#dde6da",
  contrast: "#b08a66",
  invertedContrast: "#f1faee",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#6e3b6e",
  textDisabled: "#a4a9ab",
  textSubtle: "#6e3b6e",
  borderColor: "#8C342B",
  card: "#b08a66",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#d62261",
  background: "#6b5c20",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#277a51",
  tertiary: "#f7e9dc",
  text: "#d62261",
  textDisabled: "#BDC2C4",
  textSubtle: "#d62261",
  borderColor: "#524B63",
  card: "#277a51",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
