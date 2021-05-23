/* eslint-disable @typescript-eslint/no-unused-vars */
import loadable from '@loadable/component';
import React, { PureComponent } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { device } from '../theme/theme';
import { HeadlineDark } from './globalStyle';

const GlobeSection = styled.div`
    overflow: hidden;
    position: relative;
`;
const GlobeWrapper = styled.div`
    background: ${(props) => props.theme.colors.primaryBg};
    height: 100vh;
    left: 0;
    overflow: hidden;
    position: relative;
    top: 0;
    width: 100%;

    canvas {
      cursor: grab;
    }
`;
const GlobeContainer = styled.div`
    height: 100vh;
    overflow: visible;
    position: absolute;
    width: 100%;
`;
const GlobeTextContainer = styled.div`

    pointer-events: none;
    position: relative;
    h3, h4, p {
      color: ${(props) => props.theme.colors.fontWhite};
    }

    .cv-item {
      margin-left: 30px;
    }

    @media ${device.laptop} {
      padding: 300px 0;
    }
`;

const TimelineContainer = styled.div`
  background: ${(props) => props.theme.colors.primary} linear-gradient(180deg,${(props) => props.theme.colors.primary} 1rem,${(props) => props.theme.colors.primaryBg} 50vh);
  content: '';
  height:100%;
  left: 0;
  opacity:0.3;
  position:absolute;
  width:3px;

`;

const CustomGlobe: any = loadable(() => import(/* webpackPrefetch: true */ './customGlobe'));
export default class Technologies extends PureComponent {
  render() {
    return (
      <div>
        <Controller>
          <div>
            <Container centered>
              <ContainerContentStandard>
                <Scene duration={400} triggerHook={0.9}>
                  <Tween
                    from={{
                      y: 50, x: 0, scale: 2, visibility: 'hidden', opacity: 0
                    }}
                    to={{
                      y: 0, x: 0, scale: 1, visibility: 'visible', opacity: 1
                    }}
                    stagger={{ from: 'start', amount: 1, grid: [3, 1] }}
                  >
                    <HeadlineDark>
                      Let's build something beautiful together.
                    </HeadlineDark>
                  </Tween>
                </Scene>
              </ContainerContentStandard>
            </Container>
            <Scene duration={2000} pin triggerHook={0.1}>
              {(progress: any) => (
                <GlobeSection className="globe-trigger">
                  <Container style={{ height: '100vh' }}>
                    <ContainerContentStandard>
                      <GlobeContainer>
                        <GlobeWrapper>
                          {typeof window !== 'undefined'
                            && (
                              <CustomGlobe />
                            )}
                        </GlobeWrapper>
                      </GlobeContainer>
                      <GlobeTextContainer>
                        <TimelineContainer />
                        <Timeline
                          totalProgress={progress}
                          paused
                          target={(
                            <>
                              <div className="cv-item">
                                <h3>Head of UX/UI</h3>
                                <p>WeWater gUG</p>
                                <p>01/2021 - now</p>
                              </div>
                              <div className="cv-item">
                                <h3>Senior Full-Stack Web Developer</h3>
                                <p>DB Systel GmbH</p>
                                <p>06/2020 - 07/2021</p>
                              </div>
                              <div className="cv-item">
                                <h3>Senior Java Engineer</h3>
                                <p>Serrala O2C Solutions GmbH</p>
                                <p>07/2019 - 04/2020</p>
                              </div>
                            </>
                          )}
                        >

                          <Tween
                            from={{
                              y: 50, opacity: 0
                            }}
                            to={{
                              y: 0, opacity: 1
                            }}
                            stagger={{
                              from: 'start', amount: 1, duration: 1
                            }}
                          />
                          <Tween
                            to={{
                              y: -100, opacity: 0
                            }}
                            stagger={{
                              from: 'start', amount: 1, duration: 1
                            }}
                          />
                        </Timeline>
                      </GlobeTextContainer>
                    </ContainerContentStandard>
                  </Container>
                </GlobeSection>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
    );
  }
}
