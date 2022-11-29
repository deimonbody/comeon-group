import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      black: string;
      white: string;
      btnColor: string;
      error: string;
      btnLoading: string;
    };
    fonts: {
      bold: string;
      medium: string;
      regular: string;
    };
  }
}
