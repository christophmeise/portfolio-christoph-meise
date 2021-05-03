import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import FullStack from '../components/fullStack';
import { GlobalStyle } from '../components/globalStyle';
import HappyClients from '../components/happyClients';
import HeroIntro from '../components/heroIntro';
import Layout from '../components/layout';
import SelectedWorks from '../components/selectedWorks';
import Seo from '../components/seo';
import { device } from '../theme/theme';

interface IndexProps {
  data: {
    heroImage: any;
  };
}

const DarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  border-radius: ${(props) => props.theme.borderRadiusSectionMobile} 0px 0px 0px;
  padding: 64px 0;
  width: 100%;

  @media ${device.tablet} {
    border-radius: ${(props) => props.theme.borderRadiusSection} 0px 0px 0px;
  }

  section {
    margin-bottom: 128px;
  }
`;
export default class IndexPage extends React.PureComponent<IndexProps> {
  render() {
    const { data } = this.props;

    const sources = getImage(data.heroImage);
    const title = 'Portfolio Christoph Meise - ExploreChristoph';
    const description = 'Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany. ExploreChristoph now.';

    return (
      <>
        <Seo title={title} description={description} />
        <GlobalStyle />
        <Layout>
          <HeroIntro />
          <DarkModeContainer>
            <FullStack />
            <HappyClients />
            <SelectedWorks />
          </DarkModeContainer>
        </Layout>
      </>
    );
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
