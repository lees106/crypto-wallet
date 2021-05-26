import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#1E1E1E",
  secondary: "#3B3B3B",

  white: "#fff",
  lightGreen: "#4BEE70",
  red: "#D84035",
  black: "#000000",
  gray: "#212125",
  gray1: "#1f1f1f",
  lightGray: "#3B3B3B",
  lightGray2: "#212125",
  lightGray3: "#757575",
  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.8)",
  transparentBlack1: "rgba(0, 0, 0, 0.4)",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const ROBOTO = {
  largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const POPPINS = {
  h0: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 60,
    lineHeight: 68,
    letterSpacing: 0,
    color: "white",
  },
  h1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0,
    color: "white",
  },
  h2: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: 0,
    color: "white",
  },
  h3: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0,
    color: "white",
  },
  h4: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
    color: "white",
  },
  h5: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    color: "white",
  },
  h6: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    color: "white",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
    color: "white",
  },
};

export const INTER = {
  titleM: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  titleS: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
  },
  buttonL: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  buttonS: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
  },
  tab: {
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyL: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyS: {
    fontFamily: "Inter-Medium",
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyBold: {
    fontFamily: "Inter-Bold",
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyReg: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0,
  },
  captionL: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  captionS: {
    fontFamily: "Inter-Medium",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0,
  },
  chip: {
    fontFamily: "Inter-Bold",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
  },
};

const appTheme = { COLORS, SIZES, ROBOTO, POPPINS, INTER };

export default appTheme;
