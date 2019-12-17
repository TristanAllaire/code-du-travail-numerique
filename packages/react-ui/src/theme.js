import { rgba } from "polished";

export const colors = {
  // main colors
  primary: "#ff7067",
  secondary: "#7598d6",

  heroGradientStart: "#d1dffd",

  // global colors
  white: "#fff",
  bgPrimary: "#fff",
  bgSecondary: "#f2f5fa",
  bgTertiary: "#e4e8ef",
  border: "#bbcadf",

  // text colors
  title: "#2f3b6c",
  paragraph: "#3e486e",
  altText: "#4d73b8",
  placeholder: "#9298af",

  // form colors
  error: "#eb5757",
  validate: "#7bd0ac"
};

colors.primaryText = colors.white;
colors.secondaryText = colors.white;

/* Rem with a 10px base */

export const spacings = {
  tiny: "0.4rem",
  xsmall: "0.8rem",
  small: "1rem",
  base: "1.6rem",
  medium: "2rem",
  xmedium: "2.4rem",
  large: "3.2rem",
  larger: "4rem"
};

export const fonts = {
  lineHeight: "1.625",
  lineHeightTitle: "1.25",
  sizes: {
    tiny: "1.2rem",
    small: "1.4rem",
    default: "1.6rem",
    headings: {
      small: "1.8rem",
      xmedium: "2.2rem",
      medium: "2.8rem",
      large: "3.2rem"
    },
    medium: "2rem"
  }
};

export const breakpoints = {
  desktop: "1180px",
  tablet: "980px",
  mobile: "600px",
  intDesktop: 1180,
  intTablet: 980,
  intMobile: 600
};

const largeShadow = "0 1rem 5rem";
const smallShadow = "0 1rem 1.5rem";

export const box = {
  border(color) {
    return `1px solid ${color}`;
  },
  borderRadius: "0.6rem",
  shadow: {
    default(color) {
      return `${largeShadow} ${rgba(color, 0.12)}, ${smallShadow} ${rgba(
        color,
        0.1
      )}`;
    },
    large(color) {
      return `${largeShadow} ${rgba(color, 0.2)}, ${smallShadow} ${rgba(
        color,
        0.25
      )}`;
    }
  }
};

export const animations = {
  transitionTiming: "250ms"
};
