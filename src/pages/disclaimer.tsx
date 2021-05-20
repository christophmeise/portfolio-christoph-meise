import React, { PureComponent } from 'react';
import { DarkModeContainer } from '.';
import FullStack from '../components/fullStack';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default class Disclaimer extends PureComponent {
  render() {
    const title = 'Disclaimer | Portfolio Christoph Meise';
    const description = 'Disclaimer for Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany.';

    return (
      <>
        <Seo title={title} description={description} />
        <GlobalStyle />
        <Layout>
          <DarkModeContainer>
            <FullStack />
          </DarkModeContainer>
        </Layout>
      </>
    );
  }
}
