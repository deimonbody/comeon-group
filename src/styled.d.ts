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
      grayColor: string;
      grayText: string;
    };
    fonts: {
      bold: string;
      medium: string;
      regular: string;
    };
  }
}
