import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
}
@font-face {
    font-family: 'Roboto-reg';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/Roboto-Regular.ttf');
}
@font-face {
    font-family: 'Roboto-medium';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/Roboto-Medium.ttf');
}
@font-face {
    font-family: 'Roboto-bold';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/Roboto-Bold.ttf');
}

`;
