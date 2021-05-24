import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '../fonts/font.css';
import { theme } from '../theme/theme';
import Footer from './footer';
import Navbar from './navbar';

interface Props {
  children?: any;
}

export const MainSection = styled.main`
  .content-section {
    margin-bottom: 150px;
  }
  .content-section-small {
    margin-bottom: 100px;
  }
`;

class Layout extends PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className="flex-container">
          <Navbar />
          <MainSection role="main">
            {children}
            {/*  <CookieConsent
                        disableStyles={true}
                        location="bottom"
                        buttonText="Accept"
                        declineButtonText="Decline"
                        cookieName="gatsby-gdpr-google-analytics"
                        containerClasses="cookie-banner"
                        contentClasses="cookie-banner-content"
                        buttonClasses="ui primary button rounded"
                        declineButtonClasses="ui primary inverted button rounded"
                        buttonWrapperClasses="cookie-banner-button-wrapper"
                        enableDeclineButton
                        expires={150}
                    >
                        <div>
                            <Icon icon={cookieBite} />
                        </div>
                        <div>
                            <h6><Trans>Cookies policy</Trans></h6>
                            <p><Trans>Our website uses cookies to analyze how the site is used and to ensure your experience is consistent between visits. <Link to={'/dataprotection'}>Cookies Policy</Link></Trans></p>

                        </div>
                    </CookieConsent> */}
            <Footer />
          </MainSection>
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
