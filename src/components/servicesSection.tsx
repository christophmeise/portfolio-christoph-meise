import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;

  h2 {
    font-weight: 800;
    margin-top: 0;
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
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 16px;
    margin-right: 16px;
    margin-top:0;
    padding: 12px 24px;
`;

export default class ServicesSection extends PureComponent {
  tags = ['Corporate Applications', 'Branding & Visual Identity', 'Prototyping', 'Backend Integrations', 'Mobile App & Web Design', 'Content Management Systems', 'E-Commerce & Woocommerce',
    'Headless Wordpress', 'Performance optimization', 'Animation & Motion Design', 'Accessibility',
    'Personal Websites', 'Technical Consulting', 'Stripe & Braintree payments'];

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
                {this.tags.map((tag) => <ServiceTag>{tag}</ServiceTag>)}
              </ServiceTags>
            </ServicesColumn>
          </ServicesContainer>
        </ContainerContentStandard>
      </Container>
    );
  }
}
