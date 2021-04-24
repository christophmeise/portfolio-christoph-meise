import * as React from "react";
import styled from "styled-components";
import { Container } from "../components/container";
import { GlobalStyle } from "../components/globalStyle";
import Layout from "../components/layout";

interface HeadlineProps {
  readonly primary?: boolean;
};

const Headline = styled.h1<HeadlineProps>`
    color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.fontBlack};
    line-height: 98px;
    margin-bottom: 0;
    margin-top: 0;
      text-align: right;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <Headline primary>Software Engineer</Headline>
          <Headline>Christoph Meise</Headline>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
