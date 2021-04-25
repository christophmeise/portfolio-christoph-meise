import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { Component } from "react";
import FullStack from "../components/fullStack";
import { GlobalStyle } from "../components/globalStyle";
import HeroIntro from "../components/heroIntro";
import Layout from "../components/layout";

interface IndexProps {
  data: {
    heroImage: any;
  };
}
export default class IndexPage extends Component<IndexProps> {

  constructor(props: IndexProps) {
    super(props);
  }

  render() {
    const { data } = this.props;

    const sources = getImage(data.heroImage);

    return (
      <>
        <GlobalStyle />
        <Layout>
          <HeroIntro />
          <FullStack />
        </Layout>
      </>
    )
  }

}

export const pageQuery = graphql`
query {
  heroImage: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
}
`;

