import React, { PureComponent } from 'react';
import { Tween } from 'react-gsap';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Container, ContainerContentStandard } from '../styles/container';
import { ContactGrid, Subheadline, WhiteLine } from './contact';

export const ImprintDarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  h1, h2, h3, h4, h5, h6, p, ul, li, ol, label {
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

  section {
    margin-top: 64px;
  }
`;
export default class Imprint extends PureComponent {
  render() {
    const title = 'Imprint | Portfolio Christoph Meise';
    const description = 'Imprint for Portfolio of Christoph Meise, Full-Stack Software Engineer and Freelancer in Berlin, Germany.';

    return (
      <>
        <Seo title={title} description={description} />
        <GlobalStyle />
        <Layout darkmode>
          <ImprintDarkModeContainer>
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
                    <h1>Imprint</h1>
                    <Subheadline>
                      <WhiteLine />
                      <h2>
                        If you have any questions, reach out to me directly
                        <br />
                        {' '}
                        <a href="mailto:projects@explorechristoph.com">projects@explorechristoph.com</a>
                      </h2>
                    </Subheadline>
                  </div>
                  <section>
                    <p>
                      <b>Christoph Meise</b>
                    </p>
                    <p>Ahornstraße 26</p>
                    <p>12163 Berlin</p>
                    <p>Phone: +49 1522 4054008</p>
                    <p>Email: projects@explorechristoph.com</p>
                  </section>
                </Tween>
              </ContainerContentStandard>
            </Container>
          </ImprintDarkModeContainer>
        </Layout>
      </>
    );
  }
}
