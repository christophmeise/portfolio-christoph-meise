import styled, { createGlobalStyle } from 'styled-components';

export const HeadlineDark = styled.h2`
  color: ${props => props.theme.colors.fontWhite};
`;
export const SubHeadlineDark = styled.h3`
  font-size: 18px;
  margin: 0;
  line-height: 32px;
  font-weight: 400;
  color: ${props => props.theme.colors.fontWhite};
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
