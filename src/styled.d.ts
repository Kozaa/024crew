import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string;
      secondary: string;
    };
    colors: {
      main: string;
      secondary: string;
      bg: string;
    };
  }
}
