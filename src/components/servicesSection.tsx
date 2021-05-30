import React, { PureComponent } from 'react';
import { Reveal, Tween } from 'react-gsap';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  h2 {
    font-weight: 800;
    margin-top: 0;
  }

    @media ${device.tablet} {
      grid-template-columns: 1fr 2fr;
    }

`;
export const ServicesColumn = styled.div`
  position: relative;
`;
export const ServiceTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
`;
export const ServiceTag = styled.p`
    border: 1px solid rgba(102,95,130,.15);
    border-radius: 40px;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 16px;
    margin-right: 8px;
    margin-top:0;
    padding: 8px 16px;

    @media ${device.tablet} {
      margin-right: 16px;
      line-height: 21px;
      font-size: 16px;
      padding: 12px 24px;
    }
`;

export default class ServicesSection extends PureComponent {
  tags = ['Corporate Applications', 'Prototyping', 'Branding & Visual Identity', 'E-Commerce', 'Backend Integrations', 'Accessibility', 'Mobile & Web Design', 'Headless Wordpress', 'Technical Consulting', 'Woocommerce',
    'Performance optimization', 'Animation', 'Personal Websites', 'Motion Design',
    'Stripe & Braintree payments', 'Content Management Systems'];

  render() {
    return (
      <Container id="services-section" className="services-section-trigger content-section">
        <ContainerContentStandard>
          <ServicesContainer>
            <ServicesColumn>
              <h2>Services</h2>
            </ServicesColumn>
            <ServicesColumn>
              <ServiceTags>
                <Reveal threshold={1}>
                  <Tween
                    from={{ x: -50, opacity: 0 }}
                    to={{ x: 0, opacity: 1 }}
                    stagger={{ from: 'start', amount: 1 }}
                  >
                    {this.tags.map((tag) => <ServiceTag key={tag}>{tag}</ServiceTag>)}
                  </Tween>
                </Reveal>
              </ServiceTags>
            </ServicesColumn>
          </ServicesContainer>
        </ContainerContentStandard>
      </Container>
    );
  }
}
