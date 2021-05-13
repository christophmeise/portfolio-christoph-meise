import * as React from 'react';
import styled from 'styled-components';
import FullStack from '../components/fullStack';
import { GlobalStyle } from '../components/globalStyle';
import HappyClients from '../components/happyClients';
import HeroIntro from '../components/heroIntro';
import Layout from '../components/layout';
import SelectedWorks from '../components/selectedWorks';
import Seo from '../components/seo';
import Technologies from '../components/technologies';
import { device } from '../theme/theme';

interface IndexProps {
  data: {
    heroImage: any;
  };
}

const DarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  border-radius: ${(props) => props.theme.borderRadiusSectionMobile} 0px ${(props) => props.theme.borderRadiusSectionMobile} 0px;
  overflow: hidden;
  padding: 150px 0;
  width: 100%;

  @media ${device.tablet} {
    border-radius: ${(props) => props.theme.borderRadiusSection} 0px ${(props) => props.theme.borderRadiusSection} 0px;
  }

  .content-section {
    margin-bottom: 150px;
  }
`;
export default class IndexPage extends React.PureComponent<IndexProps> {
  render() {
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
            <Technologies />
          </DarkModeContainer>
        </Layout>
      </>
    );
  }
}
