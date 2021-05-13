import React, { PureComponent } from 'react';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import { Container, ContainerContentFull, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import {
  LogoBayer, LogoDB, LogoDHL, LogoInnerLight, LogoOpremic, LogoSAP, LogoSCM, LogoSerrala, LogoWeWater
} from './clientLogos';
import { HeadlineDark, SubHeadlineDark } from './globalStyle';

export const ClientGridContainer = styled.div`
  position: relative;
   &:after {
      background-image: -webkit-linear-gradient(left,rgb(20 20 43) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgb(20 20 43) 100% );
      bottom: -20px;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: -20px;
    }
`;
export const ClientGrid = styled.div`
  &>div {
    column-gap: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    max-width: 950px;
    overflow-x: hidden;
    padding-bottom: 6rem;

    @media ${device.laptop} {
      column-gap: 24px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
export const ClientCol = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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
  align-items: center;
  background-color: #FFFFFF;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
  display: flex;
  height: 68px;
  justify-content: center;
  width:  120px;

  svg {
    max-height: 70%;
    max-width: 70%;
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

export default class HappyClients extends PureComponent {
  render() {
    return (
      <Container centered className="clients-trigger content-section">
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
              <Controller>
                <Scene duration={400} offset={-150} triggerElement=".clients-trigger">
                  <Tween
                    from={{ scale: 0, opacity: 0 }}
                    stagger={{ from: 'random', amount: 300, grid: [5, 3] }}
                    duration={300}
                    ease="power3.inOut"
                  >
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
                  </Tween>
                </Scene>
              </Controller>
            </ClientGrid>
          </ClientGridContainer>
        </ContainerContentFull>
      </Container>
    );
  }
}
