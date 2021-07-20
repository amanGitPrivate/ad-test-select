export const theme = {
  size: {
    small: "12px",
    large: "16px",
  },
  weight: {
    regular: "regular",
    medium: "medium",
    bold: "bold",
  },
  colors: {
    100: "#00A3BE",
    200: "#05778F",
    300: "#F9FAFC",
    400: "#ECEEF4",
    500: "#CDD0E0",
    600: "#6E7492",
    700: "#191D2F",
  },
  spacing: (spacing: number) => {
    return `${4 * spacing}px`;
  },
  shadow: `0 2px 8px 0 #6E749226`,
};
