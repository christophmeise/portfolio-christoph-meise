/* eslint-disable @typescript-eslint/no-unused-vars */
import loadable from '@loadable/component';
import React, { PureComponent } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import { Container, ContainerContentStandard } from '../styles/container';
import { HeadlineDark } from './globalStyle';

const GlobeSection = styled.div`
    overflow: hidden;
    position: relative;
`;
const GlobeWrapper = styled.div`
    background: ${(props) => props.theme.colors.primaryBg};
    height: 100%;
    left: 0;
    overflow: hidden;
    position: relative;
    top: 0;
    width: 100%;
`;
const GlobeContainer = styled.div`
    height: 100%;
    overflow: visible;
    position: absolute;
    width: 100%;
`;
const GlobeTextContainer = styled.div`
    padding: 300px 0;
    pointer-events: none;
    h3, h4 {
      color: ${(props) => props.theme.colors.fontWhite};
    }
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
            <Scene duration={1000} pin triggerHook={0}>
              {(progress: any) => (
                <GlobeSection className="globe-trigger">
                  <Container>
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
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              y: 50, x: 0, scale: 2, visibility: 'hidden', opacity: 0
                            }}
                            to={{
                              y: 0, x: 0, scale: 1, visibility: 'visible', opacity: 1
                            }}
                            stagger={{ from: 'start', amount: 1, grid: [4, 1] }}
                          >
                            <h3>Worldwide. World Class.</h3>
                            <h4>40+ Happy Clients</h4>
                            <h4>80+ Projects Completed</h4>
                            <h4>8+ Years a Developer</h4>
                          </Tween>
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
