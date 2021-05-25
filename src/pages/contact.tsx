import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';

export const ContactDarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  border-radius: 0px 0px ${(props) => props.theme.borderRadiusSectionMobile} 0px;
  overflow: hidden;
  padding-top: 100px;
  width: 100%;
  h1, h2, p, label {
    color: ${(props) => props.theme.colors.fontWhite};
  }

  @media ${device.tablet} {
    padding-top: 150px;
    border-radius: 0px 0px ${(props) => props.theme.borderRadiusSection} 0px;
  }
`;
export default class Contact extends PureComponent {
  render() {
    const title = 'Contact | Portfolio Christoph Meise';
    const description = 'Contact for Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany.';

    return (
      <>
        <Seo title={title} description={description} />
        <GlobalStyle />
        <Layout>
          <ContactDarkModeContainer>
            <Container>
              <ContainerContentStandard>
                <div>
                  <h1>Contact me</h1>
                  <h2>
                    Leave a message and let's schedule a call
                  </h2>
                </div>
                <div className="main-content-sections">
                  <section>
                    <ContactForm disabled={false} />
                    <div
                      className="ml-form-embed"
                      data-account="2640527:j8z7t0x0z3"
                      data-form="3879751:p0f6l7"
                    />
                  </section>
                </div>
              </ContainerContentStandard>
            </Container>
          </ContactDarkModeContainer>
        </Layout>
      </>
    );
  }
}
