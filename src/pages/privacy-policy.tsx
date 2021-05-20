import React, { PureComponent } from 'react';
import { DarkModeContainer } from '.';
import FullStack from '../components/fullStack';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default class PrivacyPolicy extends PureComponent {
  render() {
    const title = 'Privacy Policy | Portfolio Christoph Meise';
    const description = 'Privacy Policy for Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany.';

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
