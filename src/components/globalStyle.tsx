import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
li,
ol {
    font-family: 'Manrope', sans-serif;
}

h1 {
    font-size: 72px;
    font-weight: 800;
}
h2 {
    font-size: 48px;
    font-weight: 800;
}
h3 {
    font-size: 40px;
    font-weight: 800;
}
h4 {
    font-size: 28px;
    font-weight: 800;
}
h5 {
    font-size: 24px;
    font-weight: 600;
}
h6 {
    font-size: 20px;
    font-weight: 500;
}

`;
