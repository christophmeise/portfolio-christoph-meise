import React, { PureComponent } from 'react';
import { Reveal, Tween } from 'react-gsap';
import styled from 'styled-components';
import { Container, ContainerContentFull, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import {
  LogoDB, LogoInnerLight, LogoMercedes, LogoOpremic, LogoSAP, LogoSCM, LogoSerrala, LogoStellMichEin, LogoWeWater
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

    .client-col {
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
      .client-rectangle {
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
  #mb-svg {
    max-height: 85% !important;
    max-width: 85% !important;
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
      }
  }
`;
export default class HappyClients extends PureComponent {
  render() {
    return (
      <Container centered className="clients-trigger content-section-small">
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
              {/*               <Controller>
                <Scene duration={650} offset={-200} triggerElement=".clients-trigger">
                  {(progress: any) => (
                    <Timeline
                      totalProgress={progress}
                    > */}
              <Reveal threshold={1}>
                <Tween
                  from={{ y: 50, opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  duration={1}
                  wrapper={<div className="client-col" />}
                  position="<"
                >
                  <div className="client-rectangle"><LogoInnerLight /></div>
                </Tween>
                <Tween
                  from={{ y: 50, opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  stagger={{ from: 'start', amount: 0.5 }}
                  duration={1}
                  wrapper={<div className="client-col" />}
                  position="<"
                >
                  <div className="client-rectangle"><LogoStellMichEin /></div>
                  <div className="client-rectangle"><LogoDB /></div>
                </Tween>
                <Tween
                  from={{ y: 50, opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  stagger={{ from: 'start', amount: 0.5 }}
                  duration={1}
                  wrapper={<div className="client-col" />}
                  position="<"
                >
                  <div className="client-rectangle"><LogoSerrala /></div>
                  <div className="client-rectangle"><LogoSAP /></div>
                  <div className="client-rectangle"><LogoMercedes /></div>
                </Tween>
                <Tween
                  from={{ y: 50, opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  stagger={{ from: 'start', amount: 0.5 }}
                  duration={1}
                  wrapper={<div className="client-col" />}
                  position="<"
                >
                  <div className="client-rectangle"><LogoSCM /></div>
                  <div className="client-rectangle"><LogoWeWater /></div>
                </Tween>
                <Tween
                  from={{ y: 50, opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  duration={1}
                  wrapper={<div className="client-col" />}
                  position="<"
                >
                  <div className="client-rectangle"><LogoOpremic /></div>
                </Tween>
              </Reveal>
              {/*                     </Timeline>
                  )}
                </Scene>
              </Controller> */}
            </ClientGrid>
          </ClientGridContainer>
        </ContainerContentFull>
      </Container>
    );
  }
}
