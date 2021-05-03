import styled, { createGlobalStyle } from 'styled-components';

export const HeadlineDark = styled.h2`
  color: ${(props) => props.theme.colors.fontWhite};
`;
export const SubHeadlineDark = styled.h3`
  color: ${(props) => props.theme.colors.fontWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

`;
