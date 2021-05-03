import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, ContainerContentFull, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import { LogoBayer, LogoDB, LogoDHL, LogoInnerLight, LogoOpremic, LogoSAP, LogoSCM, LogoSerrala, LogoWeWater } from './clientLogos';
import { HeadlineDark, SubHeadlineDark } from './globalStyle';

export const ClientGridContainer = styled.div`
  position: relative;
   &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -20px;
      bottom: -20px;
      background-image: -webkit-linear-gradient(left,rgb(20 20 43) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgb(20 20 43) 100% );
    }
`;
export const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 18px;
  max-width: 950px;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  overflow-x: hidden;
  padding-bottom: 6rem;

  @media ${device.laptop} {
    column-gap: 24px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
export const ClientCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:not(:first-child) {
    margin-top: 18px;
  }
    @media ${device.laptop} {
      div:not(:first-child) {
        margin-top: 24px;
      }
    }
`;
export const ClientRectangle = styled.div`
  background-color: #FFFFFF;
  width:  120px;
  height: 68px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 70%;
    max-height: 70%;
  }

  .innerlight {
    path {
      fill: #b99450;
    }
  }

  @media ${device.tablet} {
    width:  150px;
    height: 85px;
  }

  @media ${device.laptop} {
    width:  170px;
    height: 96px;
  }
`;

export default class HappyClients extends Component {
  render() {
    return (
      <Container centered>
        <ContainerContentStandard>
          <HeadlineDark style={{ marginBottom: '8px' }}>
            Happy Clients
        </HeadlineDark>
          <SubHeadlineDark>
            I had the pleasure to work with some of the most repected companies worldwide.
        </SubHeadlineDark>
        </ContainerContentStandard>
        <ContainerContentFull>
          <ClientGridContainer>
            <ClientGrid>
              <ClientCol>
                <ClientRectangle><LogoDHL /></ClientRectangle>
              </ClientCol>
              <ClientCol>
                <ClientRectangle><LogoBayer /></ClientRectangle>
                <ClientRectangle><LogoDB /></ClientRectangle>
              </ClientCol>
              <ClientCol>
                <ClientRectangle><LogoSerrala /></ClientRectangle>
                <ClientRectangle><LogoSAP /></ClientRectangle>
                <ClientRectangle><LogoInnerLight /></ClientRectangle>
              </ClientCol>
              <ClientCol>
                <ClientRectangle><LogoSCM /></ClientRectangle>
                <ClientRectangle><LogoWeWater /></ClientRectangle>
              </ClientCol>
              <ClientCol>
                <ClientRectangle><LogoOpremic /></ClientRectangle>
              </ClientCol>
            </ClientGrid>
          </ClientGridContainer>
        </ContainerContentFull>
      </Container>
    )
  }
}
