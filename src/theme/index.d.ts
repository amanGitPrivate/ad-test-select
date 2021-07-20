export interface themeInterface {
  size: {
    small: string;
    large: string;
  };
  weight: {
    regular: string;
    medium: string;
    bold: string;
  };
  colors: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  };
  spacing: (spacing: number) => string;
  shadow: string;
}
