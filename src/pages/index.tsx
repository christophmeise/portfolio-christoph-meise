import * as React from 'react';
import styled from 'styled-components';
import FullStack from '../components/fullStack';
import { GlobalStyle } from '../components/globalStyle';
import HappyClients from '../components/happyClients';
import HeroIntro from '../components/heroIntro';
import Layout from '../components/layout';
import Mac from '../components/mac';
import SelectedWorks from '../components/selectedWorks';
import Seo from '../components/seo';
import ServicesSection from '../components/servicesSection';
import Technologies from '../components/technologies';
import { device } from '../theme/theme';

interface IndexProps {
  data: {
    heroImage: any;
  };
}

export const DarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  border-radius: ${(props) => props.theme.borderRadiusSectionMobile} 0px ${(props) => props.theme.borderRadiusSectionMobile} 0px;
  overflow: hidden;
  padding-top: 100px;
  width: 100%;

  @media ${device.tablet} {
    padding-top: 150px;
    border-radius: ${(props) => props.theme.borderRadiusSection} 0px ${(props) => props.theme.borderRadiusSection} 0px;
  }
`;

export default class IndexPage extends React.PureComponent<IndexProps> {
  render() {
    const title = 'Christoph Meise - Software Engineer | Portfolio';
    const description = 'Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany. ExploreChristoph now.';

    return (
      <>
        <Seo title={title} description={description} />
        <GlobalStyle />
        <Layout showCallToAction showFooter>
          <HeroIntro />
          <DarkModeContainer className="content-section">
            <FullStack />
            <HappyClients />
            {typeof window !== 'undefined' && <Mac />}
            <SelectedWorks />
            <Technologies />
          </DarkModeContainer>
          <ServicesSection />
        </Layout>
      </>
    );
  }
}
