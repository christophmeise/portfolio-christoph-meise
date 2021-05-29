import React, { PureComponent } from 'react';
import { Tween } from 'react-gsap';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';

export const ContactDarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  h1, h2, p, label {
    color: ${(props) => props.theme.colors.fontWhite};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
  }

  h1 {
    font-size: 68px;
    font-weight: 800;
    line-height: 78px;
    margin-top: 0;
  }
  h2 {
    font-size: 26px;
    line-height: 43px;
    margin: 0;
  }
`;
export const Subheadline = styled.div`
    display: flex;
    flex-direction: row;
`;
export const WhiteLine = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    margin-right: 28px;
    min-width: 4px;
`;
export const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media ${device.tablet} {
      padding-top: 125px;
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
        <Layout darkmode>
          <ContactDarkModeContainer>
            <Container>
              <ContainerContentStandard>
                <Tween
                  from={{ x: -100, opacity: 0 }}
                  to={{ x: 0, opacity: 1 }}
                  duration={1}
                  stagger={{ amount: 0.25 }}
                  wrapper={<ContactGrid />}
                >
                  <div>
                    <h1>Let's talk!</h1>
                    <Subheadline>
                      <WhiteLine />
                      <h2>
                        Tell me all about your project right here, or send me an email at
                        {' '}
                        <a href="mailto:projects@explorechristoph.com">projects@explorechristoph.com</a>
                      </h2>
                    </Subheadline>

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
                </Tween>
              </ContainerContentStandard>
            </Container>
          </ContactDarkModeContainer>
        </Layout>
      </>
    );
  }
}
